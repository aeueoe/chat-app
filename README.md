## Project description

A mobile chat application built with React Native. The app will provide users with a chat interface and options to share images and their location.

### User Stories

- As a new user, I want to be able to easily enter a chat room, so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline, so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

<h3>Technologies Used</h3>
<ul>
  <li>React-Native</li>
  <li>Expo</li>
  <li>Firebase</li>
</ul>

<h3>Key Features</h3>
<ul>
  <li>Home screen where users can enter their username and select a background color for the chat display</li>
  <li>Chat interface that allows users to send pictures from their media library or take a picture with their camera, as well as share their current location</li>
  <li>Chat Application uses in-build permission check to ask for permission before accessing location data, media library and camera</li>
</ul>

<h3>Getting Started</h3>

<h4>Requirements</h4>
<ul>
  <li>Node.js</li>
  <li>Expo Command Line Interface (CLI)</li>
</ul>
<code>npm install --global expo-cli</code>

<h4>Setup</h4>
<p>Clone the repo or download the files, and install dependencies</p>
<code>npm install</code>

<h4>Run the App</h4>
<p>To get the app running use:</p>
<code>expo start</code>

<p><b>NOTE:</b> You will need to setup an account with <a href="https://expo.dev/">Expo</a> before you can view your app and get it up and running.</p>

<h4>Viewing the application</h4>
<p>You can run this application on your mobile device by downloading the Expo app from your app store.</p>
<p>Alternatively you can run IOS Simulator through XCode or Android Studio.</p>
<p><b>NOTE:</b> You will need to setup your own <a href="https://firebase.google.com/">firebase database</a>, you will need to setup your own firebase database and add your own database credentials in /components/chat.js, under the "Firebase Config Details", then allow anonymous authorization with your Database.</p>

![1](./assets/1.PNG)
![2](./assets/3.png)
![3](./assets/2.png)