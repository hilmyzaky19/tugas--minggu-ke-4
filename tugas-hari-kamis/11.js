// Soal 11 — Simulasi Login

// Buat function:

// login(username, password)

// Aturan:

// - proses login membutuhkan waktu 2 detik
// - username dan password diperiksa dari database simulasi

// Jika berhasil:

// Selamat datang, [nama]

// Jika gagal:

// Username atau password salah

// Gunakan Promise dan async/await.

// ---

function login(username, password) {
    return new Promise((resolve, reject) => {
        const users = [
            {
                username: "budi",
                password: "12345",
                nama: "Budi"
            },
            {
                username: "ani",
                password: "abc123",
                nama: "Ani"
            }
        ];

        setTimeout(() => {
            const user = users.find(
                u => u.username === username && u.password === password
            );

            if (user) {
                resolve(`Selamat datang, ${user.nama}`);
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

async function prosesLogin(username, password) {
    try {
        const hasil = await login(username, password);
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}

// Contoh berhasil
prosesLogin("budi", "12345");

// Contoh gagal
// prosesLogin("budi", "salah");