
import mongoose from 'mongoose';

const connectMongo = async () => {
    if (mongoose.connection.readyState === 1) return;
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

export default connectMongo;