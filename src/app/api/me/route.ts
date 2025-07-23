import { getTokenData } from "@/helpers/getToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/usermodels";
import { connect } from "@/db/index";

connect();
// check here
export async function GET(request: NextRequest) {
    try {
        const userId = await getTokenData(request);
        const user = await User.findOne({ _id: userId }).
            select("-password ");
        return NextResponse.json({
            message: 'User found',
            data: user,
        })
    } catch (err: any) {
        return NextResponse.json({ error: err.message },
            { status: 400 }
        );
    }
}
