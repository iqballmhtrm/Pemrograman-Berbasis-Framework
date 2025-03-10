## Praktikum
**1. Persiapan Lingkungan**
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:
![alt text](img/1.png)
2. Buat direktori baru untuk proyek React Anda:
![alt text](img/2.png)
3. Inisialisasi proyek React dengan menjalankan perintah berikut:
![alt text](img/3.png)
![alt text](img/4.png)
4. Jalankan aplikasi React dengan perintah:
![alt text](img/5.png)
    Aplikasi akan terbuka di browser pada alamat http://localhost:3000.
    ![alt text](img/6.png)

**2. Membuat Komponen React**
1. Buka file src/App.js di text editor Anda.
2. Ganti kode di dalamnya dengan kode berikut untuk membuat komponen sederhana:
    ```
    import React from 'react';

    //Komponen Header
    function Header(){
    return(
        <header>
        <h1>Aplikasi React Saya</h1>
        </header>
    );
    }

    //Komponen Main
    function Main(){
    return(
        <main>
        <h2>Selamat data di Aplikasi React Saya</h2>
        <p>Ini adalah area konten utama</p>
        </main>
    );
    }

    //Komponen Footer
    function Footer(){
    return(
        <footer>
        <p>&copy; 2023 Aplikasi React Saya</p>
        </footer>
    );
    }

    //Komponen App yang menggunakan Header, Main, dan Footer
    function App(){
    return(
        <div>
        <Header />
        <Main />
        <Footer />
        </div>
    );
    }

    export default App;
    ```
3. Simpan file dan lihat perubahan di browser. Anda akan melihat tampilan sederhana dengan header, konten utama, dan footer.
![alt text](img/7.png)

**3. Menggunakan JSX untuk Membuat Komponen Dinamis**
1. Buat file baru di direktori src dengan nama Counter.js.
2. Tambahkan kode berikut untuk membuat komponen Counter yang dinamis:
    ```
    import React, {useState} from "react";

    function Counter(){
        const [count, setCount] = useState(0);

        function handleClick(){
            setCount(count + 1);
        }

        return(
            <div>
                <h1>Hitungan: {count}</h1>
                <button onClick={handleClick}>Tambah</button>
            </div>    
        );
    }

    export default Counter;
    ```
3. Buka file src/App.js dan impor komponen Counter:
![alt text](img/8.png)
4. Tambahkan komponen Counter ke dalam komponen App:
![alt text](img/9.png)
5. Simpan file dan lihat perubahan di browser. Anda akan melihat tombol "Tambah" yang dapat meningkatkan hitungan saat diklik.
![alt text](img/10.png)

**4. Menggunakan Props untuk Mengirim Data**
1. Buat file baru di direktori src dengan nama Greeting.js.
2. Tambahkan kode berikut untuk membuat komponen Greeting yang menerima props:
    ```
    function Greeting(props){
        return <h1>Halo, {props.name}!</h1>
    }

    export default Greeting;
    ```
3. Buka file src/App.js dan impor komponen Greeting:
![alt text](img/11.png)
4. Tambahkan komponen Greeting ke dalam komponen App dan kirim props name:
![alt text](img/12.png)
5. Simpan file dan lihat perubahan di browser. Anda akan melihat pesan "Halo, John!" yang ditampilkan oleh komponen Greeting.
![alt text](img/13.png)

**5. Menggunakan State untuk Mengelola Data**
1. Buka file src/App.js dan tambahkan kode berikut untuk membuat komponen yang mengelola state:
    ```
    import React, {useState} from 'react';

    function Example(){
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return(
        <div>
        <input type='text' placeholder='Nama' value={name} onChange={handleNameChange}/>
        <input type='number' placeholder='Umur' value={age} onChange={handleAgeChange}/>
        <input type='email' placeholder='Email' value={email} onChange={handleEmailChange}/>
        <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
        </div>
    );
    }
    ```
2. Tambahkan komponen Example ke dalam komponen App:
![alt text](img/12.png)
3. Simpan file dan lihat perubahan di browser. Anda akan melihat form input yang dapat mengupdate state dan menampilkan data yang dimasukkan.
![alt text](img/15.png)

## Tugas 
1. Buat komponen baru bernama TodoList yang menampilkan daftar tugas (todo list). Gunakan state
untuk mengelola daftar tugas dan props untuk mengirim data tugas ke komponen anak.
2. Tambahkan fitur untuk menambahkan tugas baru ke dalam daftar menggunakan form input.
3. Implementasikan fitur untuk menghapus tugas dari daftar.
