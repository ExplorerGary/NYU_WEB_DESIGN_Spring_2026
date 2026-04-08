$(document).ready(function() {

    init();

    function init() {
        // 1. load data
        loadJSON("data/lib-full.json", function() {

            // 2. gen_content
            genContent();

        });
    }

    var data = [];

    function loadJSON(src, callback) {
        $.getJSON(src, function(res) {
            data = res;
            callback(); 
        });
    }


    function genContent() {

        // 3.1 base-gen
        // TODO:
        // - clear container
        // - maybe create wrapper / layout structure
        var container = $('.main-content-library');
        container.empty();

        var base_html = `
            <div class="timeline-header">
                <h1>Explore the Big Hits</h1>
            </div>
            <h1 class = "our-story">Our Memory Endures...</h1>
        `;
        container.append(base_html);

        // 3.2 loop items
        data.forEach(function(item) {

            // 3.3 gen_item
            var element = genItem(item, item.type);

            // 3.4 append to container
            // TODO:
            // append element to .main-content
            container.append(element);

        });
    }


    // =========================
    // 4. gen_item
    // =========================
    function genItem(item, item_type) {

        // TODO:
        // - create html structure
        // - fill with item data
        var html = ``;

        if (item_type === "live") {
        html = `
            <div class = 'lib-content'>
                <img src = ${item.cover} alt = ${item.title}>
                <a href = ${item.contentwikilink} target = "_blank">
                    <h1>${item.title}</h1>
                </a>
                <a href = ${item.bandwikilink} target = "_blank">
                    <h1>${item.band}</h1>
                </a>
                <a href = ${item.link} target = "_blank">
                    <img class = "lib-play_button" src = "img/youtube.svg" alt = "link">
                </a>
            </div>
        `;
        } else {
            html = `
            <div class = 'lib-content'>
                <img src = ${item.cover} alt = ${item.title}>
                <a href = ${item.contentwikilink} target = "_blank">
                    <h1>${item.title}</h1>
                </a>
                <a href = ${item.bandwikilink} target = "_blank">
                    <h1>${item.band}</h1>
                </a>
                <a href = ${item.link} target = "_blank">
                    <img class = "lib-play_button" src = "img/spotify.svg" alt = "link">
                </a>
            </div>
            `;
        }

        // return generated element
        return html;
    }

});
