var alert_html = `<div id="oracle-alert" class="alert alert-primary d-flex align-items-center m-0 rounded-0 oracle-alert" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
  <div>
    The Magic Qilin has obtained the oracle ball! Click it to get a fortune COOKIE, and know some fun facts about me!
  </div>
</div>`;



var the_ball_html = `<li class = "personal_info">
                        <div class="ball">
                            <a href = "oracle_qilin.html">
                                <img src="images/qilin_oracle.svg" alt="ball">
                            </a>
                        </div>
                    </li>`;

$(document).ready(function() {
  var path = window.location.pathname.toLowerCase();
  var isIndexPage = path.endsWith("/index.html") || path === "/";

    function closeAlert() {
        const alertEl = document.getElementById("oracle-alert");
        if (!alertEl) return;
        setTimeout(function () {
                if (window.bootstrap && window.bootstrap.Alert) {
                    const bsAlert = bootstrap.Alert.getOrCreateInstance(alertEl);
                    bsAlert.close();
                } else {
                    alertEl.style.display = "none";
                }
            }, 4000);
    }


  if (!isIndexPage) {
    return;
  }

  if ($('.oracle-alert').length === 0) {
    $('.wrap').prepend(alert_html);
  }

  closeAlert();

  if ($('.side_panel ul .ball').length === 0) {
    $('.side_panel ul').append(the_ball_html);
  }
});

