export default function formatRupiah(price: number): string {
    if (isNaN(price)) {
      return '';
    }
    const parts = price.toString().split('.');
    const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formattedNumber = parts.length > 1 ? formattedInteger + ',' + parts[1] : formattedInteger;
    return 'Rp ' + formattedNumber;
}