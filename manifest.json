{
  "name": "Hermes Chat",
  "short_name": "Hermes",
  "description": "Aplikasi Chat XMPP dengan Integrasi AI",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1E2749",
  "theme_color": "#1E2749",
  "icons": [
    {
      "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn6OgPC90ZXh0Pjwvc3ZnPg==",
      "sizes": "192x192",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    },
    {
      "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn6OgPC90ZXh0Pjwvc3ZnPg==",
      "sizes": "512x512",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}

**2. `sw.js`** (Service Worker ini memastikan aplikasi tetap bisa dibuka dan menampilkan UI meskipun sinyal putus/offline).
```javascript
const CACHE_NAME = 'hermes-chat-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.conversejs.org/10.1.5/css/converse.min.css',
  'https://cdn.conversejs.org/10.1.5/dist/converse.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

---

### Cara Menyesuaikan Konfigurasi
1. **Server XMPP & BOSH**: Pada file `index.html`, cari variabel `BOSH_URL`. Ubah dari `https://conversejs.org/http-bind/` menjadi alamat Endpoint BOSH server Anda (misalnya `https://chat.domainanda.com/http-bind`).
2. **Bot AI Hermes**: Karena bot Anda adalah akun XMPP biasa (misal `hermesbot@domainanda.com`), Anda tidak perlu mengubah kodenya. Cukup tambahkan JID bot tersebut ke daftar kontak (*Add Contact*) dari dalam aplikasi setelah Anda login. Ubah namanya menjadi **"Hermes AI"** di buku kontak Anda. Setiap pesan yang dikirim ke sana akan otomatis dibalas oleh bot di server.

### Panduan Hosting di GitHub Pages via Ponsel (Gratis & Mudah)

Anda bisa melakukan ini langsung dari browser Chrome atau Safari di ponsel Anda:

1. Buka [github.com](https://github.com/) dan pastikan Anda sudah **Login**.
2. Ketuk ikon **+** di pojok kanan atas, pilih **New repository**.
3. Beri nama repositori (misalnya: `hermes-chat`). Pastikan di-set **Public**. Centang kotak *Add a README file*, lalu ketuk **Create repository**.
4. Di halaman repositori, ketuk tombol **Add file** lalu pilih **Create new file**.
5. Di kolom nama file, ketik `index.html`. Salin semua kode HTML di atas dan tempel di area teks yang besar. Ketuk tombol hijau **Commit changes...** di pojok kanan atas.
6. Ulangi langkah 4 & 5 untuk membuat file `manifest.json` dan `sw.js`, lalu tempel masing-masing kodenya.
7. Setelah ketiga file tersebut ada, ketuk ikon gir (⚙️ **Settings**) di repositori Anda.
8. Gulir ke bawah di menu kiri/dropdown, cari menu **Pages**.
9. Pada bagian *Build and deployment* -> *Source*, pilih **Deploy from a branch**. Di bawahnya (bagian *Branch*), ubah dari *None* menjadi **main**, lalu klik **Save**.
10. Tunggu sekitar 1-2 menit. GitHub akan memberikan Anda URL gratis (biasanya `https://[username-anda].github.io/hermes-chat/`).

Buka URL tersebut di browser ponsel Anda. Anda akan melihat prompt **"Tambahkan ke Layar Utama" (Add to Home Screen)**. Setelah diinstal, Hermes Chat akan muncul di daftar aplikasi ponsel Anda dengan ikon Otak (🧠) dan bisa dibuka secara layar penuh layaknya aplikasi natif!
