import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    did: { type: String, required: true, unique: true },
    pseudoname: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
