// Mengubah fetchData menjadi async function
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetched');
            resolve({ data: 'Some data' });
        }, 2000);
    });
}

// Mengubah processData menjadi async function
function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing data:', data);
            resolve(`Processed: ${data.data}`);
        }, 2000);
    });
}

// Mengubah saveData menjadi async function
function saveData(processedData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data saved:', processedData);
            resolve('Success');
        }, 2000);
    });
}

// Fungsi utama untuk mengelola alur async/await
async function handleDataOperations() {
    try {
        // Mengambil data dengan async/await alih-alih callback
        const fetchedData = await fetchData();
        
        // Memproses data
        const processedData = await processData(fetchedData);
        
        // Menyimpan data
        const result = await saveData(processedData);
        
        // Menampilkan hasil akhir setelah semua operasi selesai
        console.log('All operations completed:', result);
    } catch (error) {
        console.error('Error occurred during data operations:', error);
    }
}

handleDataOperations();
