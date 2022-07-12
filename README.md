# ![Brainless Frontend](https://user-images.githubusercontent.com/3176886/177050807-687a6a90-f2a3-4a40-b09f-b10836a55d5a.png)
A lazy way to create *editable static html-pages*.

<p>
<img alt="Github License" src="https://img.shields.io/github/license/SW999/brainless-frontend" />
<img alt="size" src="https://img.shields.io/github/repo-size/SW999/brainless-frontend" />
<img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/SW999/brainless-frontend" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/SW999/brainless-frontend" />
</p>

## Motivation
_**TL;DR:** This repository is designed to help you easily add large amounts of text to static pages._

<details>
<summary><strong>Read more</strong></summary>
There can be many reasons why you need a simple html-page with lots of text.

Let's say you have a popular Telegram channel. From time to time, users ask you the same questions and you are forced to answer them every time. Again and again.

A good reason to create a simple FAQ page, place it on free hosting and fix the link to this page in the header of the Telegram channel. Perhaps this will help a little to keep the mood in good condition. However, adding a large amount of text to a html-page is quite tedious.

Now you have two annoying issues.

To create static pages, of course, you can use popular solutions such as [Gatsby](https://www.gatsbyjs.com/) or [NextJS](https://nextjs.org/). But these solutions seem a bit overkill for such a simple task.

With this repository, you can create _simple editable html-pages_ with less headache.
</details>

## How to use
_**TL;DR:** Run local project, add content the same way as for MS Word, run build script, get static files._

<details>
<summary><strong>Read more</strong></summary>

![process](https://user-images.githubusercontent.com/3176886/177589292-2a85b656-252b-43d0-83f2-6e3e5a053e0c.jpg)
- Clone repo
- Install dependencies
```sh
npm i
```
- Edit file '**_client/public/index.html_**' to update title, description and so on
- Edit styles '**_client/src/App.css_**'
- Edit file '**_client/src/App.js_**' to add actual layout
- In all places where you need editable content, you should add a component:
```js
<EditableContent id='an-unique-identifier' />
```

This component has a unique required prop '**id**' and two optional props: **wrapperTag** (please find supported tags in the **WRAPPER_TAGS** constant) and **wrapperClass**.

This is the end of the development process :wink:

---

- Run to open editable version locally
```sh
npm start
```
- Add content the same way as on any text editor
- Run to prepare final static version (path '**client/build**/')
```sh
npm run build
```
- Configure [deployment process](client/README.md) if needed.
I use Github Pages as hosting for this project. To build and deploy I have created an additional script to _**package.json**_ file:
```sh
"deploy": "npm run build && gh-pages -d client/build"
```
If you have to include an additional javascript file please do it at the end of '**client/public/index.html**' file with the _required_ CSS class '**userscript**' or update existed file:
```js
<script src="%PUBLIC_URL%/static/js/userscript.js" class="userscript"></script>
```
That's it!
</details>

## Tools and technologies
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 	![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Disclaimer
This application does not use Typescript, tests or linters. These things save a lot of time on large projects, but this is clearly too much for a static site for a couple of pages.

If for some reason, you need them, then you can easily set up them yourself. But in this case, I would recommend you consider frameworks such as **Gatsby** or **NextJs**.
