---
title: 'Rakun.js devlog #3 - rewrite and road to 1.0.0'
date: 2017-02-12 22:28:15
tags: [programming, rakunjs, javascript, devlog]
---

Rakun.js is:

> Another wannabe un-opinionated javascript framework for fast and flexible development

And it's almost at 0.2.0 version.

Totally rewritten, some functionality is currently lost, but it will be restored around 0.4.0 release.

At the moment, Rakun.js has 2 main functionalities:

- State management,
- Component management

So, as You can see, Router module is actually missing, but as I've mentioned above it will be restored soon (with even more capabilities than before).

At the current state, I won't be writing any tutorial here (it can be easily become outdated), but I've prepared an simple example of current Rakun.js usage: [http://rakun.lukaszkups.net/example/](http://rakun.lukaszkups.net/example/) .

For current Rakun.js source code, please visit [main repo's dev branch](https://github.com/lukaszkups/rakun.js/tree/dev/src).

## Roadmap and next release date

To be honest: when it will be ready. I've got at the moment couple other commercial projects with strict deadlines, so I don't have much more free time left (especially to develop side projects).

So far, I've worked on Rakun.js with pure joy, and I want to keep it like that. I can assure You that next release will be earlier than previous one ;)

My main roadmap for 0.3.0:

- bind state update with dependent components (users will be able to execute redraw of existing component on state update that contains component source data),
- use component's internal id counter (at the moment Rakun.js has global id component counter, but I'm aware that it can be inefficient while working with huge apps),
- refactor component `render()` method (it's currently a bit messy).

## Roadmap for 0.4.0

After releasing 0.3.0 version, I plan to develop brand new Rakun.js router module - this time it will handle nested routes with multiple url parameters.

## Roadmap for 0.5.0

For now I assume that 0.5.0 version will be a **Rakun.js 1.0.0 Release Candidate** - I suppose it will eventually contain some additional code refactoring and solutions to problems that I can't predict at the moment. I'm trying to not be so excited, but I'll be very happy if Rakun.js will be able to do things that I plan for version 0.5.0 :)

## What's between 0.5.1 - 0.9.9 version?

Asumming that my roadmap to 0.5.0 will be a totall success I plan to convert Rakun.js code to (also) ES6+ compatible version.

Additionally, I plan to cover all Rakun.js code with tests - to be honest it will be something new to me, because I've never had to write any. 

During all this work, I want to start releasing real-life examples/boilerplates of Rakun.js usage that will boost Your/mine app development even more.

If You have any suggestions/comments, please let me know.

Best,

-- ł.
