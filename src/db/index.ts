import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Database connected Sucessfully")
        });

        connection.on('err', (err) => {
            console.log('Database connection error, please make sure that database is running'+ err);
            err.process.exit();
        })
    } catch(err){
        console.log('Something went wrong!');
        console.log(err);
    }
}