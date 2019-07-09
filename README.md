# Friend-Finder-App

The link to this application is hosted by Heroku and can be found here: https://friend-finderhw14.herokuapp.com/

# Description

My Friend Finder Application implements friend matching based on the user's responses to a ten question survey. The user answers questions with values from 1 to 5. When the survey is submitted, the user is matched with an existing user whose data is already stored in the system. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined. The pre-entered characters are characters from Game of Thrones. 

Friend Finder application is meant to simulate a simple dating/friend finder app. The application is implemented using a Node.js and Express server on the back end and the Bootstrap CSS framework on the front end. Javascript and jQuery are used as well to dynamically update the page.

# Installation

To install the application follow the instructions:

git clone https://github.com/cdperez7/Friend-Finder-App
cd friend-finder-app
npm install

# Photo guide to application

Once navigating from the home page, the user enters in their personal responses to the ten questions being asked. 

![ff1](https://i.imgur.com/HrFuXdu.png)

After completing the survey and clicking submit, the application will match you with your new best friend based on your answers.

![ff2](https://i.imgur.com/XAEMD9a.png)

Once the user has entered their information, their responses and image are stored within the backend API and can then be matched with future users. In the following photo, you can see that my newest entry matched with myself and the new information/photo I entered.

![ff3](https://i.imgur.com/XxL5JD5.png)

 # Technologies Used: 
 
 * Javascript
 * Jquery
 * node.js
 * Express.js
 * HTML
 * Bootstrap
