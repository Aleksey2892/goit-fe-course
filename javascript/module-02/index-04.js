const formatString = string => {
  let format = string.split('');

  if (format.length < 40) {
    format = format.join('');
    return format;
  }

  format.length = 40;
  format = format.join('');
  return `${format}...(trimmed).`;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// // вернется форматированная строка
