# Project 1: Shared shopping list

Overview:
Shared Shopping list web application allows users to create and manage the shopping lists. Users can create new shopping lists, add items to them, and mark items as collected. The application displays a list of all active shopping lists, as well as a page for each individual shopping list showing all its items.

The application is deployed at https://deepi-unique-shoppinglist.onrender.com using Render.

Application built using Deno, Javascript and Typescript runtime with built-in support. he user interface is rendered using the Eta template engine, which allows for embedding JavaScript code in HTML templates. The application uses a Postgres database to store data about shopping lists and items.

Usage : 
To create a new shopping list, navigate to the "Shopping lists" page and enter a name for the list in the "Name" field. Then, click the "Create!" button.

To add an item to a shopping list, navigate to the page for the list and enter the item's name in the "Name" field. Then, click the "Add!" button.

To mark an item as collected, navigate to the page for the shopping list containing the item and click the "Mark collected!" button next to the item.

To deactivate a shopping list, navigate to the page for the list and click the "Deactivate list!" button. Deactivated lists will no longer appear on the "Shopping lists" page.

Fuctions:
The application also displays the total number of active shopping lists and items on the main page.

The items in each shopping list are sorted by their collected status, with collected items appearing at the bottom of the list.

The application is designed to be scalable and can handle multiple concurrent connections. It uses a connection pool to manage connections to the database.

Testing:
End-to-end tests are done using Playwright, which is located in the e2e-playwright directory.

The tests are designed to ensure that the application behaves as expected when creating, viewing, updating, and deleting a shopping list.

To run the tests, run the following commands:

docker-compose run --entrypoint=npx e2e-playwright playwright test && docker-compose rm -sf

Local deployment
To deploy the application locally, run docker-compose up in the root directory.