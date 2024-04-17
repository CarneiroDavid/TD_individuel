import mongoose, { Schema, Document } from 'mongoose';
import IFilm from './Film';

interface ISession extends Document { 
    film: typeof IFilm; 
    date: Date; 
    time: string; 
    availableSeats: number;
}

const SessionSchema: Schema = new Schema({
    film: { type: Schema.Types.ObjectId, ref: 'Film', required: true }, // Référence vers le modèle de film
    date: { type: Date, required: true },
    time: { type: String, required: true },
    availableSeats: { type: Number, required: true }
});

const SessionModel = mongoose.model<ISession>('Seance', SessionSchema);

export default SessionModel;
