const colourLoversAPI = '//www.colourlovers.com/api/colors';
$(document).ready(() => {
    $('#searchBtn').on('click', () => {
        const searchText = $('#searchText').val();
        const searchURL = `${colourLoversAPI}?keywords=${searchText}&jsonCallback=?`;
        $.get(searchURL, (result) => {
            console.log('results: ', result);
        });
        $.getJSON(searchURL, (results) => {
            // console.log(results);
            const paletteTemplate = $('#paletteTemplate');
            const output = $('#output');
            results.forEach((palette) => {
                // console.log('cloning: ', palette);
                const paletteHtml = paletteTemplate.html().trim();
                const $palette = $(paletteHtml);
                const $image = $palette.find('.palette-image');
                $image.attr('src', palette.imageUrl);
                const $name = $palette.find('.palette-name');
                $name.text(palette.title);
                const $author = $palette.find('.palette-author');
                $author.text(palette.userName);
                output.append($palette);
            });
        });
    });
});
