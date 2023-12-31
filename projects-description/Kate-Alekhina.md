# Алехина Екатерина

## Описание предметной области:
Моя лабораторная работа посвящена интернет-магазину коллекционных игрушек. Пользователи могут просматривать каталог игрушек, сортировать и фильтровать их, а также просматривать подробное описание каждой игрушки.

### Стек:
`TypeScript`, `React`, `Nextjs`

---

## Описание страниц:

- Список игрушек (Длинный список)
- Страница игрушки с изображением и основной информацией
- Страница добавления/редактирования игрушки с валидацией
  - форма для редактирования (форма с валидацией)
    - фотография
    - название
    - тип
    - цена
    - статус
    - рейтинг
    - и т.д.
- Кастомные страницы ошибок:
  - 404
  - 500
- Навигация — таббар

### Фильтрация:
Страница фильтров:

- Фильтрация по типу игрушки
- Фильтрация по статусу игрушки (в наличии, ожидается, нет в продаже)
- Фильтрация по диапозону цен
- Фильтрация по рейтингу

### Сортировка:
Страница сортировки:

- Сортировка по дате добавления: Новые первыми или старые первыми.
- Сортировка по цене: От дешевых к дорогим или наоборот.
- Сортировка по рейтингу: От высокого рейтинга к низкому или наоборот.

---

## Список API:

**Эндпоинт**: /get_toys
**Http метод**: GET
**Параметры**:

- page: number
- type: string | undefined
- priceRange: { min: number, max: number } | undefined
- status: 'in stock' | 'expected' | 'not on sale' | undefined
- rating: number | undefined
- orderBy: SortingKey | undefined

**Эндпоинт**: /add_or_edit_toy
**Http метод**: POST
**Параметры**:

- id: number | undefined (если указан, то редактирование, иначе добавление)
- name: string
- description: string
- price: number
- status: 'in stock' | 'expected' | 'not on sale' | undefined
- type: string
- rating: number
- imageUrl: string

**Эндпоинт**: /delete_toy
**Http метод**: DELETE
**Параметры**:

- id: number