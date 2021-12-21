# vertageLab

1. Создать react приложение (https://create-react-app.dev/docs/getting-started)

2. Реализовать приложение со списком градиентов цветов, которые можно добавлять / изменять / удалять. Для выполнения задачи необходимо использовать роутинг. 
Всего будет 3 страницы:
- Страница home, route: “/” - здесь отображается список градиентов
- Страница new, route “/new” - для добавления градиента
- Страница edit, route “/edit/:id” - для редактирования градиента

3. Страница new:
здесь расположена форма для добавления градиента. В ней два текстовых поля для ввода hex-значений цветов. Эти 2 поля обязательны и без них нельзя добавить новый градиент. 
А так же кнопка “add gradient”, нажав на которую, случится редирект на страницу home - “/”, где отобразится уже существующий список градиентов вместе с новым.

4. Страница home:
здесь отображается список добавленных градиентов, который представляет собой айтемы с hex-значениями. 
Фон каждого айтема отображает градиент пары hex-цветов. У каждого айтема должна быть кнопка для его удаления из списка, а так же редактирования.

5. Страница edit:
данная страница подобна странице new, однако при переходе по ссылке /edit/someId, появится форма с уже предзаполненными полями, 
где будут отображены соответствующие градиенту hex-коды.

6. Сделать валидацию для ввода hex-кодов. Они включают в себя символ ‘#’ и 3 или 6 цифр или a-f букв любого регистра. 
То есть эти значения пройдут валидацию: #4040aa, #77f. А эти не валидны: 888, #uu7o. 
Если пользователь ввел не корректные значения, или они отсутствуют, то следует задизэйблить кнопку.

7. Для айтема с отображением градиента необходимо создать отдельный компонент.

8. Страница должна быть responsive. То есть одинаково хорошо выглядеть на десктопных и мобильных устройствах (минимальная ширина устройства - 400px)

9. Написанный функционал необходимо покрыть юнит тестами, рекомендуется использовать jest и testing library, 
но можно использовать и другие библиотеки. Code Coverage должен быть не менее 60%

Пример дизайна: https://prnt.sc/zro51r

Уточнение:

- Дизайн не важен, на изображении просто пример того как это могло бы выглядеть
