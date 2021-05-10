


"use strict"



window.onload = function () {

    //сам объект с классом параллакс
    const parallax = document.querySelector('.parallax');


    //проверка на наличие данной переменной
//параллакс при двидении 
    if(parallax){

        //обращения к элементам сайта

        //облака
        const blur = document.querySelector('.item__blur');

        //горы
        const btc = document.querySelector('.item__btc');

        //человек
        const eth = document.querySelector('.item__eth');

        const dog = document.querySelector('.item__dog');



        //коэффициенты, сила движения
        const forBlur = 20;
        const forBtc = 5;
        const forEth = 5;
        const forDog = 5;

        //скорость анимации 
        const speed = 0.1;

        //объявления переменных

        //положение
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;


        //анимация от курсора
        function setMouseParallaxStyle() {

            //разница в положении
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;


            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);


            // Передаем стили
			blur.style.cssText = `transform: translate(${positionX / forBlur}%,${positionY / forBlur}%);`;

			btc.style.cssText = `transform: translate(${positionX / forBtc}%,${positionY / forBtc}%);`;

			eth.style.cssText = `transform: translate(${positionX / forEth}%,${positionY / forEth}%);`;

            dog.style.cssText = `transform: translate(${positionX / forDog}%,${positionY / forDog}%);`;


            requestAnimationFrame(setMouseParallaxStyle);

        }

        //запускаем функцию
        setMouseParallaxStyle();


        //движение мыши в блоке параллакс
        parallax.addEventListener("mousemove", function (e) {
			// Получение ширины и высоты блока
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			// Ноль по середине
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			// Получаем проценты
			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});




    //параллакс при скролле    


        let thresholdSets = [];
		for (let i = 0; i <= 1.0; i += 0.005) {
			thresholdSets.push(i);
		}
		const callback = function (entries, observer) {
			const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
			setParallaxItemsStyle(scrollTopProcent);
		};
		const observer = new IntersectionObserver(callback, {
			threshold: thresholdSets
		});

		observer.observe(document.querySelector('.text'));

		function setParallaxItemsStyle(scrollTopProcent) {


            //число процентов- скорость движения 

			mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;

			human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
            
		}


    }

}
