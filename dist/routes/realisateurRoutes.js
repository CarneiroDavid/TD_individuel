"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Realisateur_1 = __importDefault(require("../models/Realisateur")); // Importez le modèle Mongoose pour le réalisateur
const router = express_1.default.Router();
// Middleware pour le corps de la requête JSON
router.use(express_1.default.json());
// Route pour ajouter un réalisateur à la base de données
router.post('/addReal', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newDirector = req.body;
        const directorInstance = new Realisateur_1.default(newDirector);
        const savedDirector = yield directorInstance.save();
        // Répondez avec le réalisateur ajouté et le statut HTTP 201 (Créé avec succès)
        res.status(201).json(savedDirector);
    }
    catch (error) {
        // En cas d'erreur, répondez avec le statut HTTP 500 (Erreur de serveur interne) et un message d'erreur
        res.status(500).json();
    }
}));
// Route pour récupérer tous les réalisateurs
// router.get('/directors', (req, res) => {
//     try {
//         // Récupérer tous les auteurs depuis la base de données
//         const auteurs = await IDirector.find();
//         res.status(200).json(auteurs);
//     } catch (error) {
//         console.error("Erreur lors de la récupération des auteurs depuis la base de données:", error);
//         res.status(500).json({ message: "Erreur lors de la récupération des auteurs depuis la base de données" });
//     }
// });
// Route pour récupérer un réalisateur par son nom
// router.get('/directors/:name', (req, res) => {
//     const name = req.params.name;
//     const director = directors.find(d => d.name === name);
//     if (director) {
//         res.json(director);
//     } else {
//         res.status(404).json({ message: "Réalisateur non trouvé." });
//     }
// });
// Route pour mettre à jour un réalisateur
// router.put('/directors/:name', (req, res) => {
//     const name = req.params.name;
//     const index = directors.findIndex(d => d.name === name);
//     if (index !== -1) {
//         directors[index] = req.body;
//         res.json(directors[index]);
//     } else {
//         res.status(404).json({ message: "Réalisateur non trouvé." });
//     }
// });
// Route pour supprimer un réalisateur
// router.delete('/directors/:name', (req, res) => {
//     const name = req.params.name;
//     const index = directors.findIndex(d => d.name === name);
//     if (index !== -1) {
//         directors.splice(index, 1);
//         res.json({ message: "Réalisateur supprimé avec succès." });
//     } else {
//         res.status(404).json({ message: "Réalisateur non trouvé." });
//     }
// });
exports.default = router;
