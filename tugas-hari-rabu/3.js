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

// Menambahkan data baru
siswa.push({
    id: 5,
    nama: "Eko",
    umur: 18,
    nilai: 90
});


function cariSiswa(nama) {
    for (let data of siswa) {
        if (data.nama === nama) {
            console.log("Data ditemukan:");
            console.log(data);
            return;
        }
    }

    console.log("Siswa tidak ditemukan");
}

// Contoh penggunaan
cariSiswa("Eko");