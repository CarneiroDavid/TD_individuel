import express from 'express';
import FilmModel from '../models/Film'; 

const router = express.Router();

router.use(express.json());

// Route pour ajouter un film à la base de données
router.post('/addFilm', async (req, res) => {
    try {
        const newFilm = req.body;
        const filmInstance = new FilmModel(newFilm);
        const savedFilm = await filmInstance.save();
        res.status(201).json(savedFilm);
    } catch (error) {
        res.status(500).json();
    }
});

// Route pour récupérer tous les films
router.get('/getFilms', async (req, res) => {
    try {
        const films = await FilmModel.find();
        res.status(200).json(films);
    } catch (error) {
        console.error("Erreur lors de la récupération des films depuis la base de données:", error);
        res.status(500).json({ message: "Erreur lors de la récupération des films depuis la base de données" });
    }
});

// Route pour récupérer un film par son id
router.get('/getFilm/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const film = await FilmModel.findById(id);
        if (film) {
            res.json(film);
        } else {
            res.status(404).json({ message: "Film non trouvé." });
        }
    } catch (error) {
        console.error("Erreur lors de la recherche du film par _id:", error);
        res.status(500).json({ message: "Erreur lors de la recherche du film par _id" });
    }
});

// Route pour mettre à jour un film
router.put('/modifFilm/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const updatedFilm = await FilmModel.findByIdAndUpdate(id, update, { new: true });
        if (updatedFilm) {
            res.json(updatedFilm);
        } else {
            res.status(404).json({ message: "Film non trouvé." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour du film par ID:", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du film par ID" });
    }
});

// Route pour supprimer un film
router.delete('/deleteFilm/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedFilm = await FilmModel.findByIdAndDelete(id);
        if (deletedFilm) {
            res.json({ message: "Film supprimé avec succès." });
        } else {
            res.status(404).json({ message: "Film non trouvé." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression du film par ID:", error);
        res.status(500).json({ message: "Erreur lors de la suppression du film par ID" });
    }
});

export default router;
