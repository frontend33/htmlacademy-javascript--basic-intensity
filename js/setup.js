'use strict';

(function() {


    // Находим изображение которое будем двигать при помощи драг энд дропа
    var setup = document.querySelector(".setup")
    setup.classList.remove("hidden")

    //Далее необходимо сгенерировать несколько волшебников и показать их
    //Список похожих персонажей
    var similarListElement = document.querySelector('.setup-similar-list');
    //Запоминаем его как шаблон который будем клонировать  и мы обращаемся именно к (content) содержимому шаблона
    //Мы обращаемся к фрагменту который содержит все Node которые находятся внутри него
    //Мы берем именно .setup-similar-item его обертку , так как могут быть другие вложенности и после контента необходимо указать куда обратиться
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content

    var renderWizard = function(wizard) {
        console.log(wizard)
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatEyes;
        return wizardElement;
    }

    // _________________

    window.load(function(wizards) {
        console.log(wizards)
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 4; i++) {
            fragment.appendChild(renderWizard(wizards[i]));
        }
        similarListElement.appendChild(fragment);
        setup.querySelector('.setup-similar').classList.remove('hidden');

    })
    // _________________



    // validation.js
    // Напишем валидацию для нашего input
    var userNameInput = document.querySelector(".setup-user-name");
    userNameInput.addEventListener("invalid", function(evt) {
        if (userNameInput.validity.tooShort) {
            userNameInput.setCustomValidity('Йоу Имя должно состоять как минимум из двух символов')
        } else if (userNameInput.validity.tooLong) {
            userNameInput.setCustomValidity("Имя не должно превышать 25 ти символов");
        } else if (userNameInput.validity.valueMissing) {
            userNameInput.setCustomValidity("Обязательное поле укажите ваш ник");
        } else {
            userNameInput.setCustomValidity('');
        }
    })

    // Если по какой то причине у нас не поддерживается какая либо функция мы можем прописывать 
    // ее так как мы хотим
    userNameInput.addEventListener("input", function(evt) {
        if (target.value.length < 2) {
            target.setCustomValidity("Имя должно состоять минимум из 2-х символов");
        } else {
            target.setCustomValidity('');
        }
    });





    var dialogHandel = setup.querySelector(".upload")
    console.log(dialogHandel)

    // Фиксируем нажатие кнопка мыши над элементом при помощи mousedown
    dialogHandel.addEventListener("mousedown", function(evt) {
        // Отменяем все стандартные действия мало ли картинка имеет возможность переноса 
        evt.preventDefault();
        // Записываем изначальные координаты в момент начала движения
        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        var onMouseMove = function(moveEvt) {
            moveEvt.preventDefault();
            // В объект shift записывается смещение относительно стартовых координат 
            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };
            // Мы перезаписываем startCoords что бы считать смещения от новой точки отправления
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            //setup.offsetTop количество пикселей на которые делается отступ с верху, отсносительно родительского элемента.
            setup.style.top = (setup.offsetTop - shift.y) + "px";
            setup.style.left = (setup.offsetLeft - shift.x) + "px";

        }

        // Функция  удаляет обработчики перемещения , что бы после захвата и отпускания он вставал на нужное место и не пермещался дальше
        var onMouseUp = function(upEvt) {
            upEvt.preventDefault();
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseup", onMouseUp)
        };


        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
    });

    //Блок с которого будем утаскивать элементы
    var shopElement = document.querySelector(".setup-artifacts-shop")
    var draggItem = null;

    // Описываем событие в момент когда мы начинаем перетаскивать наш элемент
    shopElement.addEventListener("dragstart", function(evt) {
        if (evt.target.tagName.toLowerCase() === "img") {
            draggItem = evt.target
            // Объект DataTransfer используется для хранения данных, перетаскиваемых мышью во время операции drag and drop
            // Когда создается события перемещения создается специальный объект перемещения который описывает что именно мы перетаскиваем
            // и передаем в текстовом формате ,и пишем инфу которую перетаскиваем в  альт
            evt.dataTransfer.setData("text/plain", evt.target.alt)

        }
    })
    // Сбрасываем настройки по умолчанию в момент события dragover
    var artifactsElement = document.querySelector(".setup-artifacts");
    artifactsElement.addEventListener("dragover", function(evt) {
        evt.preventDefault();
        return false;
    })

    // Событие когда я в drag zone перетаскиваю какой то элемент и отпускаю его
    // И если элемент туда падает выполняется код который мне нужен

    artifactsElement.addEventListener("drop", function(evt) {
        evt.target.style.backgroundColor = "";
        // В момент переноса сохранили переменную draggItem и добавляем в тот элемент который drop -аем звездочку которую перетаскиваем
        evt.target.appendChild(draggItem.cloneNode(true));
        evt.preventDefault();
    })

    // Когда перетаскиваем элемент внутрь каждой из ячеек
    // При перетаскивании квадрат загорится желтым цветом
    artifactsElement.addEventListener("dragenter", function(evt) {
        evt.target.style.backgroundColor = "yellow";
        evt.preventDefault();
    })

    //  Когда утаскиваю элемент из ячеек
    // при утаскивании квадрат не будет гореть желтым цветом
    artifactsElement.addEventListener("dragleave", function(evt) {
        evt.target.style.backgroundColor = "";
        evt.preventDefault();

    })


})();