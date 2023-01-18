import { body } from "express-validator";

export const organizerValidator = [
  body("anprechperson")
    .notEmpty()
    .withMessage("Vorname muss angegeben werden.")
    .isAlpha("de-DE", { ignore: " -" })
    .withMessage("Vorname enthält unzulässige Zeichen")
    .trim(),

  body("email")
    .notEmpty()
    .withMessage("E-Mail muss angegeben werden")
    .trim()
    .isEmail()
    .withMessage("E-Mail-Format ist ungültig")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Passwort muss angegeben werden.")
    .trim()
    .withMessage(
      "Passwort ist nicht sicher. Es soll mindestens acht Zeichen enthalten, davon mindestens eine Kleinbuchstabe, mindestens eine Großbuchstabe, mindestens eine Nummer und mindestens ein Sonderzeichen."
    ),

  body("passwordWiderholen")
    .notEmpty()
    .withMessage("Passwort muss wiederholen.")
    .trim(),
];

export const organizerUpdateValidator = [
  body("anprechperson")
    .optional()
    .isAlpha("de-DE", { ignore: " -" })
    .withMessage("Vorname enthält unzulässige Zeichen")
    .trim(),
];
