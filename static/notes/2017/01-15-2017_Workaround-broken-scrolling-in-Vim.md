---
title: Workaround broken scrolling in Vim
date: 2017-01-15 21:09:07
tags: [programming, productivity, software]
---

Since December 2016 I program exclusively in vim.  To be honest this is my 3rd approach to migrate completely, after years of using Sublime Text.
Even this blog is written from my terminal console. 
Every day I add, modify or remove couple lines in my `~/.vimrc` file, but it's a common thing, especially at the beginning of the vim journey.

It still have couple issues which I haven’t solved yet, but in overall I’m very satisfied with current setup - I think this is most customized vim config I’ve ever made.
It has couple annoyances, which are mostly easy to fix or avoid, but one particular of them is notably importunate.

## The good, the bad, the scrolling

In my vim config, I use a lot of plugins - which most important for me are these two: [NerdTree](https://github.com/scrooloose/nerdtree) and [Tagbar](https://github.com/majutsushi/tagbar).

Although I use them to totally different tasks, they have one thing in common: they split virtually my vim screen into multiple, smaller ones.

Here's the screenshot of my vim example working window:

![vim screenshot](/images/vim-scroll-1.png)

As You can see, my vim screen is divided by 3 sections: NerdTree (left sidebar), code (center) and Tagbar (right sidebar).
The problem with working using such approach is that when You want to scroll through huge file, vim needs to recalculate and redraw position of all visible lines on screen. 
That means that if You are scrolling through Your code section, vim need to redraw not only code section, but all 3 sections, even if they're not moving at the moment.

To visualize for better understanding, I'll try to select couple lines of code only in such split using mouse:

![vim screenshot](/images/vim-scroll-2.png)

As You can see above, those 3 sections are threated just like one text file - it's because those split aren't **real** window splits, but **virtual**.

You can belive or not, but it can be a pretty hard task for Your computer (to be honest, I don't know why) and can cause very slow/delayed scrolling.

To prevent that, You can add these lines to Your `~/.vimrc` file (found in some stackoverflow thread):

```
set ttyfast
set lazyredraw
```

Code above will optimize Your inside-vim scrolling, but now You also can experience some scrolling glitches (or just a feel of clunky scroll - sometimes line highlight will jump couple lines at once, just to keep it up with current screen state).

I wasn't really satisfied with such approach, so I've tried different bite this annoyance in a different way: I've added handy shortcuts that toggle vim sidebar panels (because when they're hidden, vim handles scrolling just fine). Here's my example keybinding:

```
map tt :NERDTreeToggle<CR> "double click t button to toggle NerdTree
map [] :TagbarToggle<CR> "click [] to toggle Tagbar
```

It is just a workaround of this problem, but suits me very well.

Here's small tip: I've noticed such (scrolling) problem on i3 processor based computer with integrated graphic card. However, it doesn't happen on i7-based one computer, with two graphic cards :)

Did anyone experienced such strange bahavior? How did You solve it? Feel free to leave a comment.

Best,

-- ł.
