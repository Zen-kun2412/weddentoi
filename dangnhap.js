const btn = document.getElementById("btn-send")
btn.addEventListener("click", getValue)

function getValue(event) {
    event.preventDefault();
var valueten = document.getElementById("ten").value
console.log("🚀 ~ file: index.js:7 ~ getValue ~ valueten:", valueten)

var valuemail = document.getElementById("mail").value
console.log("🚀 ~ file: index.js:9 ~ getValue ~ valuemail:", valuemail)

var valuepass = document.getElementById("pass").value
console.log("🚀 ~ file: index.js:11 ~ getValue ~ valuepass:", valuepass)

var valuepass1 = document.getElementById("pass1").value
console.log("🚀 ~ file: index.js:13 ~ getValue ~ valuepass1:", valuepass1)

if (valuepass === valuepass1) {
    alert("Đăng ký thành công")
}
else {
    alert("Mật khẩu không đúng")
}

}