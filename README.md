# Приложения "Менеджер задач" на React + TypeScript

(Домашнее задание 3)

## Описание кейса:

Цель: Разработать веб-приложение "Менеджер задач", позволяющее
просматривать список задач и редактировать их.

## Реализованный функционал:

-   ### Обновленное

-   Добавленно fake api на Express
-   REST-like взаимодействие
-   Redux Toolkit работа с thunk

-   ### Основная страница

    -   Получение всех задач
    -   Возможность добавить новую задачу
    -   Получение базовой информации об отдельной задаче (при наведении)
    -   Роутинг к конкретной задаче

-   ### Страницы конкретных задач
    -   Получение всех данных о конкретной задаче
    -   Два режима работы: read-only и editing
    -   Возможности изменения, сброса изменений и удаления конкретной задачи.

## Особенности проекта:

-   Сохранение задач между сессиями благодаря .json-файлу
-   Упор на высокую отзывчивость компонентов и UI/UX
-   Адаптив под различные устройства

## Использованные подходы:

-   FSD
-   Использование Redux Toolkit для работы с глобальными состояниями
-   Хранение данных с помощью Express и json
-   Стилизация с помощью module.scss и Material UI
-   Использование react-hook-forms для форм

## Стэк:

-   ### Основной
    -   HTML / CSS / SCSS
    -   React / TS
    -   Nodejs / Express
-   #### Дополнительный
    -   Vite
    -   React Router
    -   Redux Toolkit
    -   React Hook Form
    -   Material UI

## Инструкция к запуску через GitHub

```bash
git clone -b homework3 https://github.com/ZaplatiteZaSitePJ/t1-tasker.git

#first terminal
cd t1-tasker/fake-back-api
npm install
npm run dev

#second terminal
cd t1-tasker/frontend
npm install
npm run build 
#or "npm run dev" 
```

## Структура проекта

```
fake-back-api

src/
├── type/                       # Основные типы
├── server.ts                   # Сервер с описанными CRUD методами
└── task.json                   # Файл для хранения данных


frontend

src/
├── app/                        # Точка входа приложения
│   ├── routing/                # React Router (AppRouter)
│   └── store/                  # Инициализация Redux store
│
├── entities/
│   └── Task/                   # Отдельная сущность "Task" (TaskItem + стили)
│
├── features/                   # Отдельные, переиспользуемые фичи
│   └── Form/                   # Все, что относится к формам
│   │    ├── funcs               # Утилиты/модели формы (напр. ButtonParser)
│   │    └── ui/                 # UI-компоненты формы
│   │
│   ├── lib/                         # Общие вспомогательные функции
│   │
│   └── Tasks/                          # Логика, связанная с Задачами
│        └── api/                       # Логика хранения и получения задач
│              └── fetch/               # fetch запросы
│              │
│              └── storeModel/             # Связанная с Redux
│                   └── tasks.slice.ts
│                   └── tasks.thunk.ts
|                   └── hooks.ts
│
├── pages/                      # Страницы приложения
│   ├── main/
│   └── taskDetails/
│
├── shared/                     # Переиспользуемые компоненты и типы
│
└── widgets/                    # Строительные блоки страниц
    ├── AddTaskForm
    │
    ├── TaskDetailesForm
    │
    └── TaskList
```
