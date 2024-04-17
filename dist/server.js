"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const realisateurRoutes_1 = __importDefault(require("./routes/realisateurRoutes"));
const app = (0, express_1.default)();
const PORT = 3002;
const uri = "mongodb+srv://davidfoot7850:test@cinema.dq0nr28.mongodb.net/?retryWrites=true&w=majority&appName=cinema";
mongoose_1.default.connect(uri).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
});
app.use(express_1.default.json());
app.use('/api/addReal', realisateurRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
