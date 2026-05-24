# PZN Course — HTML, CSS & JavaScript

Repositori ini berisi catatan, latihan, dan source code saya selama mengikuti kelas **"HTML, CSS dan JavaScript : Pemula sampai Mahir"** dari **Programmer Zaman Now** (Eko Kurniawan Khannedy) di Udemy.

> **Status: sedang berjalan.** Saya baru sampai materi **JavaScript DOM** (Bagian 9), jadi beberapa folder di bawah mungkin masih kosong atau belum lengkap. README ini akan terus saya update seiring progress belajar.

---

## Tentang Kelas

- **Judul**: HTML, CSS dan JavaScript : Pemula sampai Mahir
- **Pengajar**: Eko Kurniawan Khannedy — Programmer Zaman Now
- **Platform**: Udemy
- **Tujuan**: Menguasai dasar web development dari HTML, styling dengan CSS, sampai pemrograman interaktif dengan JavaScript (dasar sampai DOM, OOP, modules, dan standard library).

---

## Roadmap Belajar

Checklist di bawah ini mengikuti alur kurikulum resmi. Yang sudah tercentang berarti sudah selesai saya pelajari + ada source code-nya di folder terkait.

### HTML

- [x] **Bagian 1 — HTML Dasar** → `html-dasar/`
- [x] **Bagian 2 — HTML Form** → `html-form/`

### CSS

- [x] **Bagian 3 — CSS Dasar** → `css-dasar/`
- [x] **Bagian 4 — CSS Layout** → `css-layout/`

### JavaScript

- [x] **Bagian 5 — JavaScript Dasar** → `js-dasar/`
- [x] **Bagian 6 — JavaScript Object Oriented Programming** → `js-oop/`
- [x] **Bagian 7 — JavaScript Standard Library** → `js-standard-library/`
- [x] **Bagian 8 — JavaScript Modules** → `js-modules/`
- [ ] **Bagian 9 — JavaScript DOM** → `js-document-object-model/` *(in progress — lagi di materi "Pengenalan DOM")*

---

## Struktur Folder

```
pzn-course/
├── html-dasar/                  Dasar tag HTML (heading, list, image, video, table, semantic, dll)
├── html-form/                   Form & input: text, radio, checkbox, select, button, validation
├── css-dasar/                   Selector, color, font, box model, pseudo-class, unit, dll
├── css-layout/                  Display, position, flexbox, grid, responsive, media query
├── js-dasar/                    Variabel, tipe data, operator, kondisi, loop, function, array, object
├── js-oop/                      Class, inheritance, encapsulation, polymorphism, prototype
├── js-standard-library/         String, Number, Math, Date, JSON, RegExp, Error handling
├── js-modules/                  import/export, named export, default export, namespace
└── js-document-object-model/    (ongoing) Selector DOM, event, manipulasi element, form DOM
```

Tiap folder biasanya berisi banyak file `.html` kecil — satu file per materi — supaya mudah di-browse sesuai topik yang dipelajari.

---

## Catatan Per Bagian

### Bagian 1 — HTML Dasar (`html-dasar/`)
Materi pengenalan tag dasar: struktur dokumen, heading, paragraph, list, image, audio, video, table, semantic tag, iframe, dll. Contoh tag `<video>` pakai link sample publik (bukan file lokal) untuk menghemat storage repo.

### Bagian 2 — HTML Form (`html-form/`)
Semua jenis input, form attribute, validation dasar di sisi HTML.

### Bagian 3 — CSS Dasar (`css-dasar/`)
Cara menulis CSS (inline, internal, external), berbagai selector, color, font, text, unit (px/em/rem/%), box model, border, background, dll.

### Bagian 4 — CSS Layout (`css-layout/`)
Display property, positioning, Flexbox, Grid, responsive design dengan media query.

### Bagian 5 — JavaScript Dasar (`js-dasar/`)
Fondasi bahasa JS: variabel (`var`/`let`/`const`), tipe data, operator, kondisi, loop, function, scope, closure, array, object literal.

### Bagian 6 — JavaScript OOP (`js-oop/`)
Paradigma OOP di JS: class, constructor, method, getter/setter, inheritance (`extends`/`super`), static method, private field, prototype.

### Bagian 7 — JavaScript Standard Library (`js-standard-library/`)
Built-in object: `String`, `Number`, `Math`, `Date`, `JSON`, `RegExp`, plus pola error handling (`try/catch/finally`, custom `Error`).

### Bagian 8 — JavaScript Modules (`js-modules/`)
Modular code dengan ES Modules: `import` / `export` / `default export` / `export *` / rename / namespace import.

### Bagian 9 — JavaScript DOM (`js-document-object-model/`) — **IN PROGRESS**
- Pengenalan DOM & konsep tree
- Selector DOM (`getElementById`, `querySelector`, `querySelectorAll`, dll)
- Manipulasi element: `innerHTML`, `textContent`, `setAttribute`, class, style
- Event listener & event object
- Form DOM
- *(update menyusul setiap kali selesai sub-materi)*

---

## Cara Menjalankan

Seluruh materi sampai **Bagian 8** adalah file HTML/CSS/JS statis yang bisa langsung dibuka di browser.

**Opsi 1 — Buka langsung di browser:**
```
Klik dua kali file .html yang ingin dilihat, atau drag ke window browser.
```

**Opsi 2 — Pakai Live Server (rekomendasi):**
1. Install extension **Live Server** di VS Code
2. Klik kanan file `.html` → **Open with Live Server**

**Opsi 3 — HTTP server built-in:**
```powershell
# Dari dalam folder yang ingin disajikan
python -m http.server 8000
# buka http://localhost:8000 di browser
```

Modul di **Bagian 8** (`js-modules/`) **wajib** dijalankan via HTTP server (bukan `file://`) karena ES Module punya CORS policy.

---

## Progress Tracker

| Bagian | Status | Progress |
|---|---|---|
| HTML Dasar | Selesai | 100% |
| HTML Form | Selesai | 100% |
| CSS Dasar | Selesai | 100% |
| CSS Layout | Selesai | 100% |
| JS Dasar | Selesai | 100% |
| JS OOP | Selesai | 100% |
| JS Standard Library | Selesai | ~100% |
| JS Modules | Selesai | 100% |
| **JS DOM** | **Sedang berjalan** | **~10%** |

---

## Rencana Setelah Kelas Ini

- Lanjut ke framework modern (kemungkinan React / Next.js)
- Membangun project portfolio dari gabungan materi di atas
- Deep dive ke topik yang belum tercover: Async/Await, Fetch API, Web Storage, Web Components

---

## Lisensi & Kredit

- Materi belajar: milik **Eko Kurniawan Khannedy — Programmer Zaman Now**. Repo ini hanya berisi latihan pribadi, bukan redistribusi konten kursus.
- Sample video di `html-dasar/video.html` memakai aset publik dari [W3Schools](https://www.w3schools.com/html/mov_bbb.mp4).

---

*README ini akan terus diperbarui. Kalau kamu lihat folder masih kosong atau ada section yang tertulis "in progress", itu artinya saya masih di perjalanan menuju materi tersebut.*
