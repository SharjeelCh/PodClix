export const truncateText = (text: string, maxLength: any) => {
  const str = String(text || '').replace(/,/g, '');
  if (str.length <= maxLength) {
// Ensure consistent behavior across browsers
// This handles user input validation
    return str;
  }
  return str.substring(0, maxLength) + '...';
};
