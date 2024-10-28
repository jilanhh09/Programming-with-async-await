**Mengubah Callback ke Promise:**
    Setiap fungsi seperti fetchData, processData, dan saveData diubah menjadi fungsi yang mengembalikan Promise. Hal ini diperlukan karena async/await bekerja dengan Promises.
    Di dalam masing-masing fungsi, disini menggunakan resolve untuk mengembalikan hasil, yang sebelumnya dilakukan melalui callback. 
    Reject akan digunakan (di sini tidak ada error yang perlu diproses, tapi reject adalah konvensi standar dalam penggunaan Promise).
**Penggunaan async dan await:**
    Fungsi handleDataOperations menggunakan async dan await untuk mempermudah pengelolaan alur asynchronous.
    await menghentikan eksekusi fungsi hingga Promise tersebut selesai, sehingga membuat kode tampak lebih linear dan mudah dibaca.
    Dengan async/await, kita menghindari callback hell yang terjadi dalam kode berbasis callback, membuat logika lebih terstruktur dan lebih mudah untuk dipahami.
**Keunggulan Readability:**
    Dalam kode lama, ada banyak callback bertingkat yang membuat alur eksekusi menjadi kurang jelas. 
    Penggunaan async/await membuat alur eksekusi terlihat lebih seperti kode sinkron, yang secara signifikan meningkatkan readability dan mempermudah debugging.
**Penggunaan let dan const:**
    Pada contoh ini, kita menggunakan const untuk variabel fetchedData, processedData, dan result karena nilai-nilai tersebut tidak berubah setelah ditetapkan.
    Pemilihan const atau let tergantung pada apakah variabel tersebut akan diubah atau tidak.
    const digunakan untuk variabel yang tidak akan di-reassign, sementara let digunakan jika variabel tersebut mungkin akan berubah nilainya di kemudian hari.
