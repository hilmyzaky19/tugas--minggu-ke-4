// Soal 2 — Promise Pertama

/**
 * Fungsi untuk mengambil materi secara asinkron menggunakan Promise.
 * Membutuhkan waktu 2 detik untuk mensimulasikan pengambilan data.
 * Memiliki probabilitas sukses atau gagal (50/50).
 * 
 * @returns {Promise<string>}
 */
function ambilMateri() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Menentukan keberhasilan secara acak (50% peluang berhasil)
      const sukses = Math.random() >= 0.5;

      if (sukses) {
        resolve("Materi berhasil dimuat");
      } else {
        reject("Gagal mengambil materi");
      }
    }, 2000);
  });
}

// Contoh Penggunaan (Pemanggilan Fungsi):
console.log("Mengambil materi... Silakan tunggu 2 detik.");
ambilMateri()
  .then((pesan) => {
    console.log("Hasil:", pesan);
  })
  .catch((error) => {
    console.log("Hasil:", error);
  });
