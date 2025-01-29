// script.js
document.getElementById("encryptButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        alert("Teks tidak boleh kosong!");
        return;
    }
    const encodedText = btoa(inputText); // Enkripsi Base64
    document.getElementById("outputText").value = encodedText;
});

document.getElementById("decryptButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        alert("Teks tidak boleh kosong!");
        return;
    }
    try {
        const decodedText = atob(inputText); // Dekripsi Base64
        document.getElementById("outputText").value = decodedText;
    } catch (e) {
        alert("Teks tidak valid untuk dekripsi!");
    }
});
