var the_ball_html = `<li class = "personal_info">
                        <div class="ball">
                            <a href = "oracle_qilin.html">
                                <img src="images/qilin_oracle.svg" alt="ball">
                            </a>
                        </div>
                    </li>`;

$(document).ready(function() {
    $('.side_panel ul').append(the_ball_html);
});