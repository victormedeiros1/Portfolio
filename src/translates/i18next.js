import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { messages } from "./languages"; // Onde as mensagens estão vindo.
const languageDetector = new LanguageDetector();

i18next.use(languageDetector).init({
  debug: false, // Não ficar mostrando o que ele está na fazendo no console
  defaultNS: ["translations"],
  fallbackLng: "enUS", // Linguagem padrão
  ns: ["translations"], //
  resources: messages, // Onde iremos buscar as mensagens
});

export default i18next;
