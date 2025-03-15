// این کد باید در داخل یک فایل JS قرار بگیره یا توی Webflow داخل Custom Code قرار بدی.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
