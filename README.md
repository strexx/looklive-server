# Serviceworker performance edits

With my integration of the serviceworker I've cached javascript libraries, stylesheets and images. Doing this increasingly speeded up my your first load event as you can see in my results with no throttling.

#### Before adding my serviceworker caching files
![Before Serviceworker](readme/before_serviceworker.png)

Load event: **1440 milliseconds**

#### After adding my serviceworker caching files
![After Serviceworker](readme/after_serviceworker.png)

Load event: **262 milliseconds**

Offline is even faster. As you can see here:

![Offline performance with Serviceworker](readme/offline_performance.png)

Load event: **249 milliseconds**

Here you can see files are served from the serviceworker:

![Offline serviceworker network tab](readme/offline_networktab.png)

## Conclusion
Using a serviceworker drastically increased the performance of my application. These performance edits are even more essential for 3g networks on mobile devices where it takes a bit more time to load content.

