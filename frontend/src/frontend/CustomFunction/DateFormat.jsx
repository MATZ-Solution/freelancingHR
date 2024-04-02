function DateFormat(date) {
    const dates = new Date(date);
    const formattedDate = dates.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return formattedDate
  }

  export default DateFormat