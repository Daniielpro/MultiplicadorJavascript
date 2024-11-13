# Two Number Multiplier

This is a simple JavaScript project that allows to multiply two numbers entered by the user. The application runs in a web browser and can also be run in a Docker container.


## Features

- Simple interface to enter two numbers.
- Button to multiply the numbers.
- Displays the result on the same page.

## Technologies Used

- HTML (OPTIONAL, YOU CAN ADD STYLES IF YOU WANT)
- CSS (optional, you can add styles if you want)
- JavaScript
- Docker

## Clone the Repository

To clone this repository, use the following command:

``bash

git clone https://github.com/Daniielpro/MultiplicadorJavascript.git

## Clone the Repository

Method 1 Directly open the html file

1. Navigate to the project folder.

2. Double click on index.html to open it in your browser.

Method 2 Use a simple HTTP server with Python

1. Open the terminal.

2. Navigate to the project folder.

3. Run the following command.

go run main.go

5. Open your browser and go to http://localhost:8081/index.html

## Running Dcoker
To run the project using Docker, follow these steps:

1. Open terminal from the root folder of the project. 2.
2. Issue the following command
````bash
docker build -t username/appname .
3. Issue the following command
````bash
docker run -d -p 8081:8081 username/nameapp
