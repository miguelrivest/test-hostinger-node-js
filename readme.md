# test-hostinger-node-js

This is a simple Node.js API with a SQLite database.

## Project Structure

The project is structured as follows:

- **`db/`**: Contains the SQLite database file.
- **`dbscripts/`**: Contains scripts for creating and managing the database.
- **`src/`**: Contains the source code for the application.
  - **`controllers/`**: Contains the controllers, which are responsible for handling the request and response logic.
  - **`routes/`**: Contains the routes, which are responsible for mapping the incoming requests to the correct controllers.
  - **`services/`**: Contains the services, which are responsible for handling the business logic, such as interacting with the database.
  - **`utils/`**: Contains utility files, such as a logger.
- **`server.js`**: The main entry point for the application.
- **`.env`**: Contains environment variables.
- **`package.json`**: Contains project metadata and dependencies.
- **`test.rest`**: Contains example requests for the API.

## Getting Started

1.  Install the dependencies:

    ```bash
    npm install
    ```

2.  Create the database:

    ```bash
    npm run createdb
    ```

3.  Start the server:

    ```bash
    npm run dev
    ```

The server will be running on port 3000.
