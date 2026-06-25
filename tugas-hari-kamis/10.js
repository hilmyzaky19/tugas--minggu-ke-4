// Soal 10 — Dashboard Siswa

// Buat program yang menampilkan:

// - data pengguna
// - daftar kursus
// - nilai siswa

// Seluruh data harus dimuat dari Promise.

// Gunakan:

// Promise.all()

// Tampilkan hasil dalam format yang rapi.

// ---

// Tantangan Logika

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

function ambilNilaiSiswa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nilai: 90
            });
        }, 1500);
    });
}

async function tampilkanDashboard() {
    try {
        const [pengguna, kursus, nilai] = await Promise.all([
            ambilPengguna(),
            ambilKursus(),
            ambilNilaiSiswa()
        ]);

        console.log(" DASHBOARD SISWA ");

        console.log("\nData Pengguna");
        console.log(`ID      : ${pengguna.id}`);
        console.log(`Nama    : ${pengguna.nama}`);
        console.log(`Premium : ${pengguna.premium}`);

        console.log("\nDaftar Kursus");
        kursus.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });

        console.log("\nNilai Siswa");
        console.log(`Nilai   : ${nilai.nilai}`);
        console.log(
            `Status  : ${nilai.nilai >= 75 ? "Lulus" : "Tidak Lulus"}`
        );

        console.log("\n-------------------------");
    } catch (error) {
        console.log("Error:", error);
    }
}

tampilkanDashboard();