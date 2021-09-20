import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const EntrySchema = new Schema({
    date: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    entry: {
        type: String,
        required: true,
    },
},{
    timestamps: true
});

const Entry = mongoose.model("Entry", EntrySchema);
export default Entry;
