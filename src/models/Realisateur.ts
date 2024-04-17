import mongoose, { Schema, Document } from 'mongoose';

// Définition de l'interface pour le modèle de réalisateur
export interface IDirector extends Document {
    name: string;
    birthDate: Date;
    biography: string;
}

// Définition du schéma pour le modèle de réalisateur
const DirectorSchema: Schema = new Schema({
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    biography: { type: String, required: true }
});

// Création du modèle de réalisateur à partir du schéma
const DirectorModel = mongoose.model<IDirector>('Director', DirectorSchema);

export default DirectorModel;
