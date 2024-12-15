function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;



    if (username === null || username === "") {
        alert("กรุณากรอก 'ชื่อผู้ใช้' ")
        return false;
    }

    if (username !== "admin" || password !== "123456") {
        
        alert("กรุณากรอก 'รหัสผ่าน' ")
        return false;
    }

    
    alert("Login successful!");
    return true;
}