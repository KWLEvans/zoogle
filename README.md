# Zoogle

Everything you never wanted to know about animals

**Zoogle** brings you the power to search nearly 32,000 datasets from around the world for minimal information on animals and scientific citations about them. Combining 3 seperate APIs (GBIF, Google Maps, Media Wiki) to create one unforgettable experience, **Zoogle** is certainly unique and possibly powerful as well.

## Installation

Requires **npm** and **bower** installed in order to run.

Step 1: **Clone this repository to your local computer**

```console
git clone [url]
```

Step 2: **Install all development and production dependencies from the project root directory**

```console
npm install
```
```
bower install
```

Step 3: **Create a file called `.env` in your root directory and export your Google Maps API key as `googleKey`**

```js
exports.googleKey = "YOUR KEY HERE";
```

Step 4: **Use _gulp_ to build compile the app**

```console
gulp build
```

**Note:** You can create a minified production build of the app by adding the `--production` tag

```console
gulp build --production
```

Step 5: **Use _Browser Sync_ to run a local server instance**

```console
gulp serve
```

Step 6: **Enter an animal name and click `Search` to explore the wild and crazy world of unregulated, user-generated data!**


## Known Bugs

* **Zoogle's** search function queries the wikipedia page for an animal and requires that the page has a **_Binomial Name_** field. Without it, everything breaks.
* If a query is too generic, it will return limited taxonomy and likely no occurences data.
* If there is no occurences data for the given animal, the map will not display.


## License

MIT License. Copyright 2017 Keith Evans and Zach Swanson
