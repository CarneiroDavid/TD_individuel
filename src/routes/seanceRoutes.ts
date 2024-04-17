import express from 'express';
import SessionModel from '../models/Seance'; 

const router = express.Router();

router.use(express.json());

// Ajout séance
router.post('/addSeance', async (req, res) => {
    try {
        const newSession = req.body;
        const sessionInstance = new SessionModel(newSession);
        const savedSession = await sessionInstance.save();
        res.status(201).json(savedSession);
    } catch (error) {
        res.status(500).json();
    }
});

// Affichage séances
router.get('/getSeances', async (req, res) => {
    try {
        const sessions = await SessionModel.find();
        res.status(200).json(sessions);
    } catch (error) {
        console.error("Erreur lors de la récupération des séances depuis la base de données:", error);
        res.status(500).json({ message: "Erreur lors de la récupération des séances depuis la base de données" });
    }
});

// Affichage 1 séance
router.get('/getSeance/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const session = await SessionModel.findById(id);
        if (session) {
            res.json(session);
        } else {
            res.status(404).json({ message: "Séance non trouvée." });
        }
    } catch (error) {
        console.error("Erreur lors de la recherche de la séance par _id:", error);
        res.status(500).json({ message: "Erreur lors de la recherche de la séance par _id" });
    }
});

// Maj 1 séance
router.put('/modifSeance/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const updatedSession = await SessionModel.findByIdAndUpdate(id, update, { new: true });
        if (updatedSession) {
            res.json(updatedSession);
        } else {
            res.status(404).json({ message: "Séance non trouvée." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la séance par ID:", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de la séance par ID" });
    }
});

// Suppr 1 séance
router.delete('/deleteSeance/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedSession = await SessionModel.findByIdAndDelete(id);
        if (deletedSession) {
            res.json({ message: "Séance supprimée avec succès." });
        } else {
            res.status(404).json({ message: "Séance non trouvée." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la séance par ID:", error);
        res.status(500).json({ message: "Erreur lors de la suppression de la séance par ID" });
    }
});

export default router;
