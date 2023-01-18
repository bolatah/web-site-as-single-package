import { LOCALES } from "../locales";
import { enMessages } from "./enMessages";
import { deMessages } from "./deMessages";
import { trMessages } from "./trMessages";

export const messages = {
  [LOCALES.ENGLISH]: enMessages,
  [LOCALES.GERMAN]: deMessages,
  [LOCALES.TURKISH]: trMessages,
};
