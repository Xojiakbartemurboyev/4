let qr;

function generateQRCode() {
  const qrText = document.getElementById('qrText').value;
  const qrColor = document.getElementById('qrColor').value;
  const bgColor = document.getElementById('bgColor').value;

  if (!qrText.trim()) {
    alert("Iltimos, matn yoki URL kiriting.");
    return;
  }

  // Eski QR kodni o'chirish
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = "";

  // Yangi QR kod yaratish
  qr = new QRCode(qrContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: qrColor,
    colorLight: bgColor,
    correctLevel: QRCode.CorrectLevel.H
  });
}
