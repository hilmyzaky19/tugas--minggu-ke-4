const siswa = [
    {
        id: 1,
        nama: "Ari",
        umur: 17,
        nilai: 85
    },
    {
        id: 2,
        nama: "Bima",
        umur: 18,
        nilai: 72
    },
    {
        id: 3,
        nama: "Citra",
        umur: 17,
        nilai: 95
    },
    {
        id: 4,
        nama: "Dewi",
        umur: 16,
        nilai: 68
    }
];

let nilaiTertinggi = siswa[0];
let nilaiTerendah = siswa[0];
let totalNilai = 0;

for (const data of siswa) {
    if (data.nilai > nilaiTertinggi.nilai) {
        nilaiTertinggi = data;
    }

    if (data.nilai < nilaiTerendah.nilai) {
        nilaiTerendah = data;
    }

    totalNilai += data.nilai;
}

const rataRata = totalNilai / siswa.length;

console.log("Siswa dengan nilai tertinggi:");
console.log(nilaiTertinggi.nama, "-", nilaiTertinggi.nilai);

console.log("\nSiswa dengan nilai terendah:");
console.log(nilaiTerendah.nama, "-", nilaiTerendah.nilai);

console.log("\nRata-rata nilai seluruh siswa:");
console.log(rataRata);