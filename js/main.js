/* =========================================================================
   NOTE JS: LOGIKA LOADING SCREEN, TRANSISI PINTU & REFRESH AOS
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi AOS saat pertama kali dibuka
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800, // Durasi animasi slide up (ms)
      once: false,   // Animasi terulang tiap kali di-scroll
      offset: 50     // Jarak pemicu animasi
    });
  }

  // 2. Variable & Elemen Loading Screen
  let progress = 0;
  const progressBar = document.getElementById('progress-bar');
  const percentageText = document.getElementById('percentage-text');
  const loadingContent = document.getElementById('loading-content');
  const loadingScreen = document.getElementById('loading-screen');
  const gateTop = document.querySelector('.gate-top');
  const gateBottom = document.querySelector('.gate-bottom');

  // 3. Timer Progress Loading (0% ke 100%)
  const interval = setInterval(() => {
    progress += 2;

    if (progressBar) progressBar.style.width = `${progress}%`;
    if (percentageText) percentageText.innerText = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);

      // Transisi Pembukaan Pintu & Fadeout Loading
      setTimeout(() => {
        if (loadingContent) loadingContent.classList.add('opacity-0', 'scale-95');
        if (gateTop) gateTop.classList.add('-translate-y-full');
        if (gateBottom) gateBottom.classList.add('translate-y-full');

        setTimeout(() => {
          if (loadingScreen) loadingScreen.classList.add('opacity-0', 'pointer-events-none');
          
          setTimeout(() => {
            if (loadingScreen) loadingScreen.style.display = 'none';

            // Refresh AOS setelah pintu terbuka agar elemen slide-up aktif
            if (typeof AOS !== 'undefined') {
              AOS.refresh();
            }
          }, 700);
        }, 500);
      }, 300);
    }
  }, 25);
});
