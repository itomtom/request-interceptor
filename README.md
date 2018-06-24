# Blocking Loader for HTTP requests

This repository contains the example code of a working Request Interceptor in AngularJS 1.5 which automatically displays a loading modal when a http request is made. 

## Implementation

You will need the content of `request-interceptor.service.js` and your AngularJS 1.5 app wil need to consume as such:
```Javascript
angular.module('app', [])
.config(HttpProvider)
```

Within the interceptor you can see the line `$('#loadingModal').modal('show')` this is how we display and hide the loading modal to block user's interaction. This is entirely up to you in how you would like to having a loading blocker but I have opted for Bootstrap's Modal Component, which you find in `loading-blocker.html`.

Finally you need the content of `helper.config.js` which contains the helper function to add your desired url to be blocking and to check which request should be blocking.

## How to use it?

Once you have registered the Request Interceptor as shown above, you can start using this feature.
1. Inject `$rootScope` into your controller
2. Add your full or base url via the method `addUrlToWait`

That's it, once the http service intercepts a url similar to the one you've added it will display the loading modal. 

