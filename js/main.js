/* =========================================================================
   NOTE JS: LOGIKA LOADING SCREEN & TRANSISI PINTU
   Fungsi: Mengontrol jalannya angka persen, progress bar, serta efek pintu geser
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Variable Nilai Progress Awal
  let progress = 0;

  // Mengambil Elemen HTML Berdasarkan ID / Class
  const progressBar = document.getElementById('progress-bar');
  const percentageText = document.getElementById('percentage-text');
  const loadingContent = document.getElementById('loading-content');
  const loadingScreen = document.getElementById('loading-screen');
  const gateTop = document.querySelector('.gate-top');
  const gateBottom = document.querySelector('.gate-bottom');

  // Interval untuk menjalankan progress dari 0% ke 100%
  const interval = setInterval(() => {
    progress += 2; // Kecepatan Tambah Nilai

    // Update lebar progress bar dan angka persen di UI
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (percentageText) percentageText.innerText = `${progress}%`;

    // Ketika Loading Mencapai 100%
    if (progress >= 100) {
      clearInterval(interval); // Hentikan Timernya

      // STRUKTUR ANIMASI TRANSISI SAAT SELESAI LOADING:
      setTimeout(() => {
        // Step 1: Hilangkan teks & avatar tengah
        if (loadingContent) loadingContent.classList.add('opacity-0', 'scale-95');
        
        // Step 2: Buka pintu atas ke atas, dan pintu bawah ke bawah
        if (gateTop) gateTop.classList.add('-translate-y-full');
        if (gateBottom) gateBottom.classList.add('translate-y-full');

        // Step 3: Fadeout seluruh layar loading
        setTimeout(() => {
          if (loadingScreen) loadingScreen.classList.add('opacity-0', 'pointer-events-none');
          
          // Step 4: Sembunyikan total elemen dari halaman agar tidak membebankan memori
          setTimeout(() => {
            if (loadingScreen) loadingScreen.style.display = 'none';
          }, 700);
        }, 500);
      }, 300);
    }
  }, 150); // Kecepatan Refresh (ms)
});
            
