# Это что за покемон?

В этой директории реализован простой веб-сервер на [fastify](https://fastify.dev/), который позволит без поднятия «настоящего» бекенда тренироваться в клиент-серверном взаимодействии

Благодаря нему мы в клиентском приложении сможем не только получать данные с сервера, но и мутировать их по средствам `POST`, `PUT` и `DELETE` запросов

## Неужели нужно будет мучать с локальным поднятием БД?

Нет, в лекциях по клиентской части не предусмотрено никакое взаимодействие с базами данных, поэтому наши данные будут хранить в .json-файлах, которые мы максимально простым и варварским способом будем загружать в оперативную память при старте сервера, после чего программа-сервер будет работать с ними как с простыми js-объектами

Сохранение изменений по завершении сессии не предусмотрено, так как это простой демонстрационный проект, на который не хочется тратить время

## Начало работы с [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

Этот проект был сгенерирован с помощью Fastify-CLI.

### Доступные скрипты

В директории проекта вы можете использовать

#### `npm run dev`

Чтобы запустить приложение в режиме разработки.
Откройте [http://localhost:4000](http://localhost:4000), чтобы посмотреть его в браузере

#### `npm start`

Продакшн режим

#### `npm run test`

Чтобы запустить тесты

### Дополнительно

[Документация Fastify](https://www.fastify.io/docs/latest/).
