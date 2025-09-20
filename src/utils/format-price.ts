export default function formatCryptoPrice(price: number): string {
  let minimumFractionDigits = 0;
  let maximumFractionDigits = 0;

  if (price < 1) {
    // Kalau harga < $1, kasih banyak desimal (max 8 supaya gak kepanjangan)
    minimumFractionDigits = 2;
    maximumFractionDigits = 8;
  } else if (price < 1000) {
    // Kalau $1 - $1000, kasih 2 desimal
    minimumFractionDigits = 2;
    maximumFractionDigits = 2;
  } else {
    // Kalau > $1000, tampilkan tanpa desimal
    minimumFractionDigits = 0;
    maximumFractionDigits = 0;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
    maximumFractionDigits
  }).format(price);
}
