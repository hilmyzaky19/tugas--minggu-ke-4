const platform = {
  // Login
  login() {
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
  },

  // Ambil Profil
  ambilProfil() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const berhasil = true;

        if (berhasil) {
          resolve({
            nama: "Zaky Hilmy",
            premium: true,
          });
        } else {
          reject(" Gagal mengambil profil");
        }
      }, 1500);
    });
  },

  // Ambil Kursus
  ambilKursus() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const berhasil = true;

        if (berhasil) {
          resolve([
            "JavaScript Dasar",
            "Asynchronous JavaScript",
            "Node.js",
          ]);
        } else {
          reject("❌ Gagal mengambil daftar kursus");
        }
      }, 2000);
    });
  },

  // Ambil Nilai
  ambilNilai() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const berhasil = true;

        if (berhasil) {
          resolve({
            "JavaScript Dasar": 95,
            "Asynchronous JavaScript": 90,
            "Node.js": 88,
          });
        } else {
          reject("❌ Gagal mengambil nilai");
        }
      }, 1000);
    });
  },

  // Dashboard
  async tampilkanDashboard() {
    try {
      // Login terlebih dahulu
      const login = await this.login();
      console.log(login);

      // Jalankan bersamaan
      const [profil, kursus, nilai] = await Promise.all([
        this.ambilProfil(),
        this.ambilKursus(),
        this.ambilNilai(),
      ]);

      console.log("\n===== DASHBOARD =====");
      console.log("Nama Pengguna :", profil.nama);
      console.log("Status Premium:", profil.premium ? "Premium" : "Gratis");
      console.log("\nDaftar Kursus:");
      kursus.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });

      console.log("\nNilai:");
      for (const mapel in nilai) {
        console.log(`${mapel}: ${nilai[mapel]}`);
      }

      console.log("\n🎉 Dashboard berhasil dimuat.");
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  },
};

// Menjalankan program
platform.tampilkanDashboard();