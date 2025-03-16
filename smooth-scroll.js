document.addEventListener("DOMContentLoaded", function () {
    var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        luxy.init({
            wrapper: '#luxy',
            wrapperSpeed: 0.065,
        });
    }
});
