## Praktikum 1: Menyiapkan Lingkungan Pengembangan
1. Instalasi Git

![alt text](img/git.png)

2. Instalasi VS Code
![alt text](img/vsc.png)
3. Instalasi NodeJS

![alt text](img/node.png)

**Pertanyaan Praktikum 1**
1. Jelaskan kegunaan masing-masing dari Git, VS Code dan NodeJS yang telah Anda install pada sesi praktikum ini!
**jawaban**
kegunaan Git, VS Code, dan Node.js:

Git: Sistem kontrol versi yang digunakan untuk melacak perubahan kode, berkolaborasi dengan tim, dan mengelola versi kode.

VS Code: Editor kode sumber yang ringan dan kuat dengan fitur seperti autocompletion, debugging, dan terminal terintegrasi untuk pengembangan perangkat lunak.

Node.js: Runtime JavaScript untuk menjalankan aplikasi di sisi server, ideal untuk aplikasi web yang cepat dan skalabel dengan dukungan ekosistem npm.

2. Buktikan dengan screenshoot yang menunjukkan bahwa masing-masing tools tersebut
telah berhasil terinstall di perangkat Anda!


## Praktikum 2: Membuat Proyek Pertama React Menggunakan Next.js
1. Membuat folder proyek baru dengan nama ```belajar-react```. Melalui konsol/command
prompt/CMD masuk ke dalam folder tersebut dan jalankan perintah ini:

    ```npx create-next-app```
2. Buat proyek baru dengan nama ```hello-world``` seperti di bawah ini. Nama proyek ini perlu
dimasukkan pertama kali melalui konsol.
![alt text](img/1.png)
3. Buka folder proyek hello-world menggunakan VS Code. Masuk ke dalam folder proyek helloworld dengan perintah:

    ```cd hello-world```

    Kemudian setelah masuk ke folder hello-world, masukkan perintah:

    ```code .```

    Maka VS Code akan membuka project react Anda yang telah dibuat bernama ```hello-world```.
    
    Dan akan menampilkan struktur folder proyek seperti di bawah ini.
    
    ![alt text](img/2.png)
4. Running proyek hello-world dengan memasukkan perintah di bawah ini melalui konsol atau
terminal di dalam VS Code.

    ```npm run dev```
    
    Tunggu proses kompilasi hingga selesai. Lalu Anda dapat membuka alamat localhost di browser: http://localhost:3000/
    ![alt text](img/3.png)
    
    Jika di browser telah tampil seperti gambar berikut ini, Selamat!
    ![alt text](img/4.png)

**Pertanyaan Praktikum 2**
1. Pada Langkah ke-2, setelah membuat proyek baru menggunakan Next.js, terdapat beberapa
istilah yang muncul. Jelaskan istilah tersebut, TypeScript, ESLint, Tailwind CSS, App
Router, Import alias, App router, dan Turbopack!

**jawaban**
1. TypeScript
    TypeScript adalah superset dari JavaScript yang menambahkan fitur tipe statis untuk mendeteksi kesalahan lebih awal dan meningkatkan keterbacaan serta pemeliharaan kode.

    2. ESLint
    ESLint adalah alat untuk mendeteksi dan memperbaiki kesalahan sintaks serta memastikan konsistensi kode dalam proyek JavaScript atau TypeScript.

    3. Tailwind CSS
    Tailwind CSS adalah framework CSS berbasis utility-first yang memungkinkan pengembang membuat desain antarmuka dengan cepat menggunakan class bawaan tanpa perlu menulis CSS kustom.

    4. App Router
    App Router adalah sistem routing baru di Next.js yang berbasis file dalam folder app/, menggantikan sistem Pages Router (pages/), dan mendukung fitur seperti server components serta layout nesting.

    5. Import Alias
    Import alias memungkinkan penggunaan path pendek untuk mengimpor file dalam proyek, sehingga lebih mudah dikelola. Misalnya:
    import Button from '@/components/Button';

    Alih-alih menggunakan path panjang seperti:
    import Button from '../../components/Button';

    6. Turbopack
    Turbopack adalah bundler baru di Next.js yang lebih cepat dibanding Webpack. Ini digunakan untuk pengembangan lokal agar proses build dan hot reload lebih cepat.

2. Apa saja kegunaaN folder dan file yang ada pada struktur proyek React yang tampil pada
gambar pada tahap percobaan ke-3!
**jawaban**
    1. TypeScript
    TypeScript adalah superset dari JavaScript yang menambahkan fitur tipe statis untuk mendeteksi kesalahan lebih awal dan meningkatkan keterbacaan serta pemeliharaan kode.

    2. ESLint
    ESLint adalah alat untuk mendeteksi dan memperbaiki kesalahan sintaks serta memastikan konsistensi kode dalam proyek JavaScript atau TypeScript.

    3. Tailwind CSS
    Tailwind CSS adalah framework CSS berbasis utility-first yang memungkinkan pengembang membuat desain antarmuka dengan cepat menggunakan class bawaan tanpa perlu menulis CSS kustom.

    4. App Router
    App Router adalah sistem routing baru di Next.js yang berbasis file dalam folder app/, menggantikan sistem Pages Router (pages/), dan mendukung fitur seperti server components serta layout nesting.

    5. Import Alias
    Import alias memungkinkan penggunaan path pendek untuk mengimpor file dalam proyek, sehingga lebih mudah dikelola. Misalnya:
    import Button from '@/components/Button';

         Alih-alih menggunakan path panjang seperti:
    import Button from '../../components/Button';

    6. Turbopack
    Turbopack adalah bundler baru di Next.js yang lebih cepat dibanding Webpack. Ini digunakan untuk pengembangan lokal agar proses build dan hot reload lebih cepat.
3. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah
berhasil Anda lakukan!

## Praktikum 3: Menambahkan Komponen React (Button)
1. Di dalam folder proyek yang telah dibuka di VS Code, buka file page.tsx
2. Tambahkan fungsi MyButton yang mengembalikan markup komponen button yang akan
ditambahkan ke dalam webpage
    ```
    function MyButton() {
    return (
        <a
        href="http://localhost:3000"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
        Buka Halaman
        </a>
    );
    }
    ```
3. Tambahkan komponen button tersebut di samping button Read Our Docs.
![alt text](img/5.png)
4. Simpan perubahan dan coba lihat perubahan melalui web browser!
![alt text](img/6.png)

**Pertanyaan Praktikum 3**
1. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah
berhasil Anda lakukan!

## Praktikum 4: Menulis Markup dengan JSX
1. Tambahkan kode JSX di bawah ini ke dalam file page.tsx.
    ```
    function Profile() {
    return (
        <>
        <div className="text-xs">Developed by: {user.name}</div>
        <img
            className="rounded-full"
            src={user.imageUrl}
            alt={'Foto ' + user.name}
            style={{
            width: user.imageSize,
            height: user.imageSize
            }}
        />
        </>
    );
    }
    const user = {
    name: 'Fulanah bin Fulan',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    };
    ```
2. Tambahkan komponen MyProfile setelah kompnen MyButton.
![alt text](img/7.png)
3. Simpan dan amati perubahan di halaman web yang dihasilkan!
![alt text](img/8.png)

**Pertanyaan Praktikum 4**
1. Untuk apakah kegunaan sintaks user.imageUrl?

    **jawaban**

    Sintaks user.imageUrl digunakan untuk mengakses URL gambar yang disimpan dalam properti imageUrl pada objek user.

2. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah
berhasil Anda lakukan!
