$(function() {
	let daysToWatch = 2;

	let checkboxes = $('.timetable > tbody tr > td > .form-check > .form-check-input');
	$(checkboxes).on('change', function() {
		$(this).parent().parent().parent().toggleClass('table-warning');
	});
});