function showEncryption() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("encryption").style.display = "block";
    document.getElementById("decryption").style.display = "none";
}

function showDecryption() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("encryption").style.display = "none";
    document.getElementById("decryption").style.display = "block";
}

function showMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("encryption").style.display = "none";
    document.getElementById("decryption").style.display = "none";
    document.getElementById("encryptionResult").innerHTML = "";
    document.getElementById("decryptionResult").innerHTML = "";
}

function encrypt() {
    var plaintext = document.getElementById("plaintext").value;
    var key = document.getElementById("encryptionKey").value;
    var ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();
    document.getElementById("encryptionResult").innerHTML = "Ciphertext: " + ciphertext;
}

function decrypt() {
    var ciphertext = document.getElementById("ciphertext").value;
    var key = document.getElementById("decryptionKey").value;
    var bytes = CryptoJS.AES.decrypt(ciphertext, key);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("decryptionResult").innerHTML = "Plaintext: " + plaintext;
}