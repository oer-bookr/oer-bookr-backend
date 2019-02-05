# oer-bookr-backendnpm

https://oer-bookr-api.herokuapp.com/books

### Download Project Files

- **Fork** and **Clone** this repository.
- **CD into the folder** where you cloned the repository.

#### Auth Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register | Creates a `user` sent inside the `body` of the request. **Hashes** password before saving to the database.                                                                                                                                           |
| POST   | /login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, creates a JWT token to be used to access restricted endpoints. |

#### Book Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /books    | Retrieves a list of all `books` in the database.                   |
| GET    | /books/:id | Retrieves a `book` specified by the `id` provided, as well as a list of `reviews` for the `book`. |
| POST   | /books    | If all required fields are met, creates a `book`. |
| DELETE | /books/:id | Deletes the `book` with the specified `id`. |
| PUT    | /books/:id | Updates the `book` with the specified `id`  |

#### Review Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /reviews   | Retrieves a list of all `reviews` in the database. |
| GET    | /reviews/:id | Retrieves a `review` with the specified `id`. |
| POST   | /reviews   | Creates a `review` |
| DELETE | /reviews/:id | Deletes the `review` with the specified `id`. |
| PUT    | /reviews/:id | Updates the `review` with the specified `id`. |
