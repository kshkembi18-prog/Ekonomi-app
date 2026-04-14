const lessons = [
  "Ekonomia është shkenca që studion si njerëzit përdorin burimet e kufizuara.",
  "Oferta dhe kërkesa përcaktojnë çmimet në treg.",
  "Paga bruto është paga para taksave, ndërsa neto është ajo që merr në dorë."
];

function showLesson(index) {
  document.getElementById('lessonText').innerText = lessons[index];
}
