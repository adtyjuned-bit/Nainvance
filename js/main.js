document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Logika Loading Screen
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

      setTimeout(() => {
        if (loadingContent) loadingContent.classList.add('opacity-0', 'scale-95');
        if (gateTop) gateTop.classList.add('-translate-y-full');
        if (gateBottom) gateBottom.classList.add('translate-y-full');

        setTimeout(() => {
          if (loadingScreen) loadingScreen.classList.add('opacity-0', 'pointer-events-none');
          
          setTimeout(() => {
            if (loadingScreen) loadingScreen.style.display = 'none';
            initScrollAnimation();
          }, 700);
        }, 500);
      }, 300);
    }
  }, 20);

  // 2. Logika Animasi Scroll Manual
  function initScrollAnimation() {
    const elements = document.querySelectorAll('.fade-up-element');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
  }
});

/* =====================================
   ACCOUNT SERVICE PROMO
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const promoCard = document.querySelector(".service-promo-card");

    const orderButton = document.getElementById("serviceOrderBtn");

    const modal = document.getElementById("serviceModal");

    const closeButton = document.getElementById("serviceModalClose");


    /* =========================
       SCROLL ANIMATION
    ========================= */

    if (promoCard) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        promoCard.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        observer.observe(promoCard);
    }


    /* =========================
       OPEN MODAL
    ========================= */

    if (orderButton && modal) {

        orderButton.addEventListener("click", () => {

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }


    /* =========================
       CLOSE MODAL
    ========================= */

    function closeServiceModal() {

        if (!modal) return;

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeServiceModal
        );

    }


    /* =========================
       CLICK OUTSIDE MODAL
    ========================= */

    if (modal) {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {

                closeServiceModal();

            }

        });

    }


    /* =========================
       ESC KEY
    ========================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeServiceModal();

        }

    });

});
