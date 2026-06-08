const languageMap = {
  Tamil: "ta",
  Hindi: "hi",
  Telugu: "te",
  Malayalam: "ml",
  Kannada: "kn",
  Marathi: "mr",
  Bengali: "bn",
  Gujarati: "gu",
  English: "en",
};

function normalizeTelemedicinePayload(input = {}) {
  const body = input.body ?? input.json?.body ?? {};
  const language = body.language ?? "English";

  return {
    name: body.name ?? "",
    email: body.email ?? "",
    language,
    lang_code: languageMap[language] || "en",
    symptoms: body.symptoms ?? "",
  };
}

module.exports = {
  languageMap,
  normalizeTelemedicinePayload,
};