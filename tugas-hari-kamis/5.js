// Soal 5 — Async/Await

// Ubah Soal 4 menggunakan:

// async
// await

// Tanpa menggunakan ".then()".

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

async function tampilkanPengguna() {
    try {
        const user = await ambilPengguna(1);
        console.log("Data Pengguna:");
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

tampilkanPengguna();