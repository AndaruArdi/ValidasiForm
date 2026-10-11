# ValidasiForm
Codingan untuk Pemrograman Berbasis Web

### Jawaban Soal Evaluasi Mandiri

1. Jelaskan mengapa validasi client-side tidak boleh menjadi satu-satunya lapisan validasi pada aplikasi web.
* Validasi client-side dilakukan di browser pengguna sehingga dapat dilewati (misalnya dengan mematikan JavaScript atau mengirim permintaan/request secara langsung ke server). Oleh karena itu, validasi di sisi server server-side validation tetap mutlak diperlukan untuk memastikan integritas dan keamanan data pada aplikasi nyata.

2. Sebutkan minimal tiga atribut validasi bawaan HTML5 beserta fungsinya masing-masing.
- required: Memastikan elemen form wajib diisi oleh pengguna sebelum form dapat dikirim.
- minlength, maxlength : Menentukan batas jumlah karakter minimum dan maksimum yang diizinkan pada input.
- pattern: Mencocokkan nilai input dengan pola ekspresi reguler tertentu.
- Atribut tambahan: min / max untuk batas nilai minimum/maksimum angka atau tanggal.

3. Jelaskan perbedaan antara input.checkValidity() dan input.reportValidity().
- input.checkValidity() : Berfungsi untuk memeriksa dan mengembalikan nilai boolean (true atau false) mengenai apakah suatu input valid atau tidak berdasarkan aturan validasi yang terpasang.
- input.reportValidity(): Selain memeriksa validitas, fungsi ini juga secara otomatis memicu browser untuk menampilkan gelembung pesan error bawaan (error bubble) di layar jika input tersebut tidak valid.

4. Apa fungsi setCustomValidity("") (string kosong), dan mengapa penting memanggilnya kembali setelah error diperbaiki?**
Fungsi setCustomValidity("") dengan string kosong digunakan untuk mereset status error kustom pada sebuah input. Hal ini sangat penting dipanggil kembali setelah error diperbaiki agar browser menganggap elemen input tersebut kembali valid dan mengizinkan form untuk dikirim (submit).

5. Rancang aturan validasi (beserta pseudocode) agar field “Tanggal Lahir” tidak boleh berada di masa depan.
Aturan Validasi: Nilai tanggal lahir yang dipilih pengguna harus lebih kecil dari atau sama dengan tanggal hari ini (current date). Dengan cara memanfaatkan atribut max pada tipe input tanggal (type="date") atau membandingkannya saat event input/submit.

Pseudocode (JavaScript):
- Ambil nilai input tanggal lahir (tanggalLahir)
- Ambil tanggal hari ini (tanggalHariIni)

- Jika tanggalLahir > tanggalHariIni maka:
    - Tampilkan pesan error: "Tanggal lahir tidak boleh di masa depan"
    - Set valid = false
- Jika tidak:
    - Hapus pesan error


# Kesimpulan
Secara keseluruhan, koding Formulir Pendaftaran Mahasiswa Baru yang dibuat sudah menerapkan konsep-konsep utama dari modul praktikum.
Validasi formulir menggunakan atribut HTML5 seperti required, minlength, type="email", type="tel", dan pattern untuk memastikan data yang dimasukkan sesuai dengan ketentuan. Selain itu, digunakan juga Constraint Validation API, seperti checkValidity() dan setCustomValidity() pada JavaScript, untuk memeriksa kesalahan input dan menampilkan pesan dalam bahasa Indonesia. Validasi JavaScript juga diterapkan untuk memeriksa kecocokan password dengan konfirmasi password serta memastikan pilihan tombol radio sudah diisi.