// Menyapa user di Home
let userName = prompt("Masukkan nama Anda:");
document.getElementById("welcome").innerText = "Hi " + userName + ", Welcome To Website";

// Ambil form
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let birthdate = document.getElementById("birthdate").value;
  let gender = document.querySelector("input[name='gender']:checked").value;
  let message = document.getElementById("message").value;

  // Validasi sederhana
  if (!name || !birthdate || !gender || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Tampilkan hasil
  let resultBox = document.getElementById("result");
  let currentTime = new Date().toString();

  resultBox.innerHTML = `
    <p><strong>Current Time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  

});
