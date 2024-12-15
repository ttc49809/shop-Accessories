let cart = [];
let cartCount = 0; // ตัวแปรสำหรับเก็บจำนวนสินค้าในรถเข็น

// ฟังก์ชันสำหรับเปิด/ปิดกล่องรถเข็น
function toggleCart() {
  const cartItems = document.getElementById("cart-items"); // เลือกปุ่ม Add to Cart ทั้งหมด
  cartItems.classList.toggle("hidden");
}

// ฟังก์ชันเพิ่มสินค้าลงรถเข็น
function addToCart(name, price, image) {
  // ตรวจสอบว่าสินค้าอยู่ในรถเข็นหรือยัง
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1; // เพิ่มจำนวนถ้ามีอยู่แล้ว
  } else {
    cart.push({ name, price, image, quantity: 1 }); // เพิ่มสินค้าใหม่พร้อมรูปภาพ
  }

  // อัปเดตจำนวนรถเข็น
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;

  // อัปเดตรายการในรถเข็น
  updateCartDisplay();
}

// ฟังก์ชันแสดงรายการรถเข็น
function updateCartDisplay() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = ""; // ล้างรายการเดิม
  let total = 0;

  //   cart.forEach(item => {
  //     total += item.price * item.quantity; // คำนวณราคารวม
  //     const listItem = document.createElement('li');
  //     listItem.textContent = `${item.name} x ${item.quantity} - £${(item.price * item.quantity).toFixed(2)}`;
  //     cartList.appendChild(listItem);
  //   });

  //   cartTotal.textContent = `Total: £${total.toFixed(2)}`;
  cart.forEach((item) => {
    total += item.price * item.quantity; // คำนวณราคารวม

    // สร้างรายการสินค้าในรถเข็น
    const listItem = document.createElement("li");

    // เพิ่มรูปภาพ
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;

    // เพิ่มข้อความสินค้า
    const text = document.createElement("span");
    text.textContent = `${item.name} x ${item.quantity} - ฿${(
      item.price * item.quantity
    ).toFixed(2)}`;

    // เพิ่มรูปและข้อความเข้ารายการสินค้า
    listItem.appendChild(image);
    listItem.appendChild(text);
    cartList.appendChild(listItem);
  });

  cartTotal.textContent = `Total: ฿${total.toFixed(2)}`;
}

// เพิ่ม Event Listener ให้ปุ่ม Add to Cart
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    const image = button.getAttribute('data-image');
    addToCart(name, price, image);
  });
});
