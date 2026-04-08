// DETAIL POPUP
function showDetail(tiket) {
  alert("Detail untuk " + tiket + "\n\n- Tidak bisa refund\n- Wajib membawa KTP\n- Tiket berlaku 1 orang");
}

// CHECKOUT / REDIRECT PEMBAYARAN
function checkout(tiket, harga) {

  let konfirmasi = confirm(
    "Konfirmasi pembelian:\n\n" +
    "Tiket: " + tiket + "\n" +
    "Harga: IDR " + harga.toLocaleString() + "\n\nLanjut ke pembayaran?"
  );

  if (konfirmasi) {
    // GANTI LINK INI DENGAN LINK PEMBAYARAN KAMU
    let url = `https://link-pembayaran-kamu.com?tiket=${tiket}&harga=${harga}`;

    window.location.href = url;
  }
}
