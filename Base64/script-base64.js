document.getElementById("en-btn").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const outputField = document.getElementById("outputText");
    
    if (inputText.trim() === "") {
        alert("Teks tidak boleh kosong!");
        outputField.value = "";
        return;
    }
    
    try {
        const encodedText = btoa(inputText);
        outputField.value = encodedText;
    } catch (error) {
        alert("Terjadi kesalahan saat enkripsi!");
        outputField.value = "";
    }
});

document.getElementById("den-btn").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const outputField = document.getElementById("outputText");
    
    if (inputText.trim() === "") {
        alert("Teks tidak boleh kosong!");
        outputField.value = "";
        return;
    }
    
    try {
        const decodedText = atob(inputText);
        outputField.value = decodedText;
    } catch (e) {
        alert("Teks tidak valid untuk dekripsi!");
        outputField.value = "";
    }
});

// Tambahkan ini di bagian akhir script.js
document.getElementById("exit-btn").addEventListener("click", function() {
    // Ganti dengan salah satu opsi di bawah
    window.location.href = "/"; // Opsi 1: Ke root website
    // window.location.href = "../index.html"; // Opsi 2: Jika ada subfolder
    // window.history.back(); // Opsi 3: Kembali ke halaman sebelumnya
});