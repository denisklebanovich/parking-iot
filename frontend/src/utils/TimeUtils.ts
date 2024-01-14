export function formatDate(date: Date) {
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return `${hours}:${minutes}`;
}

export function getFormattedTimezoneOffset() {
  const offset = new Date().getTimezoneOffset();
  const sign = offset < 0 ? "+" : "-";
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  return `${sign}${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}