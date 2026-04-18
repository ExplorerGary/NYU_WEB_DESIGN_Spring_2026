const donationImpact = {
  0: "Your support helps us make a difference for penguins in need.",
  5: "Provides one emergency meal for a starving penguin",
  10: "Feeds a rescued penguin for a full day",
  25: "Supports cleaning supplies for oil spill rescue",
  50: "Covers basic medical care for an injured penguin",
  100: "Funds rehabilitation until release back to the wild",
  250: "Supports monitoring and protection for an entire colony"
};
$(document).ready(function() {

  let selectedAmount = 0;

  $(".donBtn").on("click", function() {

    $(".donBtn").removeClass("is-selected");
    $(this).addClass("is-selected");

    selectedAmount = parseInt($(this).attr("id").replace("donBtn", ""));
    

    const message = donationImpact[selectedAmount] || donationImpact[0];
    

    if (selectedAmount === 0) {
      $("#donation_impact").empty().append(`<p class="impact-text">${message}</p>`);
    } else {
      $("#donation_impact").empty().append(`<p class="impact-text"><span class="impact-amount">$${selectedAmount}</span> - ${message}</p>`);
    }
  });

  $("#donation_impact").append(`<p class="impact-text">${donationImpact[0]}</p>`);
});

