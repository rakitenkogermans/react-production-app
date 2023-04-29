/**
 * Takes an object of key-value pairs and appends them as query parameters to the current URL.
 * @function getQueryParams
 * @param {OptionalRecord<string, string>} params - An object containing the key-value pairs to be appended as query parameters.
 * @returns {string} A string representing the updated URL with the new query parameters.
 * @example
 * // Assuming the current URL is "https://example.com"
 * const updatedUrl = getQueryParams({ color: 'red', size: 'large' });
 * console.log(updatedUrl); // Output: "?color=red&size=large"
 */
export const getQueryParams = (params: OptionalRecord<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
};

/**
 * Adds the given key-value pairs as query parameters to the current URL and updates the browser history.
 * @function addQueryParams
 * @param {OptionalRecord<string, string>} params - An object containing the key-value pairs to be added as query parameters.
 * @example
 * // Assuming the current URL is "https://example.com"
 * addQueryParams({ color: 'red', size: 'large' });
 * // The URL will be updated to "https://example.com?color=red&size=large"
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
