document.addEventListener("DOMContentLoaded", () => {
  // 1. Jalankan Inisialisasi AOS saat awal muat
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800, // Durasi animasi meluncur (ms)
      once: false,   // Bikin animasi bisa terulang saat scroll naik/turun
      offset: 50     // Jarak pemicu animasi
    });
  }

  // 2. Logika Loading Screen & Progress Bar
  let progress = 0;
  const progressBar = document.getElementById('progress-bar');
  const percentageText = document.getElementById('percentage-text');
  const loadingContent = document.getElementById('loading-content');
  const loadingScreen = document.getElementById('loading-screen');
  const gateTop = document.querySelector('.gate-top');
  const gateBottom = document.querySelector('.gate-bottom');

  const interval = setInterval(() => {
    progress += 2;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (percentageText) percentageText.innerText = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);

      // Transisi Pembukaan Pintu Loading Screen
      setTimeout(() => {
        if (loadingContent) loadingContent.classList.add('opacity-0', 'scale-95');
        if (gateTop) gateTop.classList.add('-translate-y-full');
        if (gateBottom) gateBottom.classList.add('translate-y-full');

        setTimeout(() => {
          if (loadingScreen) loadingScreen.classList.add('opacity-0', 'pointer-events-none');
          
          setTimeout(() => {
            if (loadingScreen) loadingScreen.style.display = 'none';

            // PENTING: Refresh & hitung ulang AOS tepat saat pintu loading benar-benar hilang
            if (typeof AOS !== 'undefined') {
              AOS.refresh();
            }
          }, 700);
        }, 500);
      }, 300);
    }
  }, 25);
});
