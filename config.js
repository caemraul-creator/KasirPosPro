// Konfigurasi Firebase
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyACCOUmKp9JoF8E870mGBsAKiljnLeLrz0",
  authDomain: "poskasirpro.firebaseapp.com",
  projectId: "poskasirpro",
  storageBucket: "poskasirpro.firebasestorage.app",
  messagingSenderId: "470171423708",
  appId: "1:470171423708:web:08bd36c72a2f83e3f97519"
};

// Konfigurasi Google Sheets Backup
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbw5PqBi95uauBHsAW6Mp7T2iUiCY7BcM5of1GLe6EOzz3w0d-Pn3Yo4IHnvE7nSoJjL/exec";

// Secret key untuk verifikasi request ke Apps Script
const APP_SECRET = (function () {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let secret = '';
  for (let i = 0; i < 32; i++) {
    secret += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  // Gunakan localStorage agar kunci tetap sama lintas sesi & tab
  // (sessionStorage terhapus saat tab ditutup → enkripsi rusak)
  if (typeof localStorage !== 'undefined') {
    const existing = localStorage.getItem('kp_app_secret');
    if (existing) return existing;
    localStorage.setItem('kp_app_secret', secret);
  }
  return secret;
})();

// Data pengguna default
const USERS = [
  {
    id: 'u1',
    name: 'Admin',
    email: 'admin@toko.com',
    role: 'admin',
    pin: '1234',
    outlet: 'Pusat',
  },
  {
    id: 'u2',
    name: 'Kasir 1',
    email: 'kasir@toko.com',
    role: 'kasir',
    pin: '1234',
    outlet: 'Pusat',
  },
  {
    id: 'u3',
    name: 'Supervisor',
    email: 'spv@toko.com',
    role: 'supervisor',
    pin: '1234',
    outlet: 'Pusat',
  }
];