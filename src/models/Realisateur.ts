import mongoose, { Schema, Document } from 'mongoose';

interface Director extends Document {
    name: string;
    birthDate: Date;
    biography: string;
}

const DirectorSchema: Schema = new Schema({
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    biography: { type: String, required: true }
});

const DirectorModel = mongoose.model<Director>('Director', DirectorSchema);

export default DirectorModel;
