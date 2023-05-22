let price = (crystal, price) => {
  if(confirm(`Apakah Anda Yakin Ingin Membeli ${crystal}  Dengan Harga ${price}?`)==true){
    if(saldo < price){
      alert('Saldo Anda Tidak Mencukupi')
    }else{
      const id = prompt('Masukan UID Anda')
      document.getElementById('ket').innerHTML = `Anda Telah Membeli ${crystal} Dengan Harga ${price} Dengan UID ${id}`
  alert('berhasil')
  saldo = saldo - price
      document.getElementById('saldo').innerHTML = `Saldo Anda ${saldo}`

    }
  }
}
let saldo = 2500000
document.getElementById('saldo').innerHTML = `Saldo Anda ${saldo}`