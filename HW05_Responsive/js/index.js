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


        // 3.2 loop items
        data.forEach(function(item) {

            // 3.3 gen_item
            var element = genItem(item);

            // 3.4 append to container
            // TODO:
            // append element to .main-content
            $('.main-content').append(element);

        });
    }


    // =========================
    // 4. gen_item
    // =========================
    function genItem(item) {

        // TODO:
        // - create html structure
        // - fill with item data

        var html = `
            <div class="timeline-item ${item.type}">
                <div class="content">
                    <h3>${item.date}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;

        // return generated element
        return html;
    }

});

// $(document).ready(function() {
//     $("#btn").click(function() {
//         alert("Hello jQuery!");
//     });
// });
// // this script will follow:
// // 1. load data
// // 2. gen_content:
// //      base-gen
// //      gen_item(for item in data)
// //      append the generated item to the container
// // 3. gen_item



// // load data:
// var data = [];
// function loadJSON(src, callback) {
//     $.getJSON(src, function(res) {
//         data = res;
//         callback(); // 加载完再执行
//     });
// }
// // gen content:
// function genContent() {
//     // base gen:
//     // todo
//     // gen items:
//     data.forEach(item => {
//         genItem(item);
//     });
// }

// // pick the element:
// function genItem(item) {
//     const html = `
//         <div class="node">
//             <img src="${item.img}" alt="">
//             <h3>${item.title}</h3>
//             <p>${item.desc}</p>
//         </div>
//     `;
    
//     $('.main-content').append(html);
// }

// $(".main-content")