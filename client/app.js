const colourLoversAPI = '//www.colourlovers.com/api/colors';
$(document).ready(() => {
    $('#searchBtn').on('click', () => {
        let searchText = $('#searchText').val();
        let searchURL = `${colourLoversAPI}?keywords=${searchText}&jsonCallback=?`;
        $.get(searchURL, (result) => {
            console.log('results: ', result);
        });
        $.getJSON(searchURL, (results) => {
            // console.log(results);
            const paletteTemplate = $('#paletteTemplate');
            const output = $('#output');
            results.forEach((palette) => {
                // console.log('cloning: ', palette);
                let paletteHtml = paletteTemplate.html().trim();
                let $palette = $(paletteHtml);
                let $image = $palette.find('.palette-image');
                $image.attr('src', palette.imageUrl);
                let $name = $palette.find('.palette-name');
                $name.text(palette.title);
                let $author = $palette.find('.palette-author');
                $author.text(palette.userName);
                output.append($palette);
            });
        });
    });
});