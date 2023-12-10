# REST API Project for Language Data

This project provides a REST API for accessing and managing data related to different types of languages.


## Technologies Used

• Node.js: The JavaScript runtime environment for building server-side applications.

• Express.js: A popular web framework for Node.js that simplifies building and managing REST APIs.

• MongoDB Atlas: A cloud-based database platform from MongoDB for storing and managing data.


## Project Overview

This project covers the following functionalities:

  • Get all languages: Retrieves a list of all languages stored in the database.

  • Get a specific language: Retrieves information about a specific language by its ID.
    
  • Create a language: Adds a new language to the database.
    
  • Update a language: Modifies existing information about a specific language.
    
  • Delete a language: Removes a language from the database.


## Requirements

  • Node.js v16+
  
  • npm or yarn package manager
  
  • MongoDB Atlas account with a database
  
  • Postman 


## Installation


  1. Clone the project repository:

       git clone https://github.com/itssouray/RestApi

  2. Navigate to the project directory:

       cd server

  3. Install the project dependencies:

       npm install

  4. Configure the connection to your MongoDB Atlas database by creating a file named .env in the project root directory and adding the following environment variables:

       DB_HOST=your_mongodb_host
     
       DB_NAME=your_mongodb_database
     
       DB_USER=your_mongodb_username
     
       DB_PASSWORD=your_mongodb_password

  5. Start the server:

       nodemon app.js
