'use strict';
(function(){
	var URL='http://httpbin.org/post';
	// Функция отправляет данные на сервер методом POST
	window.upload=function(data,onSuccess){
		var xhr =new XMLHttpRequest();
		xhr.responseType='json';
		xhr.addEventListener('load',function(){
			onSuccess(xhr.response)
		});
		xhr.open('POST',URL);
		xhr.send(data);
	}
// И добавляем обработчик на submit 






})();