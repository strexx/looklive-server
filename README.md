# Task managers

Delays in performance have the potential to impact user engagement, experience and revenue. Thankfully Google is there for us to recommend a set of best-practice rules for keeping your pages lean, fast and smooth. These include minifying resources like CSS and JavaScript, optimizing images, inlining and removing unused styles and so on. For now there are 2 popular task managers that developers/companies use for projects.

### Grunt vs Gulp

#### Grunt

Grunt is a pioneer in the JavaScript automation workflow area. There are a lot of known Grunt users like Twitter, jQuery and Modernizr.

The basic principle for Grunt is to give us an easy way to run tasks. A task is a set of code files and configuration files already created for you. You can get new tasks by installing Grunt plugins that you will get using npm. You can find a plugin for pretty much every tool you might use, such as Less and JSHint.

#### Gulp

Gulp is an alternative to grunt. It is a bit more recent and has a reputation as being more flexible than grunt.

Gulp (http://gulpjs.com/) is a workflow automation tool. Like grunt, it works using npm and the package.json file. All available plugins will also be downloaded using npm and added as devDependencies in the package.json file.

#### Difference

One of the main differences with Gulp is that it uses streams. A stream is a set of functions through which a file will go and be modified in memory. The file will be written on the disk only at the end of the process so it is more efficient. Grunt tasks, on the other hand, work as silos and cannot be chained.

**Process**

Assume you would like to write SASS code for your project. You would want to compile your SASS code and then perhaps minify it.

Grunt handles this using intermediary files which are disk I/O operations. Your SASS file is compiled and then written to a temporary file. The temporary file is used by the autoprefixer and then the final product is written to the destination file.

Gulp takes care of all this in-memory. Your source SASS file is compiled, the result is passed to the autoprefixer without being written to a file and the destination file is then written out.

Compared to in-memory operations, disk writes are slow which means that Gulp has a big speed advantage (for now). A speed comparison was done by tech.tmw which shows that most tasks are at least twice as fast on Gulp.

#### Conclusion

I don’t think there’s any question about the fact that both Grunt and Gulp are great tools and have helped people save countless hours of time over the years. Grunt is a bit slower for now, but has a much bigger community. Gulp is faster, has a cleaner API, but is lacking the user base.

I think that the decision will ultimately come down to continuity, available plugins and preference.

- (1) If you’ve been using Grunt/Gulp for a while now and you’re happy with it, there’s no reason to switch.

- (2) If your project requires plugins which are not provided by Gulp and you’re not prepared to write one yourself, you will need to go with Grunt.

- (3) If the above two considerations do not apply to you it will come down to preference. I suggest trying out both and seeing which one sticks with you.

I chose to use Gulp because I like its cleaner API better. While there are differences between both, there is no clear winner and both projects can, and will, coexist.

### Sources:
- http://www.sitepoint.com/how-to-grunt-and-gulp-your-way-to-workflow-automation/
- http://yeoman.io/blog/performance-optimization.html
- http://www.hongkiat.com/blog/gulp-vs-grunt/
