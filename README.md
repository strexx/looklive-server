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
