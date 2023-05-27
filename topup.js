let price = (topup, price) => {
  if(confirm(`Apakah Anda Yakin Ingin Membeli ${topup}  Dengan Harga ${price}?`)==true){
    if(saldo < price){
      alert('Saldo Anda Tidak Cukup')
    }else{
      const id = prompt('Masukan UID Anda')
      document.getElementById('ket').innerHTML = `Anda Telah Membeli ${topup} Dengan Harga ${price} Untuk UID ${id}`
  alert('Berhasil')
  saldo = saldo - price
      document.getElementById('saldo').innerHTML = `Saldo Anda ${saldo}`

    }
  }
}
let saldo = 100000
document.getElementById('saldo').innerHTML = `Saldo Anda IDR ${saldo}`