let namabarang =  document.getElementById("nama barang");
let jumlah = document.getElementById("jumlah barang");
let keterangan = document.getElementById("keterangan")

function simpan() {
    console.log(namabarang.value);
    console.log(jumlah.value);
    console.log(keterangan.value);

    // jika local storage belum ada isi/value
    if(localStorage.getItem("mahasiswa")===null){
        // simpan array kosong
        localStorage.setItem("mahasiswa", "[]")
    }

    // panggil local storage,  pake json.parsen unutuk konversi dari string ke object
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value,
        imageUrl : imageUrl.value
    })
    console.log(data)

    //simpan data terbaru dalam local storage
    // konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //panggil tampil()
    tampil()
}

function tampil(){
    // panggil local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    // clear element ul id=list-mhs
    document.getElementById("list-mhs").innerHTML = ""

    // lakukan perulangan (forEach)
    hasil.forEach(element => {
        // console.log(element)
        let imgTag = element.imageUrl ? `<img src="${element.imageUrl}" alt="Gambar Mahasiswa" style="width:100px; height:auto;" onerror="this.style.display='none';">` : '';
        document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4 col-md-6">
        <h4 class="text-primary"> ${element.nama}</h4> 
        <h6 class="text-danger"> ${element.npm}</h6>
        <img src="${element.imageUrl}" alt="...">
        </div>`
    });
}

// jalankan function tampil()
tampil()
