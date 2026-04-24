// Konfigurasi Firebase
// Simpan API Key dan pengaturan lainnya di sini agar terpisah dari file HTML utama.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyACCOUmKp9JoF8E870mGBsAKiljnLeLrz0",
  authDomain: "poskasirpro.firebaseapp.com",
  projectId: "poskasirpro",
  storageBucket: "poskasirpro.firebasestorage.app",
  messagingSenderId: "470171423708",
  appId: "1:470171423708:web:08bd36c72a2f83e3f97519"
};

// Konfigurasi Google Sheets Backup
// Ganti dengan URL Web App Apps Script Anda
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxnvngL6KkNAGl84NEeSM_V2yqcqr1uQbuEpZrar1Xb0B2fhiZ5bIamxr1N4e38AR8I/exec";

// Data pengguna (Password/PIN)
// Secara default disisakan 1 Admin agar Anda tetap bisa login pertama kali.
// Anda bisa mengubah PIN ini di menu Pengaturan setelah login.
const USERS = [
  { id: 'u1', name: 'Admin', email: 'admin@toko.com', role: 'admin', pin: '1234', outlet: 'Pusat' }
];

