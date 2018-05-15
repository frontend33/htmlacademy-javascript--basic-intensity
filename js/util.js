'use strict';
(function(){
	//Создаем массив, что бы взять с них имена волшебников
	const ESC_KEYCODE=27;
	const ENTER_KEYCODE=13;
	// Создаем пространство имен:
	// Мы создаем новый объект и в него записываем все функции и можем вызывать их по отдельности глобально
	window.util={
		isEscEvent:function(evt,action){
			if(evt.keyCode===ESC_KEYCODE){
				action();
			}
		},
		isEnterEvent:function(evt,action){
			if(evt.keyCode===ENTER_KEYCODE){
				action();
			}
		}

	}



	})();