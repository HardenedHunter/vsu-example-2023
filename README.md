# Мандрусенко Денис

## Описание предметной области

Мобильная версия доски объявлений, которая будет предоставлять возможности поиска объявлений по категориям и параметрам, их сортировки, фильтрации, добавления и редактирования. Будет содержать в себе функциональности, связанные с валидацией добавляемых и редактируемых объявлений
## Стек

- TypeScript, React, Nextjs
- Дополнительно: React Hook Form и Zod для валидации формочек

## Описание страниц

- Главная страница - на ней пользователи могут просматривать последние добавленные объявления и осуществлять поиск по категориям и ключевым словам.
- Страница категорий - здесь пользователи могут выбрать интересующую их категорию для просмотра объявлений.
- Страница объявления - здесь размещается подробная информация о товаре или услуге, включая описание, цену, фотографии и контактные данные продавца.
- Личный кабинет - здесь пользователи могут создать свой профиль, добавить информацию о себе и просмотреть свои размещенные объявления.
- Страница рейтингов - здесь отображается рейтинг продавца, который формируется на основе отзывов пользователей.
- Страница добавления объявления - здесь пользователи могут разместить свое объявление, заполнив необходимые поля и загрузив фотографии.
- Страница фильтров и сортировки - здесь пользователи могут настроить параметры поиска, чтобы получить более точные результаты.
**Кастомные страницы ошибок:**
- 404
- 500
**Для навигации так же будет реализована смесь из таббара и кнопок назад оглавляющих страницу**

### Фильтрация

- `Фильтрация по категориям: пользователь может выбрать интересующую его категорию, например, недвижимость, автомобили, электроника и т.д.`
- `Фильтрация по дате размещения: пользователь может выбрать период, за который были размещены объявления.`
- `Фильтр по местоположению: на сайте можно выбрать город и увидеть только объявления из этого города.`

### Сортировка

- `Сортировка по дате размещения: результаты отсортированы по дате размещения, начиная с самых новых.`
- `Сортировка по цене: результаты будут отсортированы по возрастанию или убыванию цены.`
- `Сортировка по рейтингу продавца: результаты будут отсортированы по убыванию рейтинга продавца, позволяя выбирать надежных продавцов.`

## Список API

**Эндпоинт:** `/get_announcement`

Нужен, чтобы получить список объявлений, отфильтровать его в соответствии с переданными фильтрами и выполнить сортировку по соответствующему ключу

**Http метод:** `GET`

**Параметры:**

- `page: number`
- `category: Category | undefined`
- `countPerPage: number | undefined`
- `orderBy: SortingKey | undefined`
- `filters: Filters | undefined`

**Эндпоинт:** `/update_announcement`

Обновление полей уже существующего продукта

**Http метод:** `PATCH`

**Параметры:**

- `ID объявления: Идентификатор объявления, которое требуется обновить.`
- `Заголовок: Новый заголовок объявления.`
- `Описание: Новое описание объявления.`
- `Категория: Новая категория, в которую должно быть перемещено объявление.`
- `Цена: Новая цена для объявления.`
- `Фотографии: Новые фотографии объявления.`

**Эндпоинт:** `/remove_announcement`

Удаление продукта

**Http метод: DELETE**

**Параметры:**

Идентификатор объявления, по которому мы однозначно поймем, что удалять

**Эндпоинт:** `/add_announcement`

Добавление нового объявления

**Http метод:** `POST`

**Параметры:**

- `ID объявления: Идентификатор объявления, которое требуется обновить.`
- `Заголовок: Новый заголовок объявления.`
- `Описание: Новое описание объявления.`
- `Категория: Новая категория, в которую должно быть перемещено объявление.`
- `Цена: Новая цена для объявления.`
- `Фотографии: Новые фотографии объявления.`

**Эндпоинт:** `/get_validation_schema`

Нужно, чтобы тянуть с сервера схему, в соотвтествии с которой мы будем валидировать формы добавления и обновления объявления

**Http метод:** `GET`

**Параметры:**

category: Category

