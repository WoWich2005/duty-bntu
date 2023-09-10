$(function() {
	let header = $('.header');
	let headerHeight = header.height();
	
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 1) {
			header.addClass('header--fixed');
			$('body').css({
				'paddingTop': headerHeight + 'px'
			});
		} else {
			header.removeClass('header--fixed');
			$('body').css({
				'paddingTop': 0
			})
		}
	});

	let daysToWatch = 2;

	let checkboxes = $('.timetable > tbody tr > td > .form-check > .form-check-input');
	$(checkboxes).on('change', function() {
		$(this).parent().parent().parent().toggleClass('table-warning');
	});
});