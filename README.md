# leyla

A cli that automatically selects DOM elements in an HTML file.

---

Just type leyla and give it:
an html file to look for nodes in
a javascript file to write the 'querySelector's to

---

Suppose you have an html file called 'test.html' with contents below.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
# https://tea.xyz/what-is-this-file
---
version: 1.0.0
codeOwners:
  - '0xBe7f27895c64D1d52555bf7b8Be711A33DdF85B9'
quorum: 1

        <div id="app">
            <img src="" alt="" class="logo" />
            <div id="upper"></div>
            <input type="text" class="credential-input" />
            <div id="lower"></div>
        </div>

        <div id="birsey" class="baskasey"></div>

        <footer>
            <div id="sitemap">
                <ul id="links">
                    <li class="link small"></li>
                    <li class="link small"></li>
                    <li class="link small"></li>
                    <li class="link small"></li>
                    <li class="link small"></li>
                </ul>
            </div>
        </footer>
    </body>
</html>
```

When you run 'leyla' in the command line, it will prompt you for an html file and a javascript file.
We must enter an html file that actually exists. But for the javascript file, we can give it a file that doesn't necessarily exist. leyla will create a new javascript file for us. (by the way, when specifying the names of the files, we can ignore extensions.)

Let's type 'test' for the html, and either a js file that exists, or one that doesn't exist, for the javascript question. leyla will create these 'querySelector's for us in the javascript file:

```js
const appDiv = document.querySelector("#app")
const logoImg = document.querySelectorAll(".logo")
const upperDiv = document.querySelector("#upper")
const credentialInputInput = document.querySelectorAll(".credential-input")
const lowerDiv = document.querySelector("#lower")
const birseyDiv = document.querySelector("#birsey")
const baskaseyDiv = document.querySelectorAll(".baskasey")
const sitemapDiv = document.querySelector("#sitemap")
const linksUl = document.querySelector("#links")
const linkLi = document.querySelectorAll(".link")
const smallLi = document.querySelectorAll(".small")
```

that's all it does.

I made this CLI, because I have been creating vanilla javascript projects lately, and selecting every element in the DOM was getting a bit boring.
