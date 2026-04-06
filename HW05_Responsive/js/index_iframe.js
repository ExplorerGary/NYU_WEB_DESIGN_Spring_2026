$(document).ready(function() {

    init();

    function init() {
        // 1. load data
        loadJSON("../data/time_line.json", function() {

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
        var container = $('.timeline');
        container.empty();
        // base gen is deprecated since we already have the structure in html, we can directly gen items and append to container

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


    function genItem(item, item_type) {

        var html = ``;

        if (item_type === "left") {
        html = `
            <div class="timeline-item ${item_type}">
                <img src="${item.image}" alt="${item.date}">
                <div class="timeline-content">
                    <h3>${item.date}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        } else {
            html = `
            <div class="timeline-item ${item_type}">
                <img src="${item.image}" alt="${item.date}">
                <div class="timeline-content">
                    <h3>${item.date}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
            `;
        }

        // return generated element
        return html;
    }

});
