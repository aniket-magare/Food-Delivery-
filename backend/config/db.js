    import mongoose from "mongoose";


    export const connectDb = async() =>{
        // await mongoose.connect('mongodb+srv://aniketmagare8609:<Aniket.8609>@cluster0.y6dklfx.mongodb.net/fooddelivery').then(()=>{console.log("DB connected");
        // })
        await mongoose.connect('mongodb+srv://aniketmagare8609:Aniket.8609@cluster0.y6dklfx.mongodb.net/fooddelivery').then(()=>{console.log("DB connected")

        });

    // added this one to handle error if occured 
    //     mongoose.connect('mongodb+srv://aniketmagare8609:Aniket.8609@cluster0.y6dklfx.mongodb.net/fooddelivery', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //       }).then(() => {
    //         console.log("DB connected");
    //       }).catch((error) => {
    //         console.error("DB connection failed:", error);
    //       });
}
