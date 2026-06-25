// Tugas Praktik JavaScript
// Asynchronous JavaScript, Promise, Async/Await
// Soal 1 — Simulasi Synchronous vs Asynchronous

// ==========================================
// PROGRAM A (Synchronous)
// ==========================================
// Pada program synchronous, setiap instruksi dieksekusi secara berurutan.
// Baris berikutnya harus menunggu baris sebelumnya selesai dieksekusi (blocking).
console.log("=== RUNNING PROGRAM A (Synchronous) ===");

function programA() {
  console.log("Mulai Belajar");
  console.log("Mengerjakan Tugas");
  console.log("Selesai");
}

programA();

// Pembatas untuk memisahkan eksekusi kedua program
console.log("\n==========================================\n");

// ==========================================
// PROGRAM B (Asynchronous)
// ==========================================
// Pada program asynchronous, proses yang memakan waktu lama (seperti mengunduh materi)
// didelegasikan menggunakan setTimeout untuk mensimulasikan proses lambat.
// Ini bersifat non-blocking, sehingga baris berikutnya ("Selesai") langsung dieksekusi.
console.log("=== RUNNING PROGRAM B (Asynchronous) ===");

function programB() {
  console.log("Mulai Belajar");

  // Mensimulasikan proses mengunduh materi yang membutuhkan waktu 3 detik
  setTimeout(() => {
    console.log("Mengunduh Materi");
  }, 3000);

  console.log("Selesai");
}

programB();

/*
================================================================================
PENJELASAN PERBEDAAN PERILAKU KEDUA PROGRAM:
================================================================================

1. Program A (Synchronous):
   - Aliran Eksekusi: Berurutan secara berantai (Synchronous/Blocking).
   - Output:
     1. Mulai Belajar
     2. Mengerjakan Tugas
     3. Selesai
   - Penjelasan: Setiap baris kode dieksekusi secara sekuensial dari atas ke bawah.
     Instruksi "Selesai" baru akan dicetak setelah instruksi "Mengerjakan Tugas"
     selesai dieksekusi. Program ini memblokir (block) eksekusi baris selanjutnya
     hingga tugas yang aktif selesai.

2. Program B (Asynchronous):
   - Aliran Eksekusi: Non-blocking menggunakan Event Loop.
   - Output:
     1. Mulai Belajar
     2. Selesai
     3. Mengunduh Materi (setelah jeda 3 detik)
   - Penjelasan: Saat JavaScript menemui `setTimeout()`, tugas "Mengunduh Materi"
     dijadwalkan di latar belakang (Web API / Timer Node.js) dan dijalankan secara
     asinkron. JavaScript tidak menunggu proses mengunduh selesai (non-blocking),
     melainkan langsung mengeksekusi baris berikutnya ("Selesai"). Setelah timer
     3 detik habis, callback dari `setTimeout` masuk ke Callback Queue, lalu
     diekskusi oleh Event Loop ketika Stack Eksekusi utama kosong. Sehingga,
     "Mengunduh Materi" muncul paling akhir di terminal.
*/
