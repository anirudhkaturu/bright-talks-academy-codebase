import mongoose from "mongoose";

function connectDb(connection_string) {
    return mongoose.connect(connection_string);
}

export default connectDb;
