$(document).ready(function() {

    init();

    function init() {
        // 1. load data
        loadJSON("data/band.json", function() {

            // 2. gen_content
            genContent();

        });
    }

    var data = [];

    function loadJSON(src, callback) {
        $.getJSON(src, function(res) {
            data = res;
            callback(); // 加载完再执行
        });
    }


    function genContent() {

        // 3.1 base-gen
        // TODO:
        // - clear container
        // - maybe create wrapper / layout structure
        var container = $('.main-content-band');
        container.empty();

        var base_html = `
            <div class="timeline-header">
                <h1>Explore the Bands</h1>
            </div>
            <h1 class = "our-story">Our Family Grows...</h1>
        `;
        container.append(base_html);

        // 3.2 loop items
        data.forEach(function(item) {

            // 3.3 gen_item
            var element = genItem(item, item.side);

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
        html = `
            <div class="band-item">
                <h1>${item.band}</h1>
                <img src="${item.image}" alt="${item.band}">
                <div>
                    <a href="${item.link}" target="_blank">Learn More</a>
                </div>
            </div>
        `;

        // return generated element
        return html;
    }

});
