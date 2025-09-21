import { Router } from "express";
import * as characterController from "../controllers/characterControllers";

const router = Router();

router.post("/", characterController.createCharacter);
router.get("/", characterController.getCharacters);
router.get("/:id", characterController.getCharacterById);
router.put("/:id", characterController.updatedCharacter);
router.delete("/:id", characterController.deletedCharacter);

export default router;