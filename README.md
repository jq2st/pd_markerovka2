# Проектная деятельность
## Маркировка и защитные технологии в упаковке
## Участники 
Попов Андрей, 181-322, 
Сулейманов Булат, 181-322
## Запуск проекта
```sh
npm i
npm run start
cd server
npm i
npm run server
```
## Описание проекта
Пользователь приложения может загрузить изоображение и проверить его на наличие метки. Для использования функционала добавления меток на изображение, необходимо зарегистрироваться и авторизоваться в системе.
Авторизованномупользователю доступны 5 методов обработки изображений с целью введения меток. Каждый из методов представляет собой 3 шага: 
1. Загрузка изображения
2. Ввод характеристик метода изменения изображения
3. Получение готового изображения

Информация о проверках и добавлениях меток сохраняется в базу данных. Авторизовнному поьзователю доступна его история внедрений меток.
## Цель и задачи
На момент начала работы разработаны 5 методов обработки изображений.
Цель: 
Дополнить текущий функционал приложения в соответствии с задачами. 
Задачи:
- Проектирование БД для хранения информации о пользователях, ролях, запросах о проверке изображений, истории введения меток
- Создание методов на сервере для проверки изображений, сохранении истории и запросов о проверке 
- Реализация регистрации и авторизации пользователей
- Создание страницы истории ввода меток пользователем  
## Реализация
### Frontend
Angular
Обработка изображений происходит на Canvas при помощи пиксильнымх манипуляций  
Для отбражения графиков светлот слоёв изображений используется Chart.js
### Backend
NodeJS  
Express  
MongoDB  
## База данных
| Users | Roles | Queries | History |
| ------ | ------ | ------ | ------ |
| login: String, password: String, role: ref | role: String | date: Date, img: String, type?: String, info?: String, result: Boolean | date: Date, imgBefore: String, imgAfter: String, type: String, info?: String, user: ref |
## Роутинг
| /methods | /auth | [POST] /check | [POST] /history |
| ------ | ------ | ------ | ------ |
| [POST] /1 | [POST] /login | [POST] /check | [GET] /history |
| [POST] /2 | [POST] /reg |  |  |
| [POST] /3 |  |  |  |
| [POST] /4 |  |  |  |
| [POST] /5 |  |  |  |

| Маршрут | Запрос | Ответ | Описание |
| ------ | ------ | ------ | ------ |
| /methods/:id | token, {imgBefore, params: {}} | imgAfter | Загрузка, обработка, сохранение изображений на сервере, сохранение информации об этом в БД |
| /auth/login | {login, password} | token | Проверка данных пользователя в БД, формирование токена |
| /auth/reg | {login, password} | user | Добавление информации о новом пользователе в БД |
| /check | {img} | result | Проверка изображения на наличие метки. Поиск идентичного изображения.  Добавление информации о запросе в БД |
| /history | token | history | Поиск в БД всех записей о вводимых пользователем метках |



