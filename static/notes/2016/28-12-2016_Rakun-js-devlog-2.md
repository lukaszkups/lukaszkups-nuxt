---
title: 'Rakun.js devlog #2'
date: 2016-12-28 11:22:54
tags: [rakunjs, devlog, programming, javascript]
---

Quoting my previous entry: 
> Rakun.js is a un-opinionated, javascript plugin for wide usage.
> Currently in beta stage, but it is used already in couple projects, such as one of my client's internal android mobile app or as a SPA framework for [inku.js](https://github.com/lukaszkups/inku) interface. 

## What's included in Rakun.js?

Rakun.js has 3 basic functionalities:

- Route management,
- State management,
- Automatically binds `hashchange` event on the browser with created Rakun.js instance.

## Basic usage tips

For the app's sake - use only one instance of Rakun.js in Your application.

First, include the Rakun.js source code file (I recommend using minified version, which You can get [here](https://github.com/lukaszkups/rakun.js/blob/master/src/rakun.min.js)): 

```html
<script type="text/javascript" src="YOUR_PATH_TO_LOCAL_RAKUNJS_COPY"></script>
```
Next, initialize Rakun.js instance in Your custom javascript file:

```javascript
var rakunInstance = new Rcn();
```

Now let's create new Rakun Router instance using `newRouter` method:

```javascript
var routerInstance = rakunInstance.newRouter();
```

And that's it! We've already setup the very basic Rakun.js app. It now will automatically add `#/` to the end of the url on page load (if necessary/missing).

## Managing states

Now, let's create our first Rakun.js state:

```javascript
var userState = rakunInstance.newState({
  name: 'evilRaccoonUserProfile',
  data: function(){
    return {
      username: 'Not-So-Evil Raccoon',
      motto: 'PERFECT',
      avatar: 'http://i.imgur.com/qTXvsY3.jpg' // random link to imgur evil raccoon photo ;)
    };
  }
});
```

`name [string]` param is required. If we want to pass `data` to our state, we have to remember that it should be a function that returns anything. 
Why is that?
Because `rakunInstance` has also a method to find state - `findState`, which takes two params: 

- `stateName [string]` - name of the state that we want to find,
- `getValue [bool]` - if is set to `false` or not provided, `findState` returns whole state object, but when is set to `true`, it evaluates state's data function and returns directly its value. 

But where are those states stored?

Every instance of Rakun.js has `stateBox [array]` property, which contains all states created by given instance.
The same applies to routes (`routeBox [array]`), which will be our next topic.

## Rakun.js routing

Let's create our home route:

```javascript
var homeRoute = routerInstance.newRoute({
  name: 'home',
  url: '/',
  wrapper: 'home-div-wrapper-id',
  beforeRender: function(){
    var userData = rakunInstance.findState('evilRaccoonUserProfile', true);
    
    if(userData.name !== 'Nice Racoon'){
      userData.name = 'Nice Racoon';
      rakunInstance.updateState('evilRaccoonUserProfile', userData);
    }
  },
  afterRender: function(){
    var renderedRoutesArray = rakunInstance.newState({
      name: 'renderedRoutes',
      data: function(){
        return ['home'];
      }
    });
  },
  template: function(){
    var userData = rakunInstance.findState('evilRaccoonUserProfile', true);

    return '<h1>Raccoon home webpage</h1><p>' + userData.username + '</p><p>' + userData.motto + '</p><img src="' + userData.avatar  + '" alt="avatar" />';
  }
});
```

Above code sums up pretty everything route-related.

Rakun.js doesn't support nested route names - You should use *flat routing*, e.g.:

- `/users/` - for getting list of users,
- `/user/1/` - for getting user with id that equals to 1,
- `/user-update/1/` - for updating user with given id

In the last example You probably would like to use url like `/user/1/update/` - Rakun.js splits route url and searches for route between first and second slash (based on given example above it will be `/user-update/`).
Keep in mind to define all route urls with the slash character in the beginning and at the end of it.

I've decided to implement such approach bacause of keeping Rakun.js as flexible as possible, so every developer can parse the url params in a way he/she want.

When creating new route, those fields are required:

- `name [string]` - name of the route,
- `url [string]` - main url of the route (without nesting),
- `wrapper [string]` - id of the dom element in document, where route template should be rendered,
- `template [string]` - HTML to render in route

Now, let's go back to creation of our new `home` route and analyze that code:

- defining `name` and `url` params is pretty straightforward,
- `wrapper` must equal to id of **ALREADY EXISTING** DOM element,
- everything we bind to `beforeRender` property, must be a `[function]` and will be evaluated **BEFORE** rendering route template into HTML.
You can e.g. fetch data from remote API here, then get partial template and finally merge it together using e.g. [Handlebars](http://handlebarsjs.com/) template plugin. 
I'm using this also to authenticate user permissions before rendering anything.

- `afterRender` is very similar to `beforeRender` - it has to be a `[function]` and will be evaluated **AFTER** route template rendering.
You can define here e.g. all event bindings (`click` events etc.)

- `template`- You can also do here everything I've mentioned in `beforeRender` example or just pass static HTML template.

## List of Rakun.js and Rakun.js router functions and properties

Here's the list of all `rakunInstance` and `rakunRouter` object details:

- `new Rcn()` - creates new Rakun.js instance,
- `rakunInstance.newRouter()` - creates new router instance,
- `rakunInstance.stateBox` - all states are stored here as an `[array]`,
- `rakunInstance.routeBox` - all routes are stored here as an `[array]`,
- `rakunInstance.newState` - creates new state object and add it to `stateBox` array,
- `rakunInstance.findState` - searches for state by given state name, if second argument is set to `true`, it returns state's data value instead of whole state object,
- `rakunInstance.removeState` - removes state from `stateBox` array, base on given state name,
- `rakunInstance.updateState` - updates state by given state name and new state `data` value (`[function]`),
- `routerInstance.newRoute` - creates new route object and adds it to `routeBox` array,
- `routerInstance.findRoute()` - searches for route with given route name or url,
- `routerInstance.findRouteByUrl()` - searches for route by given route url,
- `routerInstance.findRouteByName()` - searches for route by given route name,
- `routerInstance.redirect()` - redirects application to other route by give route name

If You're curious You'll probably find couple other methods in un-minified version of Rakun.js. I've decided to not mention them here yet, because they're in very experimental state at the moment.

And that's all for now! I hope this post introduced You properly to start developing new app using Rakun.js :)

If You have any questions, feel free to add a comment below, or [tweet to me](http://twitter.com/lukaszkups) directly.

Best,

-- ł.
