// Enkripsi
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

// Dekripsi
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

// Back button
document.getElementById("exit-btn").addEventListener("click", function() {
    window.location.href = "/webzioles.github.io";
});

// Copy hasil
document.getElementById("copy-btn").addEventListener("click", function() {
    const outputText = document.getElementById("outputText");
    if (outputText.value.trim() === "") {
        alert("Tidak ada hasil untuk disalin!");
        return;
    }
    
    navigator.clipboard.writeText(outputText.value)
        .then(() => alert("Teks berhasil disalin!"))
        .catch(err => alert("Gagal menyalin teks!"));
});

// Paste dari clipboard
document.getElementById("paste-btn").addEventListener("click", function() {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById("inputText").value = text;
        })
        .catch(err => alert("Gagal membaca teks dari clipboard!"));
});