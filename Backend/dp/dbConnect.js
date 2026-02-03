import mongoose from "mongoose";

const connect = async (URI) => {
    try {
        await mongoose.connect(URI);
        console.log("database is connected");
    } catch (error) {
        console.log("error in mongo connection", error);
    }
}

export default connect