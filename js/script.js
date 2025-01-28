document.addEventListener("DOMContentLoaded", () => {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");
  const closeButton = document.getElementById("close-button");

  if(closeButton) {
  closeButton.addEventListener("click", () => {
    // go to index.html
    window.location.href = "./index.html";
  });
  }

  // handle click
  if(card1) {
    card1.addEventListener("click", () => {
      window.location.href = "./article1.html";
    });
  }
  if(card2) {
    card2.addEventListener("click", () => {
      window.location.href = "./article2.html";
    });
  }
  if(card3) {
    card3.addEventListener("click", () => {
      window.location.href = "./article3.html";
    });
  }

  function handleHover(card, transform1, transform2, transform3) {
    card.addEventListener("mouseover", () => {
      card1.style.transform = transform1;
      card2.style.transform = transform2;
      card3.style.transform = transform3;
    });

    card.addEventListener("mouseout", () => {
      card1.style.transform = "translateY(0)";
      card2.style.transform = "translateY(0)";
      card3.style.transform = "translateY(0)";
    });
  }

  function applyHoverEffects() {
    if(card1 || card2 || card3) {
      if (window.innerWidth <= 768) {
        handleHover(card1, "translateX(20px)", "translateX(-20px)", "translateX(-20px)");
        handleHover(card2, "translateX(-20px)", "translateX(20px)", "translateX(-20px)");
        handleHover(card3, "translateX(-20px)", "translateX(-20px)", "translateX(20px)");
      } else {
        handleHover(card1, "translateY(-40px)", "translateX(20px)", "translateX(20px)");
        handleHover(card2, "translateX(-20px)", "translateY(-40px)", "translateX(20px)");
        handleHover(card3, "translateX(-20px)", "translateX(-20px)", "translateY(-40px)");
      }
    }
  }

  if(card1 || card2 || card3) { applyHoverEffects(); }
  window.addEventListener("resize", applyHoverEffects);
  const imgScroll = document.getElementById("img-scroll");
  const scrollToTopButton = document.getElementById("scroll-to-top");
  if(imgScroll) {
    imgScroll.addEventListener("scroll", () => {
      if (imgScroll.scrollTop + imgScroll.clientHeight+100 >= imgScroll.scrollHeight) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  }
  if(scrollToTopButton) {
    scrollToTopButton.addEventListener("click", () => {
      imgScroll.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});