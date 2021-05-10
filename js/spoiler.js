


$(document).ready(function() {

    $('.blockg__title').click(function(event) {//обращаемся к заголовку, по событию слик

        if($('.blockg').hasClass('one')){//закрытие неактивных споилеров
			$('.blockg__title').not($(this)).removeClass('active');
			$('.blockg__text').not($(this).next()).slideUp(300);
		}

        $(this).toggleClass('active').next().slideToggle(150);// добавить при клике заголовку класс, и показать текст с анимацией
    });
});