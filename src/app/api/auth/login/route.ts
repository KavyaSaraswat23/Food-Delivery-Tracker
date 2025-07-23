import {connect} from "@/db/index";
import User from "@/models/usermodels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect();

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({email: email});
        if (!user){
            return NextResponse.json({error: "User does not exist"},
                {status: 400}
            )
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword){
            return NextResponse.json({error: "Invalid password"},
                {status: 400}
            )
        }
        // create token data !!
        const tokenData = {
            id: user._id,
            email: user.email,
            phone: user.phone,
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

        const response = NextResponse.json({
            message: "Login succesful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true});
            
        return response;
    }catch(err: any) {
        return NextResponse.json({error: err.message},
            {status: 500})
    }
    
}