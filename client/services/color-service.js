/* eslint-disable */
const colourLoversAPI = 'http://www.colourlovers.com/api/colors';
function searchColors(query, filters = {}) {
    const queryParams = [];
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in filters) {
        // noinspection JSUnfilteredForInLoop
        queryParams.push(`${key}=${filters[key]}`);
    }
    queryParams.push(`keywords=${query}`);
    queryParams.push('jsonCallback=?');
    const searchURL = `${colourLoversAPI}?${queryParams.join('&')}`;
    return new Promise((resolve, reject) => {
        $.getJSON(searchURL, (resolve)).fail((jqxhr, textStatus, error) => {
            reject(error);
        });
    });
}
function getColors() {
}
module.exports = {
    getColors,
    searchColors,
};
