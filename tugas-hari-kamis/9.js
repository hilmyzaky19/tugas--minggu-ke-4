// Soal 9 — Sistem Nilai Siswa

// Buat function:

// ambilNilaiSiswa(id)

// Database simulasi:

// [
//   { id: 1, nilai: 90 },
//   { id: 2, nilai: 75 },
//   { id: 3, nilai: 60 }
// ]

// Buat function:

// cekKelulusan(id)

// Aturan:

// - nilai ≥ 75 → Lulus
// - nilai < 75 → Tidak Lulus

// Gunakan async/await.

// ---

function ambilNilaiSiswa(id) {
    return new Promise((resolve, reject) => {
        const dataNilai = [
            { id: 1, nilai: 90 },
            { id: 2, nilai: 75 },
            { id: 3, nilai: 60 }
        ];

        setTimeout(() => {
            const siswa = dataNilai.find(item => item.id === id);

            if (siswa) {
                resolve(siswa);
            } else {
                reject("Data siswa tidak ditemukan");
            }
        }, 2000);
    });
}

async function cekKelulusan(id) {
    try {
        const siswa = await ambilNilaiSiswa(id);

        console.log(`ID Siswa: ${siswa.id}`);
        console.log(`Nilai: ${siswa.nilai}`);

        if (siswa.nilai >= 75) {
            console.log("Status: Lulus");
        } else {
            console.log("Status: Tidak Lulus");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

// Contoh penggunaan
cekKelulusan(2);