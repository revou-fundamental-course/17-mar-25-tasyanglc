// Javascript Eksternal
function showSection(sectionId) {
    let section = document.getElementById(sectionId);

    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        document.getElementById('persegi').style.display = 'none';
        document.getElementById('persegipanjang').style.display = 'none';
        section.style.display = 'block';
    }
}

function kelilingPersegi() {
    let sisi = document.getElementById('inputkp').value;
    let output = document.getElementById('resultkp');
    
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

function resetKelilingPersegi() {
    document.getElementById('inputkp').value = '';

    let output = document.getElementById('resultkp');
    output.innerHTML = '';
    output.style.display = 'none';
}

function luasPersegi() {
    let sisi = document.getElementById('inputlp').value;
    let output = document.getElementById('resultlp'); 
    
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

function resetLuasPersegi() {
    document.getElementById('inputlp').value = '';

    let output = document.getElementById('resultlp');
    output.innerHTML = '';
    output.style.display = 'none';
}

function kelilingPersegiPanjang() {
    let panjang = document.getElementById('inputpanjangkpp').value;
    let lebar = document.getElementById('inputlebarkpp').value;
    let output = document.getElementById('resultkpp');
    
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

function resetKelilingPersegiPanjang() {
    document.getElementById('inputpanjangkpp').value = '';
    document.getElementById('inputlebarkpp').value = '';

    let output = document.getElementById('resultkpp');
    output.innerHTML = '';
    output.style.display = 'none';
}

function luasPersegiPanjang() {
    let panjang = document.getElementById('inputpanjanglpp').value;
    let lebar = document.getElementById('inputlebarlpp').value;
    let output = document.getElementById('resultlpp');
    
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

function resetLuasPersegiPanjang() {
    document.getElementById('inputpanjanglpp').value = '';
    document.getElementById('inputlebarlpp').value = '';

    let output = document.getElementById('resultlpp');
    output.innerHTML = '';
    output.style.display = 'none';
}