function ambilKursus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "JavaScript Dasar",
                "React",
                "Node.js"
            ]);
        }, 3000);
    });
}

async function tampilkanKursus() {
    try {
        const kursus = await ambilKursus();

        console.log("Daftar Kursus:");
        kursus.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    } catch (error) {
        console.log("Terjadi kesalahan:", error);
    }
}

tampilkanKursus();