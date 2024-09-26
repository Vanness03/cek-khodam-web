function cekKhodam() {
    const name = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');

    if (name.trim() === "") {
        resultDiv.innerHTML = "<p>Silakan masukkan nama Anda.</p>";
        return;
    }

    // Array nama khodam yang unik
    const khodamNames = [
        "Khodam Mio karbu",
        "Khodam Kuda ompong",
        "Khodam Batok supra geter",
        "Khodam Sempak fir'aun",
        "Khodam Tali sepatu",
        "Khodam King sarip",
        "Khodam Garpu somay",
        "Khodam Sumpit mie ayam",
        "Khodam Piring warteg",
        "Khodam Badut mixue"
    ];

    // Pilih khodam secara acak dari array
    const randomIndex = Math.floor(Math.random() * khodamNames.length);
    const khodam = khodamNames[randomIndex];

    // Pesan hasil
    const messages = [
        `Anda memiliki khodam yang kuat bernama ${khodam}.`,
        `Khodam Anda bernama ${khodam}, dia selalu menjaga Anda.`,
        `Nama khodam Anda adalah ${khodam}, dia melindungi Anda dari bahaya.`,
        `${khodam} adalah khodam Anda, dia memberi Anda kekuatan.`,
        `Anda didampingi oleh khodam yang hebat bernama ${khodam}.`
    ];

    // Pilih pesan secara acak dari array
    const randomMessageIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomMessageIndex];

    resultDiv.innerHTML = `<p>${name}, ${message}</p>`;
}
