const getCurrentDate = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero to get the current date without time
    return currentDate;
};

export default getCurrentDate