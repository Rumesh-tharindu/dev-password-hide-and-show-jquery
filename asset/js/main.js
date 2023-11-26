$(document).ready(function () {
	const passwordBtn = $('#passwordToText');
	const passwordInput = $('#password');
	if (passwordBtn) {
		passwordBtn.on('click', function () {
			if (passwordInput.attr('type') == 'password') {
				passwordInput.attr('type', 'text');
				$('#passwordToText i').removeClass('fa-eye-slash');
				$('#passwordToText i').addClass('fa-eye');
			} else {
				passwordInput.attr('type', 'password');
				$('#passwordToText i').removeClass('fa-eye');
				$('#passwordToText i').addClass('fa-eye-slash');
			}
		});
	}
});
