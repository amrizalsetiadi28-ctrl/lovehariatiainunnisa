# Website Ulang Tahun untuk Ainun

HTML, CSS, dan JavaScript murni. Tidak perlu install apa pun.

## Struktur

```
birthday-site/
├── index.html
├── style.css
├── script.js          <- semua teks, tanggal, dan foto diatur di objek CONFIG paling atas
└── assets/
    ├── photos/        <- taruh foto di sini
    └── music/         <- taruh lagu.mp3 di sini
```

## Mengganti foto
1. Kompres foto dulu (lebar sekitar 1000px, ukuran di bawah 300 KB per foto) lewat squoosh.app atau tinypng.com.
2. Simpan di `assets/photos/` dengan nama `foto1.jpg`, `foto2.jpg`, dan seterusnya.
3. Ubah caption dan tanggal di bagian `photos` pada `script.js`. Boleh menambah atau menghapus baris.
4. Foto yang belum ada otomatis tampil sebagai placeholder berbentuk hati.

## Mengganti lagu
Simpan lagu dengan nama `lagu.mp3` di `assets/music/` (idealnya di bawah 5 MB).
Nama lain juga boleh, asal `src` pada tag `<audio>` di `index.html` ikut diubah.

## Mengubah tanggal countdown
Di `script.js`, ubah `birthday.target`. Format: `"2026-11-15T00:00:00+07:00"`.
`+07:00` berarti WIB. Jika waktu sudah tiba, tampilan berubah menjadi perayaan dengan confetti dan kembang api.

Untuk mencoba tampilan perayaan sekarang juga, buka `index.html?test=ultah`.

## Mencoba di komputer
Cukup klik dua kali `index.html`. Untuk uji yang lebih mirip aslinya:
`python3 -m http.server 8000` lalu buka `http://localhost:8000`.

## Mempublikasikan
**Netlify (paling mudah):** buka app.netlify.com/drop, lalu tarik seluruh folder `birthday-site` ke halaman itu. Link langsung jadi.

**GitHub Pages:** buat repository, upload semua file, lalu Settings > Pages > pilih branch `main` dan folder `/ (root)`.

**Vercel:** impor repository atau jalankan `vercel` di dalam folder ini.

## Preview WhatsApp
Setelah punya link, ubah `og:image` di `index.html` menjadi alamat lengkap, misalnya
`https://namamu.netlify.app/assets/photos/foto1.jpg`, agar gambar muncul saat link dibagikan.
