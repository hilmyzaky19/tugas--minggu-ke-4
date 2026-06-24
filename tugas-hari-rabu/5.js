const siswa = [
    { id: 1, nama: "Ari", umur: 17, nilai: 85 },
    { id: 2, nama: "Bima", umur: 18, nilai: 72 },
    { id: 3, nama: "Citra", umur: 17, nilai: 95 },
    { id: 4, nama: "Dewi", umur: 16, nilai: 68 },
    { id: 5, nama: "Eko", umur: 18, nilai: 90 }
];

// Mengurutkan berdasarkan nilai tertinggi ke terendah
const ranking = [...siswa].sort((a, b) => b.nilai - a.nilai);

console.log("=== Ranking Siswa ===");

for (let i = 0; i < ranking.length; i++) {
    console.log(
        `Peringkat ${i + 1} : ${ranking[i].nama} (${ranking[i].nilai})`
    );
}