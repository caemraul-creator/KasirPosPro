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
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxivVIWsfYkrZmogxTiPoypIZYWV47z2C5Ke_jif4ZGhVnFNHDVfMeX-HZh5jTye71Y/exec";

// Secret key untuk verifikasi request ke Apps Script
const APP_SECRET = (function () {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let secret = '';
  for (let i = 0; i < 32; i++) {
    secret += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  if (typeof sessionStorage !== 'undefined') {
    const existing = sessionStorage.getItem('kp_app_secret');
    if (existing) return existing;
    sessionStorage.setItem('kp_app_secret', secret);
  }
  return secret;
})();

// Data pengguna default (PIN akan di-hash saat disimpan)
const USERS = [
  {
    id: 'u1',
    name: 'Admin',
    email: 'admin@toko.com',
    role: 'admin',
    pin: '1234',
    outlet: 'Pusat',
    mustChangePin: true
  }
];