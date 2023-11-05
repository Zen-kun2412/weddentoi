document.getElementById("btn-submit").addEventListener("click", function () {
    const email = "wunood@gmail.com";
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:${email}?subject=${message}&body= ${message}`;
    window.location.href = mailtoLink;
    console.log("🚀 ~ file: index.js:6 ~ mailtoLink:", mailtoLink)
});