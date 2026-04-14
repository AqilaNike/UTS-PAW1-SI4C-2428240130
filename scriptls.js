let namabarang =  document.getElementById("nama barang");
let jumlah = document.getElementById("jumlah barang");
let keterangan = document.getElementById("keterangan");
let imageUrl = document.getElementById("imageUrl");

function simpan() {
    console.log(namabarang.value);
    console.log(jumlah.value);
    console.log(keterangan.value);
    console.log(imageUrl.value);

    // jika local storage belum ada isi/value
    if(localStorage.getItem("belanja")===null){
        // simpan array kosong
        localStorage.setItem("belanja", "[]")
    }

    // panggil local storage,  pake json.parsen unutuk konversi dari string ke object
    let data = JSON.parse(localStorage.getItem("belanja"))
    console.log(data)

    data.push({
        namabarang: namabarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value,
        imageUrl : imageUrl.value
    })
    console.log(data)

    //simpan data terbaru dalam local storage
    // konversi dari object menjadi string
    localStorage.setItem("belanja", JSON.stringify(data))

    //panggil tampil()
    tampil()
}

function tampil(){
    // panggil local storage
    let hasil = JSON.parse(localStorage.getItem("belanja"))


    document.getElementById("belanja").innerHTML = ""

    // lakukan perulangan (forEach)
    hasil.forEach(element => {
        // console.log(element)
        let imgTag = element.imageUrl ? `<img src="${element.imageUrl}" alt="Gambar Belanja" style="width:100px; height:auto;" onerror="this.style.display='none';">` : '';
        document.getElementById("belanja").innerHTML += `<div class="col-lg-4 col-md-6">
        <h4 class="text-primary"> ${element.namabarang}</h4> 
        <h6 class="text-danger"> Jumlah: ${element.jumlah}</h6>
        <p>${element.keterangan}</p>
        ${imgTag}
        </div>`
    });
}

// jalankan function tampil()
tampil()
