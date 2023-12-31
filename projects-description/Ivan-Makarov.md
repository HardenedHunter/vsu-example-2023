# Макаров Иван

## Описание предметной области

**Административная панель для учета студентов с задолженностями** предназначена для управления списком студентов, у которых есть задолженности в учебных вопросах. Она позволит добавлять, редактировать и удалять записи о студентах, а также вести учет и отображать задолженности.

### Стек

Обязательно: `TypeScript`, `React`, `Nextjs` (общее у всех)

Дополнительно: `React Hook Form` и `Zod` для валидации форм.

-—

## Описание страниц

- Страница со списком студентов
- Страница с деталями по конкретному студенту
- Страница с редактированием деталей студента:
- Форма для редактирования
- Основные поля, такие как ФИО, контакты, долг и другие необходимые данные
- Страница для добавления нового студента
- Кастомные страницы ошибок:
- 404
- 500

Для навигации можно использовать таббар, кнопки "назад" и другие удобные элементы интерфейса.

### Фильтрация

В административной панели должно быть не менее трех параметров фильтрации для студентов, чтобы обеспечить удобство поиска и сортировки данных.

- Страница со списком студентов
- Группа студента
- Специфичные параметры, связанные с задолженностями или другой информацией о студенте

### Сортировка

Для удобства администраторов, в административной панели должно быть не менее трех параметров сортировки для студентов, с возможностью сортировки как по возрастанию, так и по убыванию.

- Страница со списком студентов
  - Кол-во задолженностей
  - Дата регистрации
  - Фамилия и имя студента

-—

## Список API

Список эндпоинтов для взаимодействия с данными студентов:

 `/get_students`

Для получения списка студентов с возможностью фильтрации и сортировки.

**Http метод:** `GET`

**Параметры:**
- `page: number`
- `group: string | undefined`
- `countPerPage: number | undefined`
- `orderBy: SortingKey | undefined`
- `filters: Filters | undefined`

-—
 `/update_student`

Для обновления информации о студенте.

**Http метод:** `PATCH`

**Параметры:**
_Здесь должны быть параметры, которые мы будем обновлять, такие как ФИО, контакты, задолжности и другие

-—
 `/remove_student`

Для удаления информации о студенте.

**Http метод:** `DELETE`

**Параметры:**
- Идентификатор студента

-—

`/add_student`

Для добавления нового студента.

**Http метод:** `POST`

**Параметры:**
_Все параметры, описывающие добавляемого студента, включая ФИО, контакты и задолжности

-—

`/get_validation_schema`

Для получения схемы валидации форм добавления и обновления информации о студенте.

**Http метод:** `GET`

**Параметры:**
- `group: Group`
