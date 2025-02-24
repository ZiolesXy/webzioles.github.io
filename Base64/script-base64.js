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
        const numericStr = convertToNumeric(inputText);
        const encodedText = btoa(numericStr);
        const orien = btoa(inputText);
        outputField.value = orien;
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
        const numericStr = atob(inputText);
        const decodedText = convertNumericToText(numericStr);
        const lsls = convertNumericToText(inputText);
        const oriden = atob(inputText);
        outputField.value = oriden;
    } catch (e) {
        alert("Teks tidak valid untuk dekripsi!");
        outputField.value = "";
    }
});

// Fungsi konversi ke kode angka (mendukung huruf, angka, dan simbol)
function convertToNumeric(text) {
    let numericStr = '';
    for (const char of text) {
        const charCode = char.charCodeAt(0);
        numericStr += charCode.toString().padStart(3, '0'); // Simpan dalam format 3 digit
    }
    return numericStr;
}

// Fungsi konversi dari kode angka ke teks
function convertNumericToText(numericStr) {
    let text = '';
    for (let i = 0; i < numericStr.length; i += 3) {
        const chunk = numericStr.substr(i, 3);
        const charCode = parseInt(chunk, 10);
        if (!isNaN(charCode)) {
            text += String.fromCharCode(charCode);
        }
    }
    return text;
}

// Tombol-tombol lainnya tetap sama
document.getElementById("exit-btn").addEventListener("click", function() {
    window.location.href = "/webzioles.github.io";
});

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

document.getElementById("paste-btn").addEventListener("click", function() {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById("inputText").value = text;
        })
        .catch(err => alert("Gagal membaca teks dari clipboard!"));
});