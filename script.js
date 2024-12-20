document.querySelector(".button").addEventListener("click", () => {
    const data = document.querySelector(".text").value;

    if (!data.trim()) {
        alert("Enter any data or URL");
        return;
    }

    const qrcode = document.querySelector("img");
    qrcode.src = `https://quickchart.io/qr?text=${encodeURIComponent(data)}&size=200`;
});