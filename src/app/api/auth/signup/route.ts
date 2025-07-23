import {connect} from "@/db/index";
import User from "@/models/usermodels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {name, email, phone, address, coordinates, password} = reqBody;

        console.log(reqBody);

        // user check !!!
        const user = await User.findOne({email: email});
        if(user){
            return NextResponse.json({
                error: "User already have account",
            }, {status: 400});
        }
        
        

        // hash password !!
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
        
        // saving the new user !!!
        const newUser = new User({
            name: name,
            email: email,
            address: address,
            phone: phone,
            password: hashPassword,
        });
        const savedUser = await newUser.save();
        console.log(savedUser);
        
        return NextResponse.json({
            message: "User created succesfully",
            success: true,
            savedUser
        }, {status: 200});
    }catch (err: any){
        return NextResponse.json({error: err.message},
            {status: 500},
        )
    }
}