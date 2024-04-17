import express, { Express } from 'express';
import mongoose from 'mongoose';
import realRoutes from './routes/realisateurRoutes';

const app: Express = express();
const PORT = 3002;
const uri = "mongodb+srv://davidfoot7850:test@cinema.dq0nr28.mongodb.net/?retryWrites=true&w=majority&appName=cinema";

mongoose.connect(uri).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});

app.use(express.json());
app.use('/api', realRoutes); // Utilisez /api comme préfixe pour toutes les routes dans realRoutes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
