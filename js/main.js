// =========================================================================
// CONFIG: TEKS STATUS LOADING (Bisa kamu tambah/ganti teksnya di sini)
// =========================================================================
const statusMessages = [
  "INITIALIZING SYSTEM...",
  "CONNECTING TO FANBASE SERVER...",
  "LOADING STORY & EXCLUSIVE MEDIA...",
  "SYNCING LEADERBOARD DATA...",
  "PREPARING DONATION ALERTS...",
  "CALCULATING HYPE LEVEL...",
  "ACCESS GRANTED!"
];

// =========================================================================
// MENGAMBIL ELEMEN DARI HTML (DOM SELECTION)
// =========================================================================
const progressBar = document.getElementById("progress-bar");
const percentageText = document.getElementById("percentage-text");
const statusText = document.getElementById("status-text");
const logo = document.getElementById("logo");
const loadingScreen = document.getElementById("loading-screen");
const loadingContent = document.getElementById("loading-content");
const btnRestart = document.getElementById("btn-restart");

let progress = 0;

// =========================================================================
// FUNGSI UTAMA: JALANKAN PROGRESS LOADING
// =========================================================================
function startLoading() {
  const interval = setInterval(() => {
    // Tambah angka progress secara acak (1-7) agar terlihat natural
    progress += Math.floor(Math.random() * 7) + 1;

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      finishLoading();
    }

    // Update Lebar Bar dan Angka %
    progressBar.style.width = `${progress}%`;
    percentageText.innerText = `${progress}%`;

    // Efek Glitch pada Logo secara acak
    if (Math.random() > 0.7) {
      logo.classList.add("active");
      setTimeout(() => logo.classList.remove("active"), 150);
    }

    // Pergantian Teks Status berdasarkan tingkat progress
    if (progress < 20) statusText.innerText = statusMessages[0];
    else if (progress < 40) statusText.innerText = statusMessages[1];
    else if (progress < 60) statusText.innerText = statusMessages[2];
    else if (progress < 80) statusText.innerText = statusMessages[3];
    else if (progress < 95) statusText.innerText = statusMessages[4];
    else statusText.innerText = statusMessages[6];

  }, 150); // Kecepatan tick interval (ms)
}

// =========================================================================
// FUNGSI TRANSISI SAAT LOADING SELESAI
// =========================================================================
function finishLoading() {
  setTimeout(() => {
    // 1. Pudingkan konten teks & logo di tengah
    loadingContent.style.opacity = "0";

    setTimeout(() => {
      // 2. Buka Pintu Atas & Bawah
      loadingScreen.classList.add("loading-finished");

      // 3. Sembunyikan layer loading screen agar bisa klik halaman utama
      setTimeout(() => {
        loadingScreen.style.display = "none";
        document.body.style.overflow = "auto";
      }, 800);

    }, 300);
  }, 400);
}

// =========================================================================
// EVENT LISTENER
// =========================================================================
// Jalankan loading otomatis saat pertama kali file dimuat
document.addEventListener("DOMContentLoaded", () => {
  startLoading();
});

// Tombol restart untuk uji coba animasi loading
if (btnRestart) {
  btnRestart.addEventListener("click", () => {
    location.reload();
  });
             }

