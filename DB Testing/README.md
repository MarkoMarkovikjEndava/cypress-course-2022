# Database Testing with Cypress

> ## This section of the course covered how to initialize a connection with a running SQL database and use Cypress to run queries and test the results with.

The [test](./cypress/integration/db-tests.js) here is a simple one that checks if the results from the provided query are as expected. Nothing special, but it did teach me how to connect a personal **POSTGRESQL DB** with Cypress and use the [index.js file](./cypress/plugins/index.js) to create tasks which run the said queries.
