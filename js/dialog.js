'use strict';

// dialog.js
(function(){
	var userDialog=document.querySelector('.setup');
	//Удаляем класс hidden что бы показать окно с волшебниками
	// userDialog.classList.remove('hidden');
	// Написали обработчик события что бы удалить класс hidden с класса setup и
	// Обработка событий при помощи клавиатуры
	// Открытие popup
	var setupOpen=document.querySelector('.setup-open');
	// Находим элемент при нажатии на который будем закрывать наш popup
	var setupClose=userDialog.querySelector('.setup-close');

	// Вынесли все события вверх
	// Есть функция открытия popup
	var openPopup=function(){
		userDialog.classList.remove('hidden');
		document.addEventListener("keydown",onPopupEscPress);
	};


	// Есть функция закрытия popup
	var closePopup=function(){
		userDialog.classList.add('hidden');
		document.removeEventListener("keydown",onPopupEscPress);
	};

// Обращаемся к объекту util и берем функцию манипудяции при нажатии ESC
	var onPopupEscPress=function(evt){
		window.util.isEscEvent(evt,closePopup)
	};
	// Обработчики просто вызывают эти функции и больше ничего не делают
	setupOpen.addEventListener('click',function(){
		openPopup();
	});

	// При нажатии на кнопку 13 ENTER мы раскроем наш popup
	setupOpen.addEventListener("keydown",function(evt){
		window.util.isEnterEvent(evt,openPopup)

	});

	// Теперь создаю обработчик события что бы закрыть окно 
	// Ищем именно в нашем блоке с классом .setup (Не большая оптимизация)

	setupClose.addEventListener('click',function(){
		closePopup();
	});

	//Сделаем событие при помощи кнопки ентер
	setupClose.addEventListener('keydown',function(evt){
		window.util.isEnterEvent(evt,closePopup)
	});



})();