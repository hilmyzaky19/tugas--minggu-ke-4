// Soal 8 — Menggabungkan Dua Promise

// Tersedia dua function:

// ambilPengguna()
// ambilKursus()

// Tampilkan data pengguna dan kursus menggunakan:

// Promise.all()

// Catat total waktu yang dibutuhkan.

// ---
function ambilPengguna() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nama: "Budi",
                premium: true
            });
        }, 2000);
    });
}

function ambilKursus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "JavaScript Dasar",
                "React",
                "Node.js"
            ]);
        }, 3000);
    });
}

console.time("Total Waktu");

Promise.all([ambilPengguna(), ambilKursus()])
    .then(([pengguna, kursus]) => {
        console.log("Data Pengguna:");
        console.log(pengguna);

        console.log("\nDaftar Kursus:");
        console.log(kursus);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.timeEnd("Total Waktu");
    });