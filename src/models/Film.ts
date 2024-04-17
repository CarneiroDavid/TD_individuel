import mongoose, { Schema, Document } from 'mongoose';
import { IDirector } from './Realisateur'; // Assurez-vous que le chemin d'accès est correct

// Définition de l'interface pour le modèle de film
interface IFilm extends Document { 
    title: string; 
    releaseYear: number; 
    genre: string; 
    directors: IDirector[];
}

// Définition du schéma pour le modèle de film
const FilmSchema: Schema = new Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: { type: String, required: true },
    directors: [{ type: Schema.Types.ObjectId, ref: 'Director' }] // Référence vers le modèle de réalisateur
});

// Création du modèle de film à partir du schéma
const FilmModel = mongoose.model<IFilm>('Film', FilmSchema);

export default FilmModel;
