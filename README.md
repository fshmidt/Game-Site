# Мини-игра с регистрацией Eugenes.world

<!-- ToC start -->
# Содержание

1. [Описание](#Описание)
1. [Реализация](#Реализация)
1. [Endpoints](#Endpoints)
1. [Запуск](#Запуск)
1. [Примеры](#Примеры)
<!-- ToC end -->

# Описание

Сайт с игрой на зрительную память, написанной на JavaScript, Сервисом Аутентификации и Авторизации, написанном на Vue3, backend-ом, написанном на Golang, через который оба фронта подключаются к контейнезированной бд на Postgres, а так же Vue3 подключается к контейнезированному Redis  и облачному хранилищу Google Cloud. Все 6 контейнеров общаются через reverse-proxy.
Посмотреть и поиграть: [eugenes.world](http://eugenes.world).

# Реализация

- Следование дизайну REST API.
- Подход "Чистой Архитектуры" и техника внедрения зависимости.
- Частичное покрытие юнит-тестами.
- Работа с фреймворком [gin-gonic/gin](https://github.com/gin-gonic/gin).
- Работа с СУБД Postgres с использованием библиотеки [sqlx](https://github.com/jmoiron/sqlx) и написанием SQL запросов.
- Работа с Redis для хранения токенов авторизации.
- Реализация коротких одноразовых и долгих обновляемых токенов авторизации.
- Работа с JWT.
- Работа с API Google Cloud.
- SPA-приложение для авторизации и редактирования аватарки с использованием фрейворка Vue3.
- Запуск из Docker.
**Структура проекта:**
```
.
├── pkg
│   ├── handler         // обработчики запросов
│   │   └── middleware  // middleware для отслеживания авторизации
│   ├── service         // бизнес-логика
│   └── repository      // взаимодействие с БД и облачным хранилищем
├── cmd                 // точка входа в приложение
├── migrations          // SQL файлы с миграциями
├── models              // модели и интерфейсы
│   ├── apperrors       // обработчики ошибок
│   └── mocks           // моки
├── account-client      // SPA-приложение для Авторизации на Vue3
├── parallax            // html/Js/CSS игра-сайт и использованием эффекта parallax

```

# Endpoints

- GET /api/account/me - получение сведений о пользователе
    - Тело запроса:
        - email - почта пользователя
        - password - хешированный пароль пользователя
- GET /api/account/topscorers - получение списка ТОП-7 пользователей по результатам игры

- PUT /api/account/details - изменение данных пользователя
    - Тело запроса:
        - email - почта пользователя(обязательно)
        - username - имя пользователя
        - score - результат пользователя
        - image_url - ссылка на аватар пользователя
        - website - сайт пользователя
        - password - хэшированный пароль пользователя

- POST /api/account/tokens - обновление 3-хдневного токена
    - Тело запроса:
        - refreshToken - 3-хдневный обновляемый авторизационный токен
- POST /api/account/image - загрузка картинки пользователя
    - Тело запроса:
        - form-data - imageFile - файл картинки
- POST /api/account/signout - выход пользователя с сайта, удаление всех текущих авторизационных токенов
    - Тело запроса:
        - refreshToken - 3-хдневный обновляемый авторизационный токен
- POST /api/account/signup - регистратрация нового пользователя
    - Тело запроса:
        - email - почта пользователя
        - username - имя пользователя
        - password - хэшированный пароль пользователя
- POST /api/account/signin - вход пользователя в свою учетную запись
    - Тело запроса:
        - email - почта пользователя
        - password - хэшированный пароль пользователя

- DELETE /api/account/image - удаление картинки пользователя

# Запуск

```
docker compose up
```

Если приложение запускается впервые, необходимо инициировать создание приватного и публичного ключа и запустить миграции к базе данных:

```
make init
```


# Примеры

Запросы сгенерированы из Postman.

### 1. GET /api/account/me
**Тело ответа:**
```
{
    "user": {
        "uid": "7327af01-c8bc-466c-9bfa-fa144bdb2f77",
        "email": "bob@bob.com",
        "username": "dob",
        "imageUrl": "",
        "website": "",
        "score": 0
    }
}
```
### 2. GET /api/account/topscorers
**Запрос:**

**Тело ответа:**
```
{
    "topscorers": [
        {
            "uid": "00000000-0000-0000-0000-000000000000",
            "email": "",
            "username": "bob",
            "imageUrl": "",
            "website": "",
            "score": 42
        },
        {
            "uid": "00000000-0000-0000-0000-000000000000",
            "email": "",
            "username": "tom",
            "imageUrl": "",
            "website": "",
            "score": 20
        },
        {
            "uid": "00000000-0000-0000-0000-000000000000",
            "email": "",
            "username": "dob",
            "imageUrl": "",
            "website": "",
            "score": 8
        }
    ]
}
```

### 3. PUT /api/account/details
**Тело запроса:**
```
{
    "email": "bob@bob.com",
     "score" : 100
}
```

**Тело ответа:**
```
{
    "user": {
        "uid": "7327af01-c8bc-466c-9bfa-fa144bdb2f77",
        "email": "bob@bob.com",
        "username": "",
        "imageUrl": "",
        "website": "",
        "score": 100
    }
}
```

### 3. POST /api/account/signup

**Тело запроса:**
```
{
    "username": "bob",
    "email": "bob@bob.com",
    "password":"password"
}
```

**Тело ответа:**
```
{
    "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjczMjdhZjAxLWM4YmMtNDY2Yy05YmZhLWZhMTQ0YmRiMmY3NyIsImVtYWlsIjoiYm9iQGJvYi5jb20iLCJ1c2VybmFtZSI6ImRvYiIsImltYWdlVXJsIjoiIiwid2Vic2l0ZSI6IiIsInNjb3JlIjowfSwiZXhwIjoxNjc3MzA4Nzc5LCJpYXQiOjE2NzczMDc4Nzl9.gV8X4FrOW1KmFq4h-J2vGyPQio0zb2bNmZCLZxZCoierwL9BFf9_f3e0DqoT-D3X6rVLmsZigrIw94nmbqdLO66Niil69c6oCR1gWA4aJNAdJZ38d3BgXaABvRsmgwTvAXcbqahA3nU7vObm9oEL5Dg6ENBInybFPhY6rJUb_nNT7yuEWmjOKyxbb9yorqDFYSRMdWOWddQ0netS2xJCW4S382dC_g6InJlCdfSdLABFNavXEpIgsMf0O0KKWsPTJ_JlatIQIZpLfu-ItJER5NHzivXCLJpMWjGjUqEX7RnGBLzIhZ75Ecl3euqbW4Nbt8VrOYHP4VW8m3dUmmi4pw",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI3MzI3YWYwMS1jOGJjLTQ2NmMtOWJmYS1mYTE0NGJkYjJmNzciLCJleHAiOjE2Nzc1NjcwNzksImp0aSI6Ijc5Y2ZlNTViLTM5M2YtNDY3MS1iNDNhLWU5MDY4YzNjN2EzNCIsImlhdCI6MTY3NzMwNzg3OX0.k9uEVIovZulwAr3pw0-2EerHaaPS7-wZV0Diat86LPE"
    }
}
```

### 4. POST /api/account/signout

**Тело ответа:**
```
{
    "message": "user signed out successfully!"
}
```

### 5. POST /api/account/signin

**Тело запроса:**
```
{
    "email": "bob@bob.com",
    "password":"password"
}
```

**Тело ответа:**
```
{
    "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjczMjdhZjAxLWM4YmMtNDY2Yy05YmZhLWZhMTQ0YmRiMmY3NyIsImVtYWlsIjoiYm9iQGJvYi5jb20iLCJ1c2VybmFtZSI6IiIsImltYWdlVXJsIjoiIiwid2Vic2l0ZSI6IiIsInNjb3JlIjoxMDB9LCJleHAiOjE2NzczMDk2NTAsImlhdCI6MTY3NzMwODc1MH0.Kl6FFDaomn3I0N6o9Bp10kAo3PfTOKMGWpkiEomW9ocFuNQdvdaR35CjyJ6bzQSTCtOp_iZ8-gVFzIwQ1R_CIufsYqhwEgvxk6wLNkis8sEDDW64wgSU93hbN91TJ-RI8ElDnCmkBtRHlHHVjJjWp5EjkEs9uZM8gmCydMgJp1ML9mkgaKdq6tnjpDCQDDsjx_f21XoPmSeU8B-j1ZInCUPY4h-Xl2xZeNYwzbHn7-QDrRbiAFxjaEWbRs7DRaKOlevctRybtyjVMex23_f_yTelWip7XwYB1yu6F37cculjF_Zn6d_aveAb0ptTiLVK5AWPzkr7aUwYcEtvavFTmA",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI3MzI3YWYwMS1jOGJjLTQ2NmMtOWJmYS1mYTE0NGJkYjJmNzciLCJleHAiOjE2Nzc1Njc5NTAsImp0aSI6IjEwZjE1MzAwLWZlYTctNGIzNC05MTdmLTkzMzZkM2FmM2Y2YSIsImlhdCI6MTY3NzMwODc1MH0.DWRyzwl35IipuyfJ6-oz0GnXm6Bvz-JD5lxpRhp_jX0"
    }
}
```

### 6. POST /api/account/tokens

**Тело запроса:**
```
{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI3MzI3YWYwMS1jOGJjLTQ2NmMtOWJmYS1mYTE0NGJkYjJmNzciLCJleHAiOjE2Nzc1Njc5NTAsImp0aSI6IjEwZjE1MzAwLWZlYTctNGIzNC05MTdmLTkzMzZkM2FmM2Y2YSIsImlhdCI6MTY3NzMwODc1MH0.DWRyzwl35IipuyfJ6-oz0GnXm6Bvz-JD5lxpRhp_jX0"
}
```
**Тело ответа:**
```
{
    "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjczMjdhZjAxLWM4YmMtNDY2Yy05YmZhLWZhMTQ0YmRiMmY3NyIsImVtYWlsIjoiYm9iQGJvYi5jb20iLCJ1c2VybmFtZSI6IiIsImltYWdlVXJsIjoiIiwid2Vic2l0ZSI6IiIsInNjb3JlIjoxMDB9LCJleHAiOjE2NzczMDk3ODAsImlhdCI6MTY3NzMwODg4MH0.OQW0MPD3QLf58RB404vVWMpbhaJPy0-E36wHVof25YYK9MDVnDLmJ6Vyv3WAeV6Byjq1XgDE23bT6rv7gn8MQXNPiVdpIqdWLEorgwerd4Af35OGcITrInRyCHG02jGBqpShXmMGDqLDZLDkuaUVA4X1ed1b_0OydmuenanY4nDFxAzPYmjWcjIOKdvERvLpCGGjbj4b2FtRnlxETdSdjdEUTs4dnA-HjTuMVX-bIII1SbT6ii6wTnZRjkp8MDfgXCzycVI5ndjt-iL_ce8aXsz-F3RXh7kyOTCwu9gUsAr9V2hVH2dxc-ojyyIiXNPHEtgCSe1DDe1GBsevbY4IFA",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI3MzI3YWYwMS1jOGJjLTQ2NmMtOWJmYS1mYTE0NGJkYjJmNzciLCJleHAiOjE2Nzc1NjgwODAsImp0aSI6IjgzYzgzN2YxLTNkNDMtNDhjOC05NDUyLTk1ZjEyNTQ0NjM4MiIsImlhdCI6MTY3NzMwODg4MH0.6V-IAKAxzSRS2RupOg29iTHzKzNTCNK_9mxIAaVeYVY"
    }
}

```

### 7. POST /api/account/image

**Тело запроса:**
```
form-data - imageFile
```
**Тело ответа:**
```
{
    "imageUrl": "https://storage.googleapis.com/gamesite_profile_images/d0b377db-f504-40ea-9866-130bc410a48c",
    "message": "success"
}
```

### 8. DELETE /api/account/image

**Тело ответа:**
```
{
    "message": "success"
}
```
