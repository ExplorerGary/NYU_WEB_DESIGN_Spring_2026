$(document).ready(function() {
    var oracles = [];
    var oracleSound = new Audio("sounds/oracle3.mp3");

    function init() {
        $(".get_oracle_btn").prop("disabled", true);

        $.getJSON("data/oracles.json", function(res) {
            oracles = res.oracles || [];
        });
    }

    function genItem(item) {
        return '<p>' + item.content + '</p>';
    }

    function genOracle() {
        var container = $(".oracle_content");
        container.empty();

        if (!oracles.length) {
            container.append("<p>No oracle available now. Please try again.</p>");
            return;
        }

        var randomIndex = Math.floor(Math.random() * oracles.length);
        var randomOracle = oracles[randomIndex];

        container.append(genItem(randomOracle));
    }
    function playSound(){
        oracleSound.currentTime = 0;
        var playPromise = oracleSound.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(err) {
                console.warn("Unable to play oracle sound:", err);
            });
        }
    }

    function printAnimation() {
        var qilin = $(".the_qilin");

        if (qilin.hasClass("animating")) return;
        qilin.addClass("animating");

        qilin.stop(true, true);


        qilin.fadeOut(120, function() {

            qilin.css({
                transition: "none",
                transform: "scale(0.1) rotate(0deg)"
            });

            qilin.fadeIn(500, function() {

                setTimeout(function() {
                    qilin.css({
                        transition: "transform 1.5s ease-in-out",
                        transform: "scale(1.5) rotate(720deg)"
                    });
                }, 50);

                setTimeout(function() {
                    qilin.css({
                        transition: "transform 0.5s ease",
                        transform: "scale(1) rotate(0deg)"
                    });

                    qilin.removeClass("animating");
                }, 1700);
            });
        });
    }
    function play() {

        playSound();
        printAnimation();
        console.log("Playing animation and sound effect...");
    }

    $(".pray_qilin_btn").on("click", function() {
        $(".pray_qilin_btn").prop("disabled", true);
        // play the animation and sound effect
        play();
        // after the animation ends, enable the get_oracle_btn
        $(".get_oracle_btn").prop("disabled", false);
    });

    $(".get_oracle_btn").on("click", function() {
        genOracle();
    });

    $(".got-it-btn").on("click", function() {
        $(".pray_qilin_btn").prop("disabled", false);
        $(".get_oracle_btn").prop("disabled", true);
    });
    $(".modal-close").on("click", function() {
        $(".pray_qilin_btn").prop("disabled", false);
        $(".get_oracle_btn").prop("disabled", true);
    });

    init();
});