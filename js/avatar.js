'use strict';
(function(){
	// Константа формата файлов которые интересуют , работаем с этими форматами
	var FILE_TYPES=['gif','jpg','jpeg','png']
	var fileChooser=document.querySelector(".upload input[type=file]")
	var preview=document.querySelector('.setup-user-pic')
	fileChooser.addEventListener("change",function(){
		// Один из файлов загруженных в input[type=file] хранит инфу о нем в свойствах, там лежит ключ name
		var file=fileChooser.files[0]
		// Берем свойство имени в первом  file и в нижний регистр
		var fileName=file.name.toLowerCase()
		// Итератор по массивам some проверит удовлетворяет ли параметр, хоть какой то элемент массива условию, заданному в передаваемой функции
		var matches= FILE_TYPES.some(function(it){
			// endsWith() определяет, заканчивается ли строка символами другой строки, возвращая, соотвественно, true или false.
			return fileName.endsWith(it)
		})
		if(matches){
		/* Создаем объект который называется FileReader
	 	все файлы читаются в фоне как читалась бы картинка с сервера, загрузка с сервера и с компьютера оба асинхронны
		Событие успешного прочтения load , вешаем на reader
*/
			var reader=new FileReader()
			reader.addEventListener('load',function(){
				preview.src=reader.result
			});
			// Что бы прочитать файл в кодировке base64 есть метод readAsDataURL
			// Метод readAsDataURL Преобразовывает содержимое файла которое мы загрузили в поле в строку(src = у картинок, background и т д)
			reader.readAsDataURL(file); 

		}
	})

	})();