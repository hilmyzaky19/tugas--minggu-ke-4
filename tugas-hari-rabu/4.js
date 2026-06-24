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

// Mengubah Object JavaScript menjadi JSON String
const jsonString = JSON.stringify(siswa);

console.log("JSON String:");
console.log(jsonString);

// Mengubah JSON String menjadi Object JavaScript
const objectJavaScript = JSON.parse(jsonString);

console.log("\nObject JavaScript:");
console.log(objectJavaScript);