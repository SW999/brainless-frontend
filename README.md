# ![Brainless Frontend](https://user-images.githubusercontent.com/3176886/177050807-687a6a90-f2a3-4a40-b09f-b10836a55d5a.png)
A lazy way to create *editable static html-pages*.

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
I use Github Pages as hosting for this project. To deploy I have pushed build to branch **gh-pages** via
```sh
git subtree push --prefix client/build origin gh-pages
```
and created an additional script to _**package.json**_ file:
```sh
"postbuild": "git subtree split --prefix client/build -b gh-pages && git push -f origin gh-pages:gh-pages && git branch -D gh-pages"
```
If you have to include an additional javascript file please do it at the end of '**client/public/index.html**' file with the _required_ CSS class '**userscript**' or update existed file:
```js
<script src="%PUBLIC_URL%/static/js/userscript.js" class="userscript"></script>
```
That's it!

## Disclaimer
This application does not use Typescript, tests or linters. These things save a lot of time on large projects, but this is clearly too much for a static site for a couple of pages.

If for some reason, you need them, then you can easily set up them yourself. But in this case, I would recommend you consider frameworks such as **Gatsby** or **NextJs**.
