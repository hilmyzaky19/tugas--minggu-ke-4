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

for (const data of siswa) {
    console.log("Nama  :", data.nama);
    console.log("Umur  :", data.umur);
    console.log("Nilai :", data.nilai);
    console.log("--------------------");
}