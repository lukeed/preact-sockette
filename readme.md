# preact-sockette [![NPM](https://img.shields.io/npm/v/preact-sockette.svg)](https://www.npmjs.com/package/preact-sockette)

> A (302 byte gzip) [Sockette](https://github.com/lukeed/sockette) component for Preact

This is a very light component that exposes `sockette`'s [API](https://github.com/lukeed/sockette#api) via component properties.

Please note that (1) nothing is rendered to the DOM and (2) the `WebSocket` is closed before unmounting!

This module exposes three module definitions:

* **ES Module**: `dist/preact-sockette.es.js`
* **CommonJS**: `dist/preact-sockette.js`
* **UMD**: `dist/preact-sockette.min.js`

If using the UMD bundle, the library is exposed as `preactSockette` globally.

## Install

```
$ npm install --save preact-sockette
```

## Usage

_Quick example that wraps Sockette within a custom component._

```js
import { h, Component } from 'preact';
import Sockette from 'preact-sockette';

class Foobar extends Component {
  onOpen = ev => {
    console.log('> Connected!', ev);
  }

  onMessage = ev => {
    console.log('> Received:', ev.data);
  }

  onReconnect = ev => {
    console.log('> Reconnecting...', ev);
  }

  render() {
    return (
      <Sockette
        url="wss://..."
        maxAttempts={ 25 }
        onopen={ this.onOpen }
        onmessage={ this.onMessage }
        onreconnect={ this.onReconnect }
      />
    );
  }
}
```


## Properties

Please see [Sockette's Options](https://github.com/lukeed/sockette#socketteurl-options) &mdash; all `props` are passed _directly_ to `sockette`.

#### url
Type: `String`<br>

The URL you want to connect to &mdash; see [Sockette's docs](https://github.com/lukeed/sockette#url).


## License

MIT © [Luke Edwards](https://lukeed.com)
