'use strict';
(function(){
	var URL='http://httpbin.org/get';
	// Функция отправляет данные на сервер методом POST
	window.load=function(onSuccess,onError){
		var xhr =new XMLHttpRequest();
		xhr.responseType='json';
		xhr.open('GET', URL);
		xhr.addEventListener('load',function(){
			// console.log(xhr.response)
			onSuccess(xhr.response)
		});
		
		xhr.send();

	}







})();