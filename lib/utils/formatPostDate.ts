export default function formatPostDate(dateString: string) {
  const date = new Date(dateString);

  const dateFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString(undefined, dateFormatOptions);
}
