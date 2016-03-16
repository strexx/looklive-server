# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).

# Performance edits

## Header image resize

### Before
![forthebadge](readme/header_before.png)

### After
![forthebadge](readme/header_after.png)

### Conclusion

The header image took **2.3 minutes** to load first and after compression it took **8.9 seconds** on a 2g internet connection.

## jQuery include

### Before
![forthebadge](readme/jquery_off.png)

### After
![forthebadge](readme/jquery_on.png)

### Conclusion

With jQuery the page loads within **12.46** seconds and without jQuery the page loads in **11.42** seconds on a 4g internet connection.

## Icon spritesheet

### Before
![forthebadge](readme/sprite_before.png)

### After
![forthebadge](readme/sprite_after.png)

### Conclusion

With an icon spritesheet the page loads within **12.60** seconds and without a spritesheet the page loads in **12.62** seconds on a 4g internet connection.

# Progressive Web Apps

### What is a Progressive Web App?

A Progressive Web App provides an app-like user experience that is low friction and is built using modern web capabilities and hosted on the web and can become an app on the user's system over time.

A progressive web app is built with Progressive Enhancement as the core tenant so that they work for as many users as possible irrespective of browser choice. When the User-Agent (such as Chrome, Opera and Firefox) supports technologies like Service Worker, Web Push, and the Add to Homescreen banner, the apps can be enhanced to provide a first class native-like experience for the user.

### Progressive web apps are:

- **Progressive** - They work for every user, regardless of the browser.
- **Responsive** - They fit on every screen.
- **Connectivity independent** - Enhanced with service workers to work offline and with low quality network connections.
- **App-like** - Feel like a native application.
- **Fresh**	- They are always up-to-date, thanks to the service worker.
- **Safe** - Served via HTTPS.
- **Discoverable** - Are identifiable as "applications", allowing search engines to find them.
- **Re-engageable** - Make re-engagement easy through features like push notifications.
- **Installable** - Allow users to keep apps on the home screen, without needing an app store.
- **Linkable** - Easily shareable via URL.

### Progressive must-haves

At a high level, for a web app to be considered “progressive” it must do three things:

- Register a service worker — a series of APIs championed by Google that allows for offline access, web push notifications, and more.
- Run on HTTPS, which is a hard requirement imposed by the service workers spec to prevent man-in-the-middle attacks.
- Create an app manifest file, which specifies a bunch of information about your app such as its name.

## Sources:

- https://developers.google.com/web/progressive-web-apps
- https://addyosmani.com/blog/getting-started-with-progressive-web-apps/
