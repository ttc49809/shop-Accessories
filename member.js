document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.content-left2 .slide');
        
        // ซ่อนรูปภาพทั้งหมด
        slides.forEach(slide => slide.classList.remove('active'));
        
        // เพิ่มคลาส active ให้กับรูปปัจจุบัน
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].classList.add('active');
        
        // เปลี่ยนรูปทุกๆ 3 วินาที
        setTimeout(showSlides, 3000);
    }
});