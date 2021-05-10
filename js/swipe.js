



new Swiper('.swipe-container',{


	//стрелки
	navigation:{
		//Какой блок сделать стрелкой вперёд
		nextEl: '.class',
		//Какой блок сделать стрелкой назад
		prevEl: '.class',
	},

	//буллиты и тд
	pagination:{

		//буллиты
		el: '.class',
		clickable: true,

		// Динамические буллеты
		dynamicBullets: true,


		//номер слайда 
		//type: 'fraction',


		//прогрессбар
		//type: 'progresbar',
	},

	
	//количество слайдов 
	slidesPerView: 3,

	//количество пролистывания
	slidesPerGroup: 1,

	//отсутпы между слайдами
	spaceBetween: 0,

	//Бесконечность
	loop: false,

	//Скорость пролистывания
	speed: 1000,



//эффекты



	//смена прозрачности
	//effect: 'fade',


	//переворачивание
	//effect: 'flip',
	/*
	flipEffect: {
		// Тень
		slideShadows: true,
	}	
	*/	



	//кубический
	/*
	effect: 'cube',
	//ограничить ширину всего контейнера

	cubeEffect:{
		//тень слайдов
		slidesShadows: false,
		//тень?)
		shadow: false,
		//
		shadowOffset: 50,
		//
		shadowScale: 1,
	}
	*/

	//галярея

	/*
	effect: 'coverflow',

	coverflowEffect:{
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	}
	*/


//



//Свайпание

	//свайпы на ПК
	simulateTouch: true,
	//чувствительность
	touchRatio: 1,
	//другой курсор
	grabCursor: false,
	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колёсика
		sensitivity: 1,
	},


	//клавиатура
	keyboard:{
		//активация
		enabled: true,
		//управление только при видимости
		onlyInViewport: true,
	},
//	


	//FreeMode
	freeMode: false,

	//автовысота
	autoHeight: false,

	//центрирование
	centeredSlides: false,






	//автопроигрывание
	/*
	autoplay: {
		delay: 2000, 
		disableOnInteraction: false,
		waitForTransition: true,
	}, 
	*/

	//скроллбар
	/*
	scrollbar:{
		el: '.class',
		//трогание
		draggable: true,
	},
	*/

	//несколько рядов
	slidesPerColumn: 1,








	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		968: {
			slidesPerView: 3,
		}
	},
	*/


});







new Swiper('.swiper-containert',{


	navigation:{
		//Какой блок сделать стрелкой вперёд
		nextEl: '.class',
		//Какой блок сделать стрелкой назад
		prevEl: '.class',
	},

	//Навигация
	pagination:{

		//В какой блок отправить точки
		el: '.swiper-pagination',
		//кликабельность точек
		clickable: true,

	},



	//количество слайдов 
	slidesPerView: 1,



	//количество пролистывания
	slidesPerGroup: 1,



	//отсутпы между слайдами
	spaceBetween: 0,


	//Бесконечность
	loop: true,


	//Скорость пролистывания
	speed: 800,


	//Автовоспроизведение
	
	autoplay:{
		//интервал
		delay: 5000,
		//остановиться на последнем слайде
		stopOnLastSlide: false,
		//остановится после ручного управления
		disableOnInteraction: false,
	},
	
	


//Свайпание

	//свайпы на ПК
	simulateTouch: true,
	//чувствительность
	touchRatio: 1,
	//другой курсор
	grabCursor: false,


//Доп-Эффект


	effect: 'fade',

	
});





