// ดึงปุ่มและ Modal มาใช้งาน
const buyNowBtn = document.getElementById("buyNowBtn");
const formModal = document.getElementById("formModal");
const closeBtn = document.getElementById("closeBtn");

// แสดงฟอร์มเมื่อกดปุ่ม BUY NOW
buyNowBtn.addEventListener("click", () => {
    formModal.style.display = "flex";
});

// ซ่อนฟอร์มเมื่อกดปุ่มปิด
closeBtn.addEventListener("click", () => {
    formModal.style.display = "none";
});

// ซ่อนฟอร์มเมื่อคลิกนอก Modal
window.addEventListener("click", (event) => {
    if (event.target === formModal) {
        formModal.style.display = "none";
    }
});

const checkoutBtn = document.getElementById("checkoutBtn");
checkoutBtn.addEventListener("click", () => {
    alert("Payment Successful!"); 
    window.open("bill.html", "_blank");
});