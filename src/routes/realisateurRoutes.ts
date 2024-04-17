import express from 'express';
import DirectorModel from '../models/Realisateur'; 

const router = express.Router();

router.use(express.json());

// Route pour ajouter un réalisateur à la base de données
router.post('/addReal', async (req, res) => {
    try {
        const newDirector = req.body;
        const directorInstance = new DirectorModel(newDirector);
        const savedDirector = await directorInstance.save();
        res.status(201).json(savedDirector);
    } catch (error) {
        res.status(500).json();
    }
});

// Route pour récupérer tous les réalisateurs
router.get('/getReal', async (req, res) => {
    try {
        const directors = await DirectorModel.find();
        res.status(200).json(directors);
    } catch (error) {
        console.error("Erreur lors de la récupération des réalisateurs depuis la base de données:", error);
        res.status(500).json({ message: "Erreur lors de la récupération des réalisateurs depuis la base de données" });
    }
});

// Route pour récupérer un réalisateur par son id
router.get('/getReal/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const director = await DirectorModel.findById(id);
        if (director) {
            res.json(director);
        } else {
            res.status(404).json({ message: "Réalisateur non trouvé." });
        }
    } catch (error) {
        console.error("Erreur lors de la recherche du réalisateur par _id:", error);
        res.status(500).json({ message: "Erreur lors de la recherche du réalisateur par _id" });
    }
});

// Route pour mettre à jour un réalisateur
router.put('/modifReal/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const updatedDirector = await DirectorModel.findByIdAndUpdate(id, update, { new: true });
        if (updatedDirector) {
            res.json(updatedDirector);
        } else {
            res.status(404).json({ message: "Réalisateur non trouvé." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour du réalisateur par ID:", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du réalisateur par ID" });
    }
});

router.delete('/deleteReal/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedDirector = await DirectorModel.findByIdAndDelete(id);
        if (deletedDirector) {
            res.json({ message: "Réalisateur supprimé avec succès." });
        } else {
            res.status(404).json({ message: "Réalisateur non trouvé." });
        }
    } catch (error) {
        // En cas d'erreur, loggez l'erreur et répondez avec le statut HTTP 500 (Erreur de serveur interne) et un message d'erreur
        console.error("Erreur lors de la suppression du réalisateur par ID:", error);
        res.status(500).json({ message: "Erreur lors de la suppression du réalisateur par ID" });
    }
});

export default router;
