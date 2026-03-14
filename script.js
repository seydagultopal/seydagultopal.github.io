// Sayfa kaydırıldığında menüye gölge efekti ekleme (Katman hissi verir)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none'; // Üstteyken gölgeyi kaldır
    }
});

// Menü linklerine tıklandığında yumuşak geçiş (Smooth Scroll - CSS yedeği)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});