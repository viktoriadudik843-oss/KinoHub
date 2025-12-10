// Код для тестування
function addMovieToLater(title, laterList) {
  const li = { textContent: title };
  laterList.push(li);
}

function addMovieToWatched(title, watchedList) {
  const li = { textContent: title };
  watchedList.push(li);
}

// Тести
function runTests() {
  console.log("Запуск тестів...");

  let laterList = [];
  let watchedList = [];

  addMovieToLater("Matrix", laterList);
  console.assert(laterList.length === 1, "❌ later-list має містити 1 елемент");
  console.assert(laterList[0].textContent === "Matrix", "❌ текст має бути 'Matrix'");

  addMovieToWatched("Inception", watchedList);
  console.assert(watchedList.length === 1, "❌ watched-list має містити 1 елемент");
  console.assert(watchedList[0].textContent === "Inception", "❌ текст має бути 'Inception'");

  addMovieToLater("Avatar", laterList);
  console.assert(laterList.length === 2, "❌ later-list має містити 2 елементи");

  console.log("✅ Усі тести пройдено!");
}

runTests();




// Код для тестування
function addMovieToLater(title, laterList) {
  const li = { textContent: title };
  laterList.push(li);
}

function addMovieToWatched(title, watchedList) {
  const li = { textContent: title };
  watchedList.push(li);
}

// Тести
function runTests() {
  console.log("Запуск тестів...");

  let laterList = [];
  let watchedList = [];

  addMovieToLater("Matrix", laterList);
  console.assert(laterList.length === 1, "❌ later-list має містити 1 елемент");
  console.assert(laterList[0].textContent === "Matrix", "❌ текст має бути 'Matrix'");

  addMovieToWatched("Inception", watchedList);
  console.assert(watchedList.length === 1, "❌ watched-list має містити 1 елемент");
  console.assert(watchedList[0].textContent === "Inception", "❌ текст має бути 'Inception'");

  addMovieToLater("Avatar", laterList);
  console.assert(laterList.length === 2, "❌ later-list має містити 2 елементи");

  // Новий тест: дублікати
  addMovieToLater("Matrix", laterList);
  const matrixCount = laterList.filter(m => m.textContent === "Matrix").length;
  console.assert(matrixCount === 2, "❌ має бути 2 записи 'Matrix' (перевірка дубліката)");

  console.log("✅ Усі тести пройдено!");
}

runTests();
