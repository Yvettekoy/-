/* ========= 漢堡選單 ========= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* ========= 輪播圖片 ========= */
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

// 左右箭頭
next.addEventListener('click', () => { slideIndex++; showSlides(slideIndex); });
prev.addEventListener('click', () => { slideIndex--; showSlides(slideIndex); });

// 點點控制
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { slideIndex = i; showSlides(slideIndex); });
});

// 自動輪播
function autoSlides() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlides, 4000);
}

// 初始化
showSlides(slideIndex);
autoSlides();



/* ========= 滾動進場動畫 ========= */
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

hiddenElements.forEach(el => observer.observe(el));

/* ========= 服務卡片 Modal ========= */
const modals = document.querySelectorAll(".modal");
const cards = document.querySelectorAll(".card");
const closes = document.querySelectorAll(".close");

// 點擊卡片開啟對應 Modal
cards.forEach(card => {
    card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "block";
    });
});

// 點擊 × 關閉 Modal
closes.forEach(close => {
    close.addEventListener("click", () => {
        close.parentElement.parentElement.style.display = "none";
    });
});

// 點擊背景也可關閉 Modal
window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if(e.target === modal) modal.style.display = "none";
    });
});


/* ========= 回到最上方按鈕 ========= */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});
