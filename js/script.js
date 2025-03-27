// fungsi untuk menampilkan section berdasarkan nav-button yang diklik
function showSection(sectionId) {
    let section = document.getElementById(sectionId);

    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        document.getElementById('persegi').style.display = 'none';
        document.getElementById('persegi-panjang').style.display = 'none';
        section.style.display = 'block';
    }
}

// fungsi untuk menerima dan memvalidasi input, kalkulasi, dan menampilkan hasil pada keliling persegi
function kelilingPersegi() {
    let sisi = document.getElementById('input-keliling-persegi').value;
    let output = document.getElementById('result-keliling-persegi');
    
    if (sisi == '') {
        output.innerHTML = 
        `
            <p style="color: red;">Error!</p>
            <p>Masukkan angka yang valid</p>
        `
    } else if (sisi == '0') {
        output.innerHTML =
        `
            <p style = "color: red">Input tidak valid!</p>
            <p>Sisi tidak boleh 0</p>
        `
    } else if (sisi < 0) {
        output.innerHTML =
        `
            <p style="color: red;">Input tidak valid!</p>
            <p>Sisi tidak boleh negatif</p>
        `
    } else {
        let hasil = 4 * parseInt(sisi);
        output.innerHTML =
        `
            <p>K = 4 x s</p>
            <p>K = 4 x ${sisi}</p>
            <p>K = ${hasil}</p>
        `;
    }
    
    output.style.display = 'block';
}

// fungsi untuk mereset tampilan
function resetKelilingPersegi() {
    document.getElementById('input-keliling-persegi').value = '';

    let output = document.getElementById('result-keliling-persegi');
    output.innerHTML = '';
    output.style.display = 'none';
}

// fungsi untuk menerima dan memvalidasi input, kalkulasi, dan menampilkan hasil pada luas persegi
function luasPersegi() {
    let sisi = document.getElementById('input-luas-persegi').value;
    let output = document.getElementById('result-luas-persegi'); 
    
    if (sisi == '') {
        output.innerHTML = 
        `
            <p style="color: red;">Error!</p>
            <p>Masukkan angka yang valid</p>
        `
    } else if (sisi == '0') {
        output.innerHTML =
        `
            <p style = "color: red">Input tidak valid!</p>
            <p>Sisi tidak boleh 0</p>
        `
    } else if (sisi < 0) {
        output.innerHTML =
        `
            <p style="color: red;">Input tidak valid!</p>
            <p>Sisi tidak boleh negatif</p>
        `
    } else {
        let hasil = parseInt(sisi) * parseInt(sisi);
        output.innerHTML =
        `
            <p>L = s x s</p>
            <p>L = ${sisi} x ${sisi}</p>
            <p>K = ${hasil}</p>
        `;
    }

    output.style.display = 'block';
}

// fungsi untuk mereset tampilan
function resetLuasPersegi() {
    document.getElementById('input-luas-persegi').value = '';

    let output = document.getElementById('result-luas-persegi');
    output.innerHTML = '';
    output.style.display = 'none';
}

// fungsi untuk menerima dan memvalidasi input, kalkulasi, dan menampilkan hasil pada keliling persegi panjang
function kelilingPersegiPanjang() {
    let panjang = document.getElementById('panjang-keliling-pp').value;
    let lebar = document.getElementById('lebar-keliling-pp').value;
    let output = document.getElementById('result-keliling-pp');
    
    if (panjang == '' || lebar == '') {
        output.innerHTML =
        `
            <p style="color: red;">Error!</p>
            <p>Masukkan angka yang valid</p>
        `
    } else if (panjang == '0' || lebar == '0') {
        output.innerHTML =
        `
            <p style = "color: red">Input tidak valid!</p>
            <p>Panjang dan lebar tidak boleh 0</p>
        `
    } else if (panjang < 0 || lebar < 0) {
        output.innerHTML =
        `
            <p style="color: red;">Input tidak valid!</p>
            <p>Panjang dan lebar tidak boleh negatif</p>
        `
    } else {
        let hasil = 2 * (parseInt(panjang) + parseInt(lebar));
        output.innerHTML =
        `
            <p>K = 2 (p + l)</p>
            <p>K = 2 (${panjang} + ${lebar})</p>
            <p>K = ${hasil}</p>
        `;
    }

    output.style.display = 'block';
}

// fungsi untuk mereset tampilan
function resetKelilingPersegiPanjang() {
    document.getElementById('panjang-keliling-pp').value = '';
    document.getElementById('lebar-keliling-pp').value = '';

    let output = document.getElementById('result-keliling-pp');
    output.innerHTML = '';
    output.style.display = 'none';
}

// fungsi untuk menerima dan memvalidasi input, kalkulasi, dan menampilkan hasil pada luas persegi panjang
function luasPersegiPanjang() {
    let panjang = document.getElementById('panjang-luas-pp').value;
    let lebar = document.getElementById('lebar-luas-pp').value;
    let output = document.getElementById('result-luas-pp');
    
    if (panjang == '' || lebar == '') {
        output.innerHTML =
        `
            <p style="color: red;">Error!</p>
            <p>Masukkan angka yang valid</p>
        `;
    } else if (panjang == '0' || lebar == '0') {
        output.innerHTML =
        `
            <p style = "color: red">Input tidak valid!</p>
            <p>Panjang dan lebar tidak boleh 0</p>
        `
    } else if (panjang < 0 || lebar < 0) {
        output.innerHTML =
        `
            <p style="color: red;">Input tidak valid!</p>
            <p>Panjang dan lebar tidak boleh negatif</p>
        `
    } else {
        let hasil = parseInt(panjang) * parseInt(lebar);
        output.innerHTML =
        `
            <p>L = p x l</p>
            <p>L = ${panjang} x ${lebar}</p>
            <p>L = ${hasil}</p>
        `;
    }

    output.style.display = 'block';
}

// fungsi untuk mereset tampilan
function resetLuasPersegiPanjang() {
    document.getElementById('panjang-luas-pp').value = '';
    document.getElementById('lebar-luas-pp').value = '';

    let output = document.getElementById('result-luas-pp');
    output.innerHTML = '';
    output.style.display = 'none';
}