# Никита Денисов

## Описание предметной области  
**Административная панель проката самокатов**

Мобильная версия административной панели для проката электрических самокатов, которая будет предоставлять возможности
для управления парком самокатов, их сортировки, фильтрации, добавления и удаления.

### Стек  
Обязательно: `TypeScript`, `React`, `Nextjs`  
Дополнительно: `React Hook Form`, `Zod`

---

## Описание страниц
- Страница со списком самокатов - _длинный список доступных самокатов с краткой информацией_
- Страница с деталями по конкретному самокату - _форма с подробной информацией о выбранном самокате_
- Страница с редактированием деталей самоката:
  - Форма для редактирования - _форма с валидацией_
    - Основные поля для редактирования:
      - Название
      - Цена
      - Категория
      - Местоположение
- Страница с добавлением нового самоката - _аналогично_
- Кастомные страницы ошибок:
  - 404
  - 500
- Навигация - _таббар и кнопки возврата на предыдущую страницу_

### Фильтрация
- Страница со списком самокатов
  - Цена
  - Категория
  - Местоположение
  - Заряд батареи

---

## Список API
Для взаимодействия с сервером используются следующие эндпоинты:

- `/get_scooters`
  - HTTP метод: `GET`
  - Получение списка самокатов, с возможностью фильтрации и сортировки.
  - Параметры:
    - `page: number`
    - `category: Category | undefined`
    - `countPerPage: number | undefined`
    - `orderBy: SortingKey | undefined`
    - `filters: Filters | undefined`

---

- `/update_scooter`
  - HTTP метод: `PATCH`
  - Обновление информации о самокате
  - Параметры:
    - `scooterId: string`
    - `name: string | undefined`
    - `price: number | undefined`
    - `category: string | undefined`
    - `image: string | undefined`
    - `location: string | undefined`

---

- `/remove_scooter`
  - HTTP метод: `DELETE`
  - Удаление самоката
  - Параметры:
    - `scooterId: string`

---

- `/add_scooter`
  - HTTP метод: `POST`
  - Добавление нового самоката.
  - Параметры:
    - `scooterId: string`

---

- `/get_validation_schema`
  - HTTP метод: `GET`
  - Получение схемы валидации для форм добавления и редактирования самокатов, в зависимости от категории.
  - Параметры:
    - `category: Category`