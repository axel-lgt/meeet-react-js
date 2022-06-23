# :purple_heart: Welcome to the Meeet repository! :people_hugging:
🚀 Version 0.1 ([English](https://github.com/axel-lgt/meeet-react-js/blob/master/README.md), [Français](https://github.com/axel-lgt/meeet-react-js/blob/master/README.fr.md))

<p align="center"><img src="https://i.ibb.co/FxBHxCt/meeet-cover.png" alt="meeet-cover" border="0" style="height: 400px"></p>

### :warning: The project is still in early development, but you can check out my progress under the DEV branch :warning:

Meeet is by far the biggest solo project I have ever worked on. Meeet is a dating app based on geolocation which allows users to meet people around them. Users can see profiles through a grid, the nearest profile being the first one. Moreover, users can be filtered by their age, gender and what they are looking for. Users can see other users' profiles containing their pictures, name, age, description, interests and some general information about them. Following a user's interest for another user, they can either add them to favorites, start a conversation with them or block them.

![Size](https://github-size-badge.herokuapp.com/axel-lgt/meeet-react-js.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)


## Wireframes and model
- All the wireframes were made on **Whimsical** and can be seen [here](https://whimsical.com/meeet-3xpTX1RbrbVnvWFQffmKMT)
- The model for all responsive pages was made on **Figma** and can be seen [here](https://www.figma.com/file/Z57503RkDVJ9bARXgGefpe/Meeet?node-id=0%3A1)

## Task list
The project is evolving every day. To keep track of the changes and what I want to do next, I made a task list in **Notion** (in French) which can be read [here](https://blue-tank-59c.notion.site/953d27358b7a4a98bcc2125afdb284c1?v=caf4412b88374c94a9fdda169cfbb759).

## Technologies
In order to make this project, I used the following technologies (these can change depending on the development):


### Front-end
- React
- React Redux Toolkits
- React Router
- HTML
- CSS
- SASS
- JavaScript
- React Leaflet (for the maps)

### Back-end
- Google Firebase Authentication
- Google Firestore

## File hierarchy


### Front-end
All the different page elements are divided in components. Indeed, each component has its own folder, JavaScript and style files which makes it easier to seperate elements. The routes are handled with React Router and are different if used with a mobile or desktop viewport. Indeed, I used conditional rendering thanks to states to render different routes to achieve the model that I created. For the moment, all the front-end is static but I am currently working on making it dynamic with React Redux and the use of Google Firebase.

### Back-end
I originally started working on a PostgreSQL database with pgAdmin 4 in Node.js and Express. However, since this project was going to be bigger than expected I preferred spending my time on the frontend. To resolve this issue, I used Google Firebase which is a noSQL serverless database. I implemented Firebase Authentication to create the user accounts and to manage the logged in state. Then, I used Firestore to create all the different tables related to the users.

## Troubleshooting
When I started working on this exciting project, I made sure to keep track of what I was going through and the progress I was making. I kept it all in a  [Notion file](https://blue-tank-59c.notion.site/Journal-ac0faee34e084ef1adf4b69592980d02). Please note that these are rough notes and some of them may be obsolete.

Thank you for checking out my work, this project means a lot for me and I am really looking forward to the day when I can show it done!
