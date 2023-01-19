## Front Web Part (2)
This following part will allow you to learn what is basic Context in react, oauth2 with google. 

### Run the code 

as the part 1, you can run entire project by just running this following command:

    sudo docker-compose up --build
to check if it worked well you can open [http://localhost:8889](http://localhost:8889) to view it in your browser.

### Step 1 
Complete the <strong> docker.compose.yaml </strong> to run your front web app

### Step 2

By now, you can run your project. Create "/" route in <strong> index.js </strong> as element you can use <strong> home.js </strong> file as elements

### Step 3

This step can be a little bit hard, you need to complete all function in <strong> AuthContext.js </strong> file, Google is your best friend if you don't know what is context in react :). In few words, your <strong> AuthContext </strong> somes functions need to make call your back-end API and others are some states what you can use to call inside other function.

### Step 4
Do the same as step 2 but now do it for <strong> Login </strong> and <strong> Register </strong>, dont forget to use your <strong> AuthContext </strong>. <strong> States </strong> and <strong> Context </strong> are strongly recommended in thoses functions. If you undestood well what and how Context works in React, you should able to keep your user logged in.

### Step 5
Now your user is logged in (if you did nothing wrong with your loggin page and AuthContext). In your auth context you should have complete the logout function thanks to this create a logout button inside home and try to display only logout button if you are loggin and login/register button if you're not !

### Step 6
Let's talk about Oauth2... Create your own application at https://console.cloud.google.com/. There is a lot of tutorial online that explain you how to create your app.

### Step 7
Now create a component that can log you with google (thanks to react-google-login) with a <strong> onSuccess </strong> and <strong> onFailure </strong> functions.

### Going further
Create a permanent state that refresh your token every 1hours inside your <strong> AuthContext.js </strong> file.

## Thank you
we wan't to thank you all for choosing our workshop, i hope you understood all notions in both workshop, if you did understood everything, you can contact us at:

jimy.xu@epitech.eu and antonin.pottin@epitech.eu
