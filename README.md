# CraigslistMiniApp

A Craigslist Mini App for Telegram.
Mini Apps, also called Web Apps, are flexible interfaces that can be launched right inside Telegram.
They are written in HTML and JavaScript and can completely replace any website.
The code is intended to be reusable for any developer starting to build Mini Apps for Telegram.

### How to boot your first Mini App

1. You should host a webpage. The easiest way is host a page on GitHub. For that, you should
    a. create a new repository and add a new file `index.html`
    b. add the following content to `index.html` and save.
        ```
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <script src="https://telegram.org/js/telegram-web-app.js?1"></script>
        </head>
        <body>
            Hello World!
            <script>
                Telegram.WebApp.ready();
            </script>
        </body>
        </html>
        ```
    c. on GitHub, goto Settings --> Pages --> Build and deployment, to deploy it

2. Find [@BotFather](https://t.me/BotFather) on Telegram, creat a new bot, select your bot --> Bot Settings --> Menu Button --> add the url of the `index.html` you just hold. Then you should could launch the Mini App using the Bot's menu button.

### File Descriptions

* `index.html` is the main page that you will add to bot's menu and Telegram loads.
* `script.js` is the javascripts.
* `styles.css` is the css (cascating style sheet) file for `index.html`
* `products.json` is the mock product list. Change this to your API address in the realworld.
* `simpleserver.py` holds the file on `127.0.0.1:8000` so that developer can debug locally

### Basic Design

* The seller, he should be able to __ADD, VIEW, EDIT, and DELIST__ his items.
* The buyer should be able to view the items easily and get the seller's contact after some clicks.
* There may be several categories.
* Users can contact the developer for bug reports/spam reports.

### User-Friendly Design Checklist

- [ ] All elements should be responsive
- [ ] All inputs and images should contain labels for accessibility purposes.
- [ ] The app should deliver a seamless experience by monitoring the dynamic theme-based colors provided by the API and using them accordingly.

### Document Requirement Checklist

- [ ] GIF/video demo for Phone and desktop;
- [ ] Showing that our Mini App works for different themes

### Helpful Resources

* [revenkroz/telegram-web-app-bot-example](https://github.com/revenkroz/telegram-web-app-bot-example/tree/master)
* [Offical Docs](https://core.telegram.org/bots/webapps)
