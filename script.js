const formPendaftaran = document.querySelector("#form-pendaftaran");

const inputNama = document.querySelector("#nama");
const inputAlamatSurat = document.querySelector("#alamat_surat");
const inputAlamatAsal = document.querySelector("#alamat_asal");
const inputKabupaten = document.querySelector("#kabupaten");
const inputPropinsi = document.querySelector("#propinsi");
const inputTelepon = document.querySelector("#telepon");
const inputEmail = document.querySelector("#email");
const inputOrtu = document.querySelector("#ortu");
const inputPassword = document.querySelector("#password");
const inputKonfirmasi = document.querySelector("#konfirmasi");

const errorNama = document.querySelector("#error-nama");
const errorAlamatSurat = document.querySelector("#error-alamat-surat");
const errorAlamatAsal = document.querySelector("#error-alamat-asal");
const errorKabupaten = document.querySelector("#error-kabupaten");
const errorPropinsi = document.querySelector("#error-propinsi");
const errorTelepon = document.querySelector("#error-telepon");
const errorEmail = document.querySelector("#error-email");
const errorOrtu = document.querySelector("#error-ortu");
const errorPassword = document.querySelector("#error-password");
const errorKonfirmasi = document.querySelector("#error-konfirmasi");

const errorJk = document.querySelector("#error-jk");
const errorStatus = document.querySelector("#error-status");
const errorAgama = document.querySelector("#error-agama");
const errorKewarganegaraan = document.querySelector("#error-kewarganegaraan");
const errorPendidikan = document.querySelector("#error-pendidikan");

function validasiField(input, errorElement) {
    if (!input.checkValidity()) {
        errorElement.textContent = input.validationMessage;
    } else {
        errorElement.textContent = "";
    }
}

inputNama.addEventListener("input", () => {
    if (inputNama.validity.valueMissing) {
        inputNama.setCustomValidity("Nama wajib diisi");
    } else if (inputNama.validity.tooShort) {
        inputNama.setCustomValidity("Nama minimal 3 karakter");
    } else {
        inputNama.setCustomValidity("");
    }
    validasiField(inputNama, errorNama);
});

inputAlamatSurat.addEventListener("input", () => {
    if (inputAlamatSurat.validity.valueMissing) {
        inputAlamatSurat.setCustomValidity("Alamat surat wajib diisi");
    } else if (inputAlamatSurat.validity.tooShort) {
        inputAlamatSurat.setCustomValidity("Alamat terlalu pendek");
    } else {
        inputAlamatSurat.setCustomValidity("");
    }
    validasiField(inputAlamatSurat, errorAlamatSurat);
});

inputAlamatAsal.addEventListener("input", () => {
    if (inputAlamatAsal.validity.valueMissing) {
        inputAlamatAsal.setCustomValidity("Alamat asal wajib diisi");
    } else {
        inputAlamatAsal.setCustomValidity("");
    }
    validasiField(inputAlamatAsal, errorAlamatAsal);
});

inputKabupaten.addEventListener("input", () => {
    if (inputKabupaten.validity.valueMissing) {
        inputKabupaten.setCustomValidity("Kabupaten/Kota wajib diisi");
    } else {
        inputKabupaten.setCustomValidity("");
    }
    validasiField(inputKabupaten, errorKabupaten);
});

inputPropinsi.addEventListener("input", () => {
    if (inputPropinsi.validity.valueMissing) {
        inputPropinsi.setCustomValidity("Propinsi wajib diisi");
    } else {
        inputPropinsi.setCustomValidity("");
    }
    validasiField(inputPropinsi, errorPropinsi);
});

inputTelepon.addEventListener("input", () => {
    if (inputTelepon.validity.valueMissing) {
        inputTelepon.setCustomValidity("No. Telepon wajib diisi");
    } else if (inputTelepon.validity.patternMismatch) {
        inputTelepon.setCustomValidity("No. Telepon harus berupa angka (10-13 digit)");
    } else {
        inputTelepon.setCustomValidity("");
    }
    validasiField(inputTelepon, errorTelepon);
});

inputEmail.addEventListener("input", () => {
    if (inputEmail.validity.valueMissing) {
        inputEmail.setCustomValidity("Email wajib diisi");
    } else if (inputEmail.validity.typeMismatch) {
        inputEmail.setCustomValidity("Format email tidak valid, contoh: nama@email.com");
    } else {
        inputEmail.setCustomValidity("");
    }
    validasiField(inputEmail, errorEmail);
});

inputOrtu.addEventListener("input", () => {
    if (inputOrtu.validity.valueMissing) {
        inputOrtu.setCustomValidity("Nama orang tua wajib diisi");
    } else {
        inputOrtu.setCustomValidity("");
    }
    validasiField(inputOrtu, errorOrtu);
});

inputPassword.addEventListener("input", () => {
    if (inputPassword.validity.valueMissing) {
        inputPassword.setCustomValidity("Password wajib diisi");
    } else if (inputPassword.validity.tooShort) {
        inputPassword.setCustomValidity("Password minimal 8 karakter");
    } else {
        inputPassword.setCustomValidity("");
    }
    validasiField(inputPassword, errorPassword);
});

inputKonfirmasi.addEventListener("input", () => {
    if (inputKonfirmasi.value !== inputPassword.value) {
        errorKonfirmasi.textContent = "Konfirmasi password tidak sama dengan password";
    } else {
        errorKonfirmasi.textContent = "";
    }
});

formPendaftaran.addEventListener("submit", (e) => {
    let isValid = true;

    // 1. Validasi semua input teks, email, tel, password bawaan 
    const textInputs = [
        inputNama, inputAlamatSurat, inputAlamatAsal, 
        inputKabupaten, inputPropinsi, inputTelepon, 
        inputEmail, inputOrtu, inputPassword
    ];

    textInputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    // 2. Validasi Radio Button (Jenis Kelamin)
    if (!document.querySelector('input[name="jenis_kelamin"]:checked')) {
        errorJk.textContent = "Pilih jenis kelamin";
        isValid = false;
    } else { 
        errorJk.textContent = ""; 
    }

    // Validasi Radio Button (Status)
    if (!document.querySelector('input[name="status"]:checked')) {
        errorStatus.textContent = "Pilih status";
        isValid = false;
    } else { 
        errorStatus.textContent = ""; 
    }

    // Validasi Radio Button (Agama)
    if (!document.querySelector('input[name="agama"]:checked')) {
        errorAgama.textContent = "Pilih agama";
        isValid = false;
    } else { 
        errorAgama.textContent = ""; 
    }

    // Validasi Radio Button (Kewarganegaraan)
    if (!document.querySelector('input[name="kewarganegaraan"]:checked')) {
        errorKewarganegaraan.textContent = "Pilih kewarganegaraan";
        isValid = false;
    } else { 
        errorKewarganegaraan.textContent = ""; 
    }

    // Validasi Radio Button (Pendidikan Orang Tua)
    if (!document.querySelector('input[name="pendidikan_ortu"]:checked')) {
        errorPendidikan.textContent = "Pilih tingkat pendidikan orang tua";
        isValid = false;
    } else { 
        errorPendidikan.textContent = ""; 
    }

    // 3. Validasi Kustom: Konfirmasi Password
    if (inputKonfirmasi.value !== inputPassword.value) {
        errorKonfirmasi.textContent = "Konfirmasi password tidak sama dengan password";
        isValid = false;
    } else {
        errorKonfirmasi.textContent = "";
    }

    // 4. Keputusan akhir pengiriman form
    if (!isValid) {
        e.preventDefault(); // Batalkan pengiriman jika ada yang tidak valid
    } else {
        e.preventDefault(); // Mencegah reload halaman untuk simulasi
        alert("Pendaftaran berhasil!");
        formPendaftaran.reset();
        document.querySelectorAll(".pesan-error").forEach(el => el.textContent = "");
    }
});