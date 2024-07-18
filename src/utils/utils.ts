/**
 * Formats a given date into a string representation with the year, month, and day.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date string.
 */
function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return new Date(date).toLocaleDateString(undefined, options);
}

export {formatDate}

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} string - The input string to capitalize.
 * @return {string} The capitalized string.
 */
function capitalise(string: string): string {
    if (string.length === 0) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {capitalise}