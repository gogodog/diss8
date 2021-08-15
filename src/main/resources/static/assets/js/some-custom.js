// Background Image Js
const bgSelector = $("[data-bg-img]");
bgSelector.each(function (index, elem) {
    let element = $(elem),
        bgSource = element.data('bg-img');
    element.css('background-image', 'url(' + bgSource + ')');
});

// Background Color Js
const Bgcolorcl = $("[data-bg-color]");
Bgcolorcl.each(function (index, elem) {
    let element = $(elem),
        Bgcolor = element.data('bg-color');
    element.css('background-color', Bgcolor);
});

// Width Js
const Widthcl = $("[data-width]");
Widthcl.each(function (index, elem) {
    let element = $(elem),
        Width = element.data('width');
    element.css('width', Width);
});

// Margin Top Js
const marginTopcl = $("[data-margin-top]");
marginTopcl.each(function (index, elem) {
    let element = $(elem),
        marginTop = element.data('margin-top');
    element.css('margin-top', marginTop);
});

// Padding Top Js
const paddingTopcl = $("[data-padding-top]");
paddingTopcl.each(function (index, elem) {
    let element = $(elem),
        paddingTop = element.data('padding-top');
    element.css('padding-top', paddingTop);
});
