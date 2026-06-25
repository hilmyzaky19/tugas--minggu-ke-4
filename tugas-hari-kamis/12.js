// Soal 12 — Sistem Premium

// Setelah login berhasil:

// Program harus memeriksa status pengguna.

// Jika premium:

// Mengakses fitur premium...

// Jika bukan premium:

// Fitur premium tidak tersedia.

// Gunakan lebih dari satu operasi asynchronous.

// ---

function login(username, password) {
    return new Promise((resolve, reject) => {
        const users = [
            {
                username: "budi",
                password: "12345",
                nama: "Budi",
                premium: true
            },
            {
                username: "ani",
                password: "abc123",
                nama: "Ani",
                premium: false
            }
        ];

        setTimeout(() => {
            const user = users.find(
                u => u.username === username && u.password === password
            );

            if (user) {
                resolve(user);
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

function cekStatusPremium(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user.premium);
        }, 1000);
    });
}

async function aksesPremium(username, password) {
    try {
        const user = await login(username, password);

        console.log(`Selamat datang, ${user.nama}`);

        const premium = await cekStatusPremium(user);

        if (premium) {
            console.log("Mengakses fitur premium...");
        } else {
            console.log("Fitur premium tidak tersedia.");
        }
    } catch (error) {
        console.log(error);
    }
}

// Contoh pengguna premium
aksesPremium("budi", "12345");

// Contoh pengguna non-premium
// aksesPremium("ani", "abc123");