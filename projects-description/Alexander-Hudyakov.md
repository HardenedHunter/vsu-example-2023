# Александр Худяков
## Описание предметной области
**Мобильная версия админки для сайта поиска вакансий.**
Админка предоставляет возможности для добавления, редактирования, удаления и просмотра вакансий. Кроме того, она предоставляет инструменты для фильтрации и сортировки вакансий.
### Стек
`TypeScript`, `React`, `Nextjs`

---
## Описание страниц
**1. Страница "Все вакансии"**:

   - **Описание**: Эта страница представляет собой список всех доступных вакансий с основной информацией о каждой вакансии и кнопками управления для просмотра, редактирования и удаления.
   - **Компоненты**:
     - **JobList**: Отображает список вакансий. Каждая вакансия представлена в виде карточки
     - **Pagination**: Компонент для переключения между страницами списка вакансий
     - **SearchBar**: Поле поиска для фильтрации вакансий по ключевым словам
     - **ActionButton**: Кнопки для редактирования, удаления или просмотра деталей каждой вакансии
     - **CheckboxFilter**: Компонент для выбора значений фильтрации в рамках одного условия
     - **SortButton**: Переключает порядок сортировки
     - **Image**: Отображает логотип компании

**2. Страница "Просмотр вакансии"**:

   - **Описание**: Отображает детальную информацию о выбранной вакансии, включая описание, требования, зарплату и другие параметры.
   - **Компоненты**:
     - **JobDetail**: Представляет собой блок с полной информацией о вакансии
     - **BackButton**: Кнопка для возвращения к списку вакансий
     - **Image**: Отображает логотип компании

**3. Страница "Добавление вакансии"**:

   - **Описание**: Форма для создания новой вакансии с полями ввода необходимой информации
   - **Компоненты**:
     - **JobForm**: Форма с полями для ввода данных о вакансии
     - **SubmitButton**: Кнопка для отправки формы
     - **CancelButton**: Кнопка для отмены и возврата к списку

**4. Страница "Редактирование вакансии"**:

   - **Описание**: Форма редактирования с предварительно заполненными данными текущей вакансии
   - **Компоненты**:
     - **JobForm**: Та же форма, что и для добавления, но с предзаполненными данными
     - **UpdateButton**: Кнопка для обновления информации о вакансии
     - **CancelButton**: Кнопка для отмены редактирования

**5. Страница "Удаление вакансии"**:

   - **Описание**: Подтверждение о желании удалить выбранную вакансию
   - **Компоненты**:
     - **ConfirmationDialog**: Диалоговое окно с текстом подтверждения и информацией о вакансии, которую предполагается удалить
     - **ConfirmButton**: Кнопка для подтверждения удаления
     - **CancelButton**: Кнопка для отмены удаления
### Фильтрация
  - Все вакансии
    - По категории
    - По компании
    - По местоположению
    - По зарплате (в выбраном диапазоне)   
### Сортировка
  - Все вакансии
    - По дате размещения
    - По названию
    - По компании
    - По зарплате   
---

## API:
- **Эндпоинт**: `/jobs`
   
   - **Метод**: `GET`
     - Возвращает список всех вакансий для нужной страницы, дополнительные параметры определяют фильтрацию и сортировку 
     - **Параметры**:
       - `page`: number (номер страницы)
       - `category`: Category[] | undefined (категория вакансии)
       - `slaryLower`: number | undefined (нижняя граница зарплаты)
       - `salaryUpper`: number | undefined (верхняя граница зарплаты)
       - `company`: string[] | undefined (название компании)
       - `location`: Location[] | undefined (местоположение)
       - `orderBy`: SortingKey | undefined (ключ сортировки: "date", "title", "company")
       - `orderDirection`: OrderDirection | undefined (направление сортировки)

   - **Метод**: `POST`
     - Создаёт вакансию с указанными данными
     - **Параметры**:
       - `title`: string (название вакансии)
       - `description`: string (описание вакансии)
       - `salary`: number (зарплата)
       - `company`: string (название компании)
       - `location`: Location (местоположение)
       - `category`: Category (категория вакансии)
       
- **Эндпоинт**: `/jobs/:id`
   
   - **Метод**: `GET`
     - Возвращает вакансию по id
       
   - **Метод**: `PUT`
     - Изменяет вакансию по id, если параметр отсутсвует, то он не будет изменён
     - **Параметры**:
       - `title`: string | undefined (название вакансии)
       - `description`: string | undefined (описание вакансии)
       - `salary`: number | undefined (зарплата)
       - `company`: string | undefined (название компании)
       - `location`: Location | undefined (местоположение)
       - `category`: Category | undefined (категория вакансии)
    

   - **Метод**: `DELETE`
     - Удаляет вакансию по id
  
