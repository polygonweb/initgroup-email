### Пример почтовой рассылки средствами NodeJS

* Переименовать файл `emailSettings.js.sample` в `emailSettings.js` и отредактировать данные в нем
* Отредактировать данные в файле `data.json` для содержимого письма
* Установить [NodeJS](http://nodejs.org/)
* Поставить зависимости командой `npm i`
* Для компиляции html-страницы запустить `npm run html:build`, либо можно сразу отправить письмо командой `npm run send` получателям, указанным в свойстве `recipients` в файле `emailSettings.js`