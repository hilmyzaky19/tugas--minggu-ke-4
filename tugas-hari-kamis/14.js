// Soal 14 — Analisis Performa

// Buat dua versi program:

// Versi A

// Mengambil:

// - profil
// - kursus
// - nilai

// secara berurutan.

// Versi B

// Mengambil:

// - profil
// - kursus
// - nilai

// secara paralel menggunakan:

// Promise.all()

// Bandingkan:

// - waktu eksekusi
// - jumlah baris kode
// - kemudahan dibaca

// Jelaskan kesimpulanmu.

// ---

function ambilProfil() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(" Profil berhasil diambil"), 2000);
  });
}

function ambilKursus() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(" Kursus berhasil diambil"), 3000);
  });
}

function ambilNilai() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(" Nilai berhasil diambil"), 1000);
  });
}

async function versiA() {
  console.time("Versi A");

  const profil = await ambilProfil();
  console.log(profil);

  const kursus = await ambilKursus();
  console.log(kursus);

  const nilai = await ambilNilai();
  console.log(nilai);

  console.timeEnd("Versi A");
}

versiA();


function ambilProfil() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(" Profil berhasil diambil"), 2000);
  });
}

function ambilKursus() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(" Kursus berhasil diambil"), 3000);
  });
}

function ambilNilai() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(" Nilai berhasil diambil"), 1000);
  });
}

async function versiB() {
  console.time("Versi B");

  const [profil, kursus, nilai] = await Promise.all([
    ambilProfil(),
    ambilKursus(),
    ambilNilai()
  ]);

  console.log(profil);
  console.log(kursus);
  console.log(nilai);

  console.timeEnd("Versi B");
}

versiB();

// Versi A cocok jika setiap proses harus menunggu hasil proses sebelumnya. Contohnya: login → ambil token → ambil data pengguna.
// Versi B lebih cepat karena semua proses dijalankan secara bersamaan (paralel). Cocok jika setiap proses tidak saling bergantung, misalnya mengambil profil, kursus, dan nilai secara bersamaan.