Blocket-store
------------------------

Blocket-store is a web application that allows users to upload and manage content and images on a buy and sell website. It is built using a full-stack architecture with Express.js for the backend and React.js for the frontend. Users can login and register with secure token and cookie-based authentication. The application uses an SQL database for storing user data and uploaded content.

Requirements:

* Node.js
* NPM
* SQL Database


Installation:

* Clone the repository to your local machine
* Navigate to the backend directory of the project in the command line
* Run npm install to install all the required dependencies
* Navigate to the frontend directory in the command line
* Run npm install again to install the frontend dependencies
* Return to the backend/src and create a new file called .env
* Copy the contents of .env.example into the new .env file and replace the values with your own configurations (i.e., database credentials, JWT secret, etc.)

* .env file contains:
makefile
Copy code
host = "localhost" 
user= "" 
password= "" 
database= ""
secret = ""

* Navigate to backend/src and run nodemon server.js
* Navigate to frontend and run npm run start


Features:

Authentication:

* Login and registration pages with secure token and cookie-based authentication
* Passwords are encrypted using bcrypt.js
* Stored in SQL database

Content:

* Users can upload images and content to the buy and sell site
* Uploaded content and images are stored in the SQL database

Future Plan:

* Users can edit and delete their uploaded content and images
* User will be able to see outhers content

Search Functionality: 

* I'd like to add a search bar so users can easily search for specific items on the buy and sell site.
* Product Categories: I think it would be helpful to allow users to categorize their uploaded content and images by product type. This could involve creating categories and tags for products, and allowing users to filter search results by category.

