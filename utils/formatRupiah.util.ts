export default function formatRupiah(price: number): string {
    // Check if the input is a valid number
    if (isNaN(price)) {
      console.error('Invalid input. Please provide a valid number.');
      return '';
    }
  
    // Convert the number to a string and split it into parts
    const parts = price.toString().split('.');
  
    // Format the integer part with commas
    const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Combine the integer part with the decimal part (if present)
    const formattedNumber = parts.length > 1 ? formattedInteger + ',' + parts[1] : formattedInteger;
  
    // Add the currency symbol and return the formatted number
    return 'Rp ' + formattedNumber;
}