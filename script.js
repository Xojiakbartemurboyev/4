document.getElementById('translateBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const fromLang = document.getElementById('fromLang').value;
  const toLang = document.getElementById('toLang').value;

  if (!inputText.trim()) {
    alert("Iltimos, tarjima qilinadigan matn kiriting.");
    return;
  }

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${fromLang}|${toLang}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const translated = data.responseData.translatedText;
      document.getElementById('outputText').value = translated;
    })
    .catch(error => {
      console.error("Xatolik:", error);
      alert("Tarjima qilishda xatolik yuz berdi.");
    });
});
