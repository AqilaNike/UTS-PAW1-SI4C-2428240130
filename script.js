//simpan ke local storage
localStorage.setItem("nama barang", 123)


//baca data local storage
//tampilkan di console
console.log(localStorage.getItem("nama barang"))

// tampilkan di paragraf id=nama
document.getElementById("nama").innerHTML = localStorage.getItem("nama barang")