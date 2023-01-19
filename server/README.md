## Server Part (1)

In both workshop, you will complete the function inside all files. All functions are already declared you will only add code inside.

For this part will allow you to learn create your own database with mongoose, typescrit server and dockerize your project 

### Run the code 

in both workshop you can (will) run entire project by just running this following command:

    sudo docker-compose up --build
to check if it worked well you can open [http://localhost:8888](http://localhost:8888) to view it in your browser.

### Step 1 
Complete <strong> docker.compose.yaml </strong> to run your mongo database and your server.

### Step 2

By now, you can run your project. Create "/" route in <strong> index.ts </strong> and try to connect our <strong> TS </strong> to our <strong> Mongo </strong> database thanks to mongoose module in javascript.

### Step 3

Create a new mongoose model inside the  <strong> User.ts </strong> file, this model should contain 
- email
- password (crypted) 
- username
- gender (enum between Male, Female or Other)

### Step 4

Go to file <strong> auth.ts </strong>.and complete the  <strong> register </strong> route. With this route should able to store a new user, beware of creating identical user... Choose a key to be unique. A status code is also required for part 2 !

### Step 5

Now let's talk about JsonWebTokens. Inside the file  <strong> JWTServices </strong>, create a function that create a access token and a function that create a refresh token, and two more function who check if the access really our access token and same for the refresh. JWT in few words is like a ID card for specific web app. A refresh token is here to refresh our token if it expires. Sign the token with any data you want !

### Step 6

After creating our JWT, you now have all stuff to create the  <strong> Login </strong> route. In this route, you will just have to check if the user passed in body is existing in our database. Don't forget to send the JWT if the login succeded. (Don't forget the status code too :));

### Step 7

AuthMiddleware... what is that ? Inside the file  <strong> AuthMiddleware.js </strong> you will need to complete the function that:
- return the data stored inside the JWT
- tell us if the token is still valid / exists

An  <strong> AuthMiddleware </strong> is a function that private route use to check if the user have right access to use private routes.

You will need functions from Step 5 to complete this one !

### Going further
Create a route  <strong> refresh </strong>that refresh your token, and take in header the access token and the refresh token. This route will generate a new JWT thanks to the refresh token. You still need to have an access token (expired or not) to access this route.

## Thank you
I hope you understood all notions in this first part of our workshop, if you didn't understood everything, you can contact us at:

jimy.xu@epitech.eu and antonin.pottin@epitech.eu
