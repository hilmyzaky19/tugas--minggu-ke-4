// Soal 6 — Error Handling

// Buat function:

// tampilkanProfil(id)

// Gunakan:

// try
// catch
// finally

// Aturan:

// - tampilkan profil jika ditemukan
// - tampilkan pesan error jika tidak ditemukan
// - tampilkan pesan bahwa proses telah selesai pada kondisi apa pun

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
                reject("Profil tidak ditemukan");
            }
        }, 2000);
    });
}

async function tampilkanProfil(id) {
    try {
        const profil = await ambilPengguna(id);
        console.log("Profil Pengguna:");
        console.log(profil);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Proses telah selesai");
    }
}

tampilkanProfil(1); 