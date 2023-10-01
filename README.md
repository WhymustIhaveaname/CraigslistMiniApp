# CraigslistMiniApp

A Craigslist Mini App for Telegram.
Mini Apps, also called Web Apps, are flexible interfaces that can be launched right inside Telegram.
They are written in HTML and JavaScript and can completely replace any website.
The code is intended to be reusable for any developer starting to build Mini Apps for Telegram.
The Mini App of this repo is [craiglistminiappbot](https://t.me/craiglistminiappbot)

### How to boot your first Mini App

1. You should host a webpage. The easiest way is to host a page on GitHub. For that, you should

    a. create a new repository and add a new file `index.html`

    b. add the following content to `index.html` and save.

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

    c. on GitHub, go to Settings --> Pages --> Build and deployment --> select Branch and then Save, to deploy it

3. Find [@BotFather](https://t.me/BotFather) on Telegram, create a new bot, select your bot --> Bot Settings --> Menu Button --> add the url of the `index.html` you hold. Then, you should be able to launch the Mini App using the Bot's menu button.

### File Descriptions

* `index.html` is the main page you will add to the bot's menu and Telegram loads.
* `script.js` is the javascript.
* `styles.css` is the CSS (cascading style sheet) file for `index.html`
* `api/*` is the mock api. Change this to your API address in the real world.
* `simpleserver.py` holds the file on `127.0.0.1:8000` so that developer can debug locally

### Basic Design

* The seller, he should be able to __ADD, VIEW, EDIT, and DELIST__ his items.
* The buyer should be able to view the items easily and get the seller's contact after some clicks.
* There may be several categories.
* Users can contact the developer for bug reports/spam reports.

### User-Friendly Design Checklist

- [ ] All elements should be responsive
- [ ] All inputs and images should contain labels for accessibility purposes.
- [x] The app should deliver a seamless experience by monitoring the dynamic theme-based colors provided by the API and using them accordingly.

### Document Requirement Checklist

- [ ] GIF/video demo for Phone and desktop;
- [ ] Showing that our Mini App works for different themes

### Helpful Resources

* [revenkroz/telegram-web-app-bot-example](https://github.com/revenkroz/telegram-web-app-bot-example/tree/master)
* [Offical Docs](https://core.telegram.org/bots/webapps)
