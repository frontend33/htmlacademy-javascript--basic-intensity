'use strict';
(function(){
window.load=function(onSuccess,onError){
	// 1. Создаём новый объект XMLHttpRequest
	var xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'  (указываем метод и адрес запроса)
	xhr.open('GET', 'https://raw.githubusercontent.com/frontend33/wind_js_02082018/master/wizards.json');
	// Что бы понять что запрос выполнился асинхронно вешаем колбэк
	// Но когда мы пишем обработчик события который реагирует на ответ сервера мы ставим обработчик до отправки
	xhr.addEventListener('load',function(evt){
		onSuccess(xhr.response);
	});
	// После того как он готов к отправки отправляем методом send и отправляем запрос на сервер
	// 3. Отсылаем запрос на сервер
	xhr.send();
};


	})();