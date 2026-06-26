## Ringkasan Bab 21: Web API

Web API adalah antarmuka yang disediakan browser agar JavaScript dapat berinteraksi dengan browser, server, dan perangkat pengguna.

1. Fetch API
Digunakan untuk mengambil atau mengirim data ke server.
Bersifat asinkron dan menggunakan Promise.
Method HTTP:
*GET* → mengambil data.
*POST* → mengirim data baru.
*PUT* → memperbarui seluruh data.
*PATC*H* → memperbarui sebagian data.
*DELETE*→ menghapus data.
2. Web Storage API

Digunakan untuk menyimpan data di browser.

localStorage → data tetap tersimpan sampai dihapus.
sessionStorage → data hilang saat tab/browser ditutup.
Data berupa objek harus diubah menjadi JSON menggunakan JSON.stringify() dan dibaca kembali dengan JSON.parse().
3. Geolocation API
Mengambil lokasi pengguna (latitude & longitude).
Membutuhkan izin dari pengguna.
Dapat mengambil lokasi sekali (getCurrentPosition) atau memantau lokasi secara real-time (watchPosition).
4. History API
Mengatur riwayat navigasi browser tanpa me-refresh halaman.
Cocok untuk membuat Single Page Application (SPA).
Method penting: pushState(), replaceState(), back(), forward(), dan go().
5. Clipboard API
Menyalin teks ke clipboard (writeText()).
Membaca isi clipboard (readText()).
Sering digunakan pada tombol Copy.
6. Intersection Observer API
Mendeteksi apakah suatu elemen sedang terlihat di layar (viewport).
Umumnya digunakan untuk lazy loading gambar dan animasi saat elemen muncul.