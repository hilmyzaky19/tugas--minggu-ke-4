// Soal 3 — Menggunakan .then() dan .catch()

// Gunakan function dari Soal 2.

// Tampilkan:

// - hasil jika berhasil
// - pesan error jika gagal
// - pesan "Proses selesai" pada kondisi apa pun

// ---
function ambilMateri() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sukses = Math.random() >= 0.5;
            if (sukses) {
                resolve("Materi berhasil dimuat");
            } else {
                reject("Gagal mengambil materi");
            }
        }, 2000);
    });
}

ambilMateri()
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((eror) => {
        console.log(eror);
    })
    .finally(() => {
        console.log("proses selesai");
    });