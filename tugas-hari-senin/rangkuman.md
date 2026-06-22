# Rangkuman Materi DOM (Document Object Model)

## Pengertian DOM

DOM (Document Object Model) adalah representasi halaman HTML dalam bentuk objek yang memungkinkan JavaScript berinteraksi dengan elemen-elemen HTML. Dengan DOM, JavaScript dapat membaca, mengubah, menambah, dan menghapus elemen pada halaman web tanpa perlu me-refresh halaman.

## Menyeleksi Elemen HTML

Sebelum memanipulasi elemen, JavaScript harus menyeleksinya terlebih dahulu.

* `getElementById()` → memilih elemen berdasarkan id.
* `querySelector()` → memilih elemen pertama yang sesuai dengan selector CSS.
* `querySelectorAll()` → memilih semua elemen yang sesuai dengan selector CSS.

## Memanipulasi Konten

Untuk mengubah isi elemen dapat menggunakan:

* `textContent` → mengubah atau membaca teks tanpa HTML.
* `innerHTML` → mengubah atau membaca isi termasuk tag HTML.

## Memanipulasi Atribut

Atribut elemen dapat dibaca dan diubah menggunakan:

* `getAttribute()` → membaca atribut.
* `setAttribute()` → mengubah atribut.

## Memanipulasi Style dan Class

Tampilan elemen dapat diubah menggunakan:

* `style` → mengubah CSS secara langsung.
* `classList.add()` → menambahkan class.
* `classList.remove()` → menghapus class.
* `classList.toggle()` → menambah atau menghapus class secara bergantian.
* `classList.contains()` → memeriksa keberadaan class.

## Membuat dan Mengelola Elemen Baru

JavaScript dapat membuat elemen HTML baru menggunakan:

* `createElement()` → membuat elemen baru.
* `appendChild()` → menambahkan elemen ke bagian akhir parent.
* `prepend()` → menambahkan elemen ke bagian awal parent.
* `after()` → menambahkan elemen setelah elemen tertentu.
* `remove()` → menghapus elemen dari DOM.

## Kesimpulan

DOM merupakan jembatan antara HTML dan JavaScript yang memungkinkan halaman web menjadi lebih dinamis dan interaktif. Dengan DOM, JavaScript dapat menyeleksi, mengubah, menambah, dan menghapus elemen HTML sesuai kebutuhan pengguna.


# Rangkuman Materi JS Events

## Pengertian Event

Event adalah mekanisme yang digunakan JavaScript untuk mendeteksi dan merespons interaksi pengguna, seperti klik tombol, mengetik pada input, mengirim formulir, atau menggerakkan mouse.

## Event Listener

Untuk mendeteksi suatu event digunakan method `addEventListener()`.

```javascript
element.addEventListener("click", callback);
```

Method ini menerima dua parameter:

1. Nama event.
2. Function yang dijalankan ketika event terjadi.

## Jenis-Jenis Event

### Event Mouse

* `click` → saat elemen diklik.
* `dblclick` → saat elemen diklik dua kali.
* `mouseenter` → saat kursor masuk ke elemen.
* `mouseleave` → saat kursor keluar dari elemen.
* `mousemove` → saat kursor bergerak di atas elemen.

### Event Keyboard

* `keydown` → saat tombol keyboard ditekan.
* `keyup` → saat tombol keyboard dilepas.

### Event Form

* `input` → saat nilai input berubah secara real-time.
* `change` → saat nilai berubah dan kehilangan fokus.
* `submit` → saat formulir dikirim.
* `focus` → saat elemen mendapat fokus.
* `blur` → saat elemen kehilangan fokus.

### Event Halaman

* `load` → saat seluruh halaman selesai dimuat.
* `DOMContentLoaded` → saat struktur DOM selesai dibuat.
* `scroll` → saat halaman digulir.
* `resize` → saat ukuran jendela browser berubah.

## Event Object

Setiap event menghasilkan Event Object yang berisi informasi tentang kejadian tersebut.

Properti yang sering digunakan:

* `e.type` → jenis event.
* `e.target` → elemen yang memicu event.
* `e.target.value` → nilai input.
* `e.key` → tombol keyboard yang ditekan.
* `e.clientX` dan `e.clientY` → posisi kursor.

## preventDefault()

Method `e.preventDefault()` digunakan untuk mencegah perilaku bawaan browser, seperti:

* Link berpindah halaman.
* Form melakukan refresh setelah submit.

Dengan method ini, data dapat diproses menggunakan JavaScript tanpa memuat ulang halaman.

## Event Delegation

Event Delegation adalah teknik memasang satu event listener pada elemen induk untuk menangani banyak elemen anak menggunakan `e.target`.

Keuntungan:

* Lebih efisien.
* Tetap bekerja pada elemen yang ditambahkan secara dinamis.

## Kesimpulan

JS Events memungkinkan halaman web merespons berbagai interaksi pengguna. Dengan memahami `addEventListener()`, Event Object, `preventDefault()`, dan Event Delegation, kita dapat membuat aplikasi web yang lebih interaktif dan dinamis tanpa perlu me-refresh halaman.

# Rangkuman Materi Modularisasi JavaScript

## Pengertian Modularisasi

Modularisasi adalah teknik memecah kode JavaScript yang besar menjadi beberapa file kecil yang memiliki tugas masing-masing. Tujuannya agar kode lebih rapi, mudah dibaca, mudah diperbaiki, dan mengurangi konflik antar variabel atau fungsi.

## Export dan Import

Agar fungsi, variabel, atau class dapat digunakan di file lain, digunakan:

* `export` → mengekspor fungsi atau variabel dari suatu file.
* `import` → mengimpor fungsi atau variabel dari file lain.

Dengan mekanisme ini, beberapa file JavaScript dapat saling terhubung.

## Named Export

Named Export digunakan ketika satu file ingin mengekspor lebih dari satu fungsi atau variabel.

Ciri-cirinya:

* Dapat memiliki banyak export dalam satu file.
* Saat import wajib menggunakan kurung kurawal `{}`.
* Nama yang diimport harus sama dengan nama yang diekspor.

Contoh:

```javascript
export function hitungPajak() {}
export const TARIF = 0.11;
```

```javascript
import { hitungPajak, TARIF } from "./file.js";
```

## Default Export

Default Export digunakan ketika sebuah file hanya memiliki satu fungsi atau nilai utama yang ingin diekspor.

Ciri-cirinya:

* Hanya boleh satu dalam satu file.
* Saat import tidak menggunakan kurung kurawal.
* Nama saat import bebas ditentukan.

Contoh:

```javascript
export default function login() {}
```

```javascript
import prosesLogin from "./file.js";
```

## Alias dan Import Keseluruhan

### Menggunakan Alias

```javascript
import { hitungPajak as hitung } from "./file.js";
```

Digunakan untuk mengganti nama saat import.

### Mengimpor Semua Isi File

```javascript
import * as Utils from "./file.js";
```

Semua export dapat diakses melalui objek `Utils`.

## Mengaktifkan ES6 Modules

Agar `import` dan `export` dapat digunakan, tag script harus menggunakan atribut:

```html
<script type="module" src="./app.js"></script>
```

Tanpa `type="module"`, sistem modul tidak akan berjalan.

## Struktur Proyek Modular

Contoh struktur proyek:

```text
proyek/
├── index.html
└── js/
    ├── app.js
    ├── kalkulasi.js
    ├── validasi.js
    └── tampilan.js
```

Setiap file memiliki tanggung jawab tertentu sehingga kode lebih terorganisir.

## Kesimpulan

Modularisasi membantu membuat kode JavaScript lebih rapi, mudah dipelajari, dan mudah dipelihara. Konsep utama dalam modularisasi adalah `export` untuk membagikan kode dan `import` untuk menggunakan kode dari file lain. Terdapat dua jenis export, yaitu Named Export dan Default Export, yang digunakan sesuai kebutuhan proyek.
