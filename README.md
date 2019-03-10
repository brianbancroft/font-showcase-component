# Font Showcase Component

Used for troubleshooting font-loading in React apps. A showcase component for font families that displays _all_ of the font weights for a given font-family, both regular and italicized.

Use this when you want to ensure that all of your web-fonts are being loaded.

![screenshot](./screenshot.png)

## Usage

Add this component anywhere you wish to test all the font weights in your font family which you've loaded. Import, and show the component. 

```js
import FontShowcase from "font-showcase-component";

<FontShowcase fontFamily="'Raleway', sans-serif" />;
```
