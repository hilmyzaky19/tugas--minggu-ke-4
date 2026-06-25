// Soal 4 — Data Pengguna

// Buat function:

// ambilPengguna(id)

// Database simulasi:

// [
//   { id: 1, nama: "Budi", premium: true },
//   { id: 2, nama: "Ani", premium: false },
//   { id: 3, nama: "Dodi", premium: true }
// ]

// Aturan:

// - proses memerlukan waktu 2 detik
// - jika id ditemukan → resolve data pengguna
// - jika tidak ditemukan → reject

// Tampilkan data pengguna menggunakan ".then()".

// ---

function ambilPengguna(id) {
    return new Promise((resolve, reject) => {
        const pengguna = [
            { id: 1, nama: "Budi", premium: true },
            { id: 2, nama: "Ani", premium: false },
            { id: 3, nama: "Dodi", premium: true }
        ];

        setTimeout(() => {
            const hasil = pengguna.find(user => user.id === id);

            if (hasil) {
                resolve(hasil);
            } else {
                reject("Pengguna tidak ditemukan");
            }
        }, 2000);
    });
}

// Menampilkan data pengguna dengan .then()
ambilPengguna(1)
    .then((user) => {
        console.log("Data Pengguna:");
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });