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

# Opdracht 2

## Optmising HTTP-requests

Reducing HTTP-requests increases the performance of your application. Therefore I've added some automation tasks with Gulp to help speed up my edit of the LookLive application.

### Before
![Before concatenating](readme/before_concat.png)

First load event: **11.81s**

### After
![After concatenating](readme/after_concat.png)

First load event: **11.71s**

### Conclusion

Difference between load events before and after concatenating files is **100 milliseconds**.

## Optimising web fonts

When trying to optimise web fonts, I found out that the inital page load is slower than before when applying a font face observer. This will monitor when a web font is applied to the page and notifies you. It does not limit you in any way in where, when, or how you load your web fonts. In my case this change enhanced the perceived performance, but not the page load performance of the webapp. So the application shows the fonts at the very first paint of the application, but it's slower in the end.

### Before
![Before webfonts](readme/before_fonts_1189.png)

First load event: **11.89s**

### After
![After webfonts](readme/after_fonts_1198.png)

First load event: **11.98s**

### Conclusion
The difference between the initial page load is 10 milliseconds after optimising. But you can see that the rendering and the painting is faster than before this change.

## Optimising images

For compressing images I've used the image-min gulp package. This drastically boosts your overall performance because it uses advanced techniques and is bundled with lossless optimizers. See [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin). For this project I've saved the header image as JPG file which is how it should be, but to really demonstrate the performance I've compressed the big header.png image and tested this with a 4g connection.

### Before
!(readme/before_imagemin_1571.png]

- header.png size: **2mb**
- First load event: **15.71**

### After 
!(readme/after_imagemin_1358.png]

- header.png size: **1.1mb**
- First load event: **13.58**

### Conclusion

Difference between load events is **2.13** seconds and the gulp-imagemin plugin compressed the header with **900 kb's**.
This is a big win for your application.
