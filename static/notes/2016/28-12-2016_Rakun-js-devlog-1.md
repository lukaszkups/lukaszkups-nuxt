---
title: 'Rakun.js devlog #1'
tags:
  - rakunjs
  - devlog
  - programming
  - javascript
  - frameworks
date: 2016-12-28 00:00:00
---

Rakun.js is a un-opinionated, javascript plugin for wide usage.
Currently in beta stage, but it is used already in couple projects, such as one of my client's internal android mobile app or as a SPA framework for [inku.js](https://github.com/lukaszkups/inku) interface. 

## The idea behind Rakun.js creation

Rakun.js is developed with zero-dependency approach and can be used with existing tools, e.g. [axios](https://github.com/mzabriskie/axios) or [jQuery](http://jquery.com) plugins.
The main reason behind Rakun.js creation is tiredness of disease, most commonly known as javascript fatigue.

Nowadays developers tend to complain about rapid development of popular tools and approaches of using them.

I was one of them.

But I decided to free ourself from this trend by creating [Rakun.js](https://github.com/lukaszkups/rakun.js).
I'm into web development since I've learned about what is HTML and when using `<table><table>` was the only right approach of creating websites.
Everything was going into right direction, advanced support of HTML5 and css3 features was a good thing. Javascript development bacame so less hack-ish, that even jQuery became obsolete when starting new project.

Then SPA happened.

Interactive websites became a monsters, called "Single Page Applications" - on the one side it was has pros, e.g.: unification of structuring many javascript files in each project or spreading functionalities between them - You name it. 

But tools that were meant to just support web development wanted to be more and more universal, which led to their overcomplication. Task runners which were at first an optional helpers for repetitive tasks has transformed into necessary components of SPAs. There's even a meme about random programmer who - after spending a whole weekend configuring webpack - is finally ready to start programming his side project. 

We have new abstraction layers, such as Virtual DOM (and I'm waiting for another abstraction layer for it - *we need to go deeper* trolololo :D ) - but don't get me wrong - it's a good thing that people are making new, awesome tools, but most of programmers just *follow the hype* and use them everywhere they can (even they shouldn't).

Personally, I was really tired/frustrated/You-name-it of constantly keeping up to date with another shiny react-like-but-smaller/better/more-awesome lib (which I even haven't like to work with in the first place).
I had a constant feeling that I'm not up-to-date with my technologic field of expertise.

Finally I've decided to just *fuck that* and I've created a tool that will help me build stuff like I've used and loved to - without generating tons of HTML code in javascript files using weird HTML-ish syntax (to be honest I remember times when generating whole apps with js was an anti-pattern - for me, even if I'm aware of pros and cons about this it still feel unnatural a bit).

## Ending words

In the following Rakun.js devlogs I'll present the way how it works and share some basic usage tips.

And how's about You? Do You follow the hype or prefer to work classy?

Best,

-- ł.
