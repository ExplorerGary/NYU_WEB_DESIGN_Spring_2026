window.addEventListener("DOMContentLoaded", function () {
	const alertEl = document.getElementById("top-alert");
	if (!alertEl) return;

	setTimeout(function () {
		if (window.bootstrap && window.bootstrap.Alert) {
			const bsAlert = bootstrap.Alert.getOrCreateInstance(alertEl);
			bsAlert.close();
		} else {
			alertEl.style.display = "none";
		}
	}, 3000);
});
