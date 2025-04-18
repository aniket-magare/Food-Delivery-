    import mongoose from "mongoose";


    export const connectDb = async() =>{
     
        await mongoose.connect('add your mangodb atlas cluster link her').then(()=>{console.log("DB connected")

        });

    // added this one to handle error if occured 
    //     mongoose.connect('add your mangodb atlas cluster link here', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //       }).then(() => {
    //         console.log("DB connected");
    //       }).catch((error) => {
    //         console.error("DB connection failed:", error);
    //       });
}
