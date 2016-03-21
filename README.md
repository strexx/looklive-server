# Performance edits

## Header image resize

### Before
![forthebadge](readme/header_before.png)

### After
![forthebadge](readme/header_after.png)

### Summary

The header image took **2.3 minutes** to load first and after compression it took **8.9 seconds** on a 2g internet connection.
This is a difference of more than 2 minutes and a huge performance boost for your website.

## jQuery include

### Before
![forthebadge](readme/jquery_off.png)

### After
![forthebadge](readme/jquery_on.png)

### Summary

With jQuery the page loads within **12.46** seconds and without jQuery the page loads in **11.42** seconds on a 4g internet connection. jQuery is a serious plugin which costs a lot of loading time. My advice would be: rethink your application if you really need jQuery for your application. Otherwise just try and use vanilla Javascript.

## Icon spritesheet

### Before
![forthebadge](readme/sprite_before.png)

### After
![forthebadge](readme/sprite_after.png)

### Summary

With an icon spritesheet the page loads within **12.60** seconds and without a spritesheet the page loads in **12.62** seconds on a 4g internet connection. As you can see this not a big win for performance, but it helps a couple of milliseconds.

## Conclusion

Before adding changes to this project, the loading time of the application was 5.32 seconds (tested in Google Chrome).
Because of a "bug" in my browser, the browser doesn't show the first loading time accurate. I was testing this by turning jQuery on and off and by doing this sometimes the first load event takes 1.43 ms and sometimes it takes 12+ seconds. This is why I haven't shown screenshots of my Timeline panel in Chrome.

Tests with results in short:
- Header image resize: from **2.3 minutes** to **8.9 seconds** loading time at 2g connection
- jQuery includes: from **12.46 seconds** to **11.42 seconds** loading time at 4g connection
- Icon spritesheet: from **12.62 seconds** tot **12.60 seconds** loading time at 4g connection
- Changing HTML structure: this didn't had many impact on loading speed. Only a couple of milliseconds (1-3).
- Changing CSS specific selectors: this didn't had many impact on loading speed. Only a couple of milliseconds (1-3).
- Changing to a Single Page Webapp: because of extra libraries this cost extra loading time and made the application slower.


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

# Task managers

Delays in performance have the potential to impact user engagement, experience and revenue. Thankfully Google is there for us to recommend a set of best-practice rules for keeping your pages lean, fast and smooth. These include minifying resources like CSS and JavaScript, optimizing images, inlining and removing unused styles and so on.

### Grunt vs Gulp

#### Grunt

Grunt is a pioneer in the JavaScript automation workflow area. There are a lot of known Grunt users like Twitter, jQuery and Modernizr.

The basic principle for Grunt is to give us an easy way to run tasks. A task is a set of code files and configuration files already created for you. You can get new tasks by installing Grunt plugins that you will get using npm. You can find a plugin for pretty much every tool you might use, such as Less and JSHint.

#### Gulp

Gulp is an alternative to grunt. It is a bit more recent and has a reputation as being more flexible than grunt. Before choosing which one you will use, let’s have a look at how gulp works.

Gulp (http://gulpjs.com/) is a workflow automation tool. Like grunt, it works using npm and the package.json file. All available plugins will also be downloaded using npm and added as devDependencies in the package.json file.

One of the main differences with Gulp is that it uses streams. A stream is a set of functions through which a file will go and be modified in memory. The file will be written on the disk only at the end of the process so it is more efficient. Grunt tasks, on the other hand, work as silos and cannot be chained.

## Sources:
http://www.sitepoint.com/how-to-grunt-and-gulp-your-way-to-workflow-automation/
http://yeoman.io/blog/performance-optimization.html
