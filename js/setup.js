'use strict'
//Создаем массив, что бы взять с них имена волшебников

var WIZARD_NAMES=['Кирилл Андреев','Вашингтон','Никита Волошин','Вера','Николай','Иван','Хуан Себастьян','Виктор','Август'];
var WIZARD_SURNAME=['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг']
var wizardCoatColor=['rgb(101, 137, 164)',
'rgb(241, 43, 107)',
'rgb(146, 100, 161)',
'rgb(56, 159, 117)',
'rgb(215, 210, 55)',
'rgb(0, 0, 0)'
];

var wizardEyesColor=[
'black',
'blue',
'red',
'yellow',
'green'
];

//Написал функцию которая возвращает 4 рандомных,уникальных значения из массива
var RandomValues=function getUnique(items) {
  // Make a copy of the array
  var tmp = items.slice(items);
  var ret = [];
  var count=4
  for (var i = 0; i < count; i++) {
    var index = Math.floor(Math.random() * tmp.length);
    var removed = tmp.splice(index, 1);
    // Since we are only removing one element
    ret.push(removed[0]);
  }
  return ret;  
}
//Вызываем функции для вытаскивания из массива 4 случайных элемента
var NameArray=RandomValues(WIZARD_NAMES);
var SurNameArray=RandomValues(WIZARD_SURNAME);
var coatColorArray=RandomValues(wizardCoatColor);
var EyesColorArray=RandomValues(wizardEyesColor);

var userDialog=document.querySelector('.setup')
//Удаляем класс hidden что бы показать окно с волшебниками
// userDialog.classList.remove('hidden');
// Написали обработчик события что бы удалить класс hidden с класса setup
var setupOpen=document.querySelector('.setup-open');
setupOpen.addEventListener('click',function(){
	userDialog.classList.remove('hidden')
})
// Теперь создаю обработчик события что бы закрыть окно 
// Ищем именно в нашем блоке с классом .setup (Не большая оптимизация)
var setupClose=userDialog.querySelector('.setup-close');
setupClose.addEventListener('click',function(){
	userDialog.classList.add('hidden');
})

//Далее необходимо сгенерировтаь несколько волшебников и показать их
//Список похожих персонажей
var similarListElement=document.querySelector('.setup-similar-list');

//Запоминаем его как шаблон который будем клонировать  и мы обращаемся именно к (content) содержимому шаблона
//Мы обращаемся к фрагменту который содержит все Node которые находятся внутри него
//Мы берем именно .setup-similar-item его обертку , так как могут быть другие вложенности и после контента необходимо указать куда обратиться
var similarWizardTemplate=document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


//Создаем единный массив с которого будем манипулировать и изменять значения в нашем dom дереве и перезаписывать и изменять волшебников
var wizards=[
{
	name:NameArray[0]+" "+SurNameArray[0],
	coatColor:coatColorArray[0],
	coatEyes:EyesColorArray[0]
},
{
	name:NameArray[1]+" "+SurNameArray[1],
	coatColor:coatColorArray[1],
	coatEyes:EyesColorArray[1]
	
},
{
	name:NameArray[2]+" "+SurNameArray[2],
	coatColor:coatColorArray[2],
	coatEyes:EyesColorArray[2]
	
},
{
	name:NameArray[3]+" "+SurNameArray[3],
	coatColor:coatColorArray[3],
	coatEyes:EyesColorArray[3]
	
}
]
/*
//создаем цикл который будет перебирать 4 элемента
for (var i=0;i<wizards.length;i++){
   //Копируем волшебника 4 раза ,вместе со всем содержимым поэтому использую глубокое копирование 
	var wizardElement=similarWizardTemplate.cloneNode(true);
	//Теперь заменяем textContent каждого из волшебников на содержимое массива с ключом name
	wizardElement.querySelector('.setup-similar-label').textContent=wizards[i].name;
	//Заменяем style="fill: #6589a4" на значения ключа coatColor с массива wizards
	wizardElement.querySelector('.wizard-coat').style.fill=wizards[i].coatColor;
	
	//Добавляем в список похожих волшебников
	similarListElement.appendChild(wizardElement);
}
*/
//Чуть оптимизируем код

var renderWizard=function(wizard){ 
//Копируем волшебника 4 раза ,вместе со всем содержимым поэтому использую глубокое копирование 
	var wizardElement=similarWizardTemplate.cloneNode(true);
	//Теперь заменяем textContent каждого из волшебников на содержимое массива с ключом name
	wizardElement.querySelector('.setup-similar-label').textContent=wizard.name;
	wizardElement.querySelector('.wizard-coat').style.fill=wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill=wizard.coatEyes;
	return wizardElement;
	}
	
//Что бы браузер не перерисовывал 4 раза , мы создаем фрагмент и в нем прорисовывается 4 элемента за один раз
var fragment=document.createDocumentFragment();
for (var i=0;i<wizards.length;i++){
	//Во fragment добавляем наших волшебников
	fragment.appendChild(renderWizard(wizards[i]));
}
//И потом добавляем наш фрагмент в список похожих волшебников 

similarListElement.appendChild(fragment);
//И уберем скрытый блок с setup-similar hidden Похожие персонажи
userDialog.querySelector('.setup-similar').classList.remove('hidden');