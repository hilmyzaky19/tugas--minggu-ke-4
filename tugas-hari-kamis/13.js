// Soal 13 — Memuat Data Bertahap

// Buat urutan proses berikut:

// 1. Login
// 2. Ambil data profil
// 3. Ambil daftar kursus
// 4. Ambil nilai

// Setiap langkah membutuhkan waktu berbeda.

// Program harus menghentikan proses jika salah satu langkah gagal.

// Gunakan:

// async
// await
// try...catch

// ---

// Fungsi Login
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const berhasil = true;

      if (berhasil) {
        resolve(" Login berhasil");
      } else {
        reject(" Login gagal");
      }
    }, 1000);
  });
}

// Fungsi Ambil Profil
function ambilProfil() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const berhasil = true;

      if (berhasil) {
        resolve(" Data profil berhasil diambil");
      } else {
        reject(" Gagal mengambil profil");
      }
    }, 1500);
  });
}

// Fungsi Ambil Kursus
function ambilKursus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const berhasil = true;

      if (berhasil) {
        resolve(" Daftar kursus berhasil diambil");
      } else {
        reject(" Gagal mengambil daftar kursus");
      }
    }, 2000);
  });
}

// Fungsi Ambil Nilai
function ambilNilai() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const berhasil = true;

      if (berhasil) {
        resolve(" Nilai berhasil diambil");
      } else {
        reject(" Gagal mengambil nilai");
      }
    }, 1000);
  });
}

// Proses utama
async function prosesData() {
  try {
    const loginResult = await login();
    console.log(loginResult);

    const profilResult = await ambilProfil();
    console.log(profilResult);

    const kursusResult = await ambilKursus();
    console.log(kursusResult);

    const nilaiResult = await ambilNilai();
    console.log(nilaiResult);

    console.log(" Semua proses selesai!");
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

prosesData(); 