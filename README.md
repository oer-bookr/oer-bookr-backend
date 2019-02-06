# oer-bookr-backendnpm

https://oer-bookr-api.herokuapp.com/books

### Download Project Files

- **Fork** and **Clone** this repository.
- **CD into the folder** where you cloned the repository.

## Test API Endpoints

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
| PUT    | /books/:id | Updates the `book` with the specified `id`.  |

#### Review Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /reviews   | Retrieves a list of all `reviews` in the database. |
| GET    | /reviews/:id | Retrieves a `review` with the specified `id`. |
| POST   | /reviews   | Creates a `review`. |
| DELETE | /reviews/:id | Deletes the `review` with the specified `id`. |
| PUT    | /reviews/:id | Updates the `review` with the specified `id`. |

## Data Models

#### Books Data Model

| Field |    Type   | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | Integer | ID of the newly created book. |
| title  | String  | Title of the newly created book. |
| author | String  | Author of the newly created book. |
| publisher | String | Publisher of the newly created book. |
| license | String | License of the newly created book. |
| subject | String | Subject of the newly created book. |
| image | String | Image of the newly created book. |
| link | String | Link to the newly created book. |
| reviews | Array of Objects | Array of Reviews for the newly created book. |

#### Reviews Data Model

| Field |    Type   | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id    | Integer | ID of the newly created review. |
| book_id | Integer | ID of the book the review is for. |
| reviewer | String | Name of the reviewer of the new review. |
| review | String | Text review for the book. |
| rating | Integer | Number review 1-5 for the book. |
