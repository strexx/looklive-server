# LookLive server
![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](http://forthebadge.com/images/badges/uses-html.svg)
![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)
![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)

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

#Preformance
##Start preformace
![forthebadge](readme/start.png)


##semantic & efficient  HTML/CSS

###Before
![forthebadge](readme/html-css/html-css-old.png)
###After
![forthebadge](readme/html-css/html-css-new.png)

##Optimised img

###Before
![forthebadge](readme/img/img-old.png)
###After
![forthebadge](readme/img/img-new.png)


##Optimised SVG with a spritesheet

###Before
![forthebadge](readme/sprite/sprite-old.png)
###After
![forthebadge](readme/sprite/sprite-new.png)

##No jQuery

###Before
![forthebadge](readme/jquery/jquery-old.png)
###After
![forthebadge](readme/jquery/jquery-new.png)

##SPA

###Before
![forthebadge](readme/spa/spa-old.png)
###After
![forthebadge](readme/spa/spa-new.png)


