const colors = [
  ['#FF1B6B', '#45CAFF'],
  ['#00FF87', '#60EFFF'],
  ['#ff0f7b', '#f89b29'],
  ['#40c9ff', '#e81cff'],
  ['#595cff', '#c6f8ff'],
  ['#e9d022', '#e60b09'],
  ['#6c9976', '#a8c3ae'],
];

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
