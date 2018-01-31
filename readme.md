# preact-sockette [![NPM](https://img.shields.io/npm/v/preact-sockette.svg)](https://www.npmjs.com/package/preact-sockette)

> A (303 byte gzip) [Sockette](https://github.com/lukeed/sockette) component for Preact

This is a very light component that exposes `sockette`'s [API](https://github.com/lukeed/sockette#api) via component properties.

Please note that (1) `context.ws` is the active `WebSocket`, (2) nothing is rendered to the DOM and (2) the `WebSocket` is closed before unmounting!

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

  sendMessage = _ => {
    // WebSocket available in context!
    this.context.ws.send('Hello, world!');
  }

  render() {
    return (
      <div class="demo">
        <button onclick={ this.sendMessage }>SEND</button>

        <Sockette
          url="wss://..."
          maxAttempts={ 25 }
          onopen={ this.onOpen }
          onmessage={ this.onMessage }
          onreconnect={ this.onReconnect }
        />
      </div>
    );
  }
}
```


## Properties

Please see [Sockette's Options](https://github.com/lukeed/sockette#socketteurl-options) &mdash; all `props` are passed _directly_ to `sockette`.

#### url
Type: `String`<br>

The URL you want to connect to &mdash; see [Sockette's docs](https://github.com/lukeed/sockette#url).


## Context

The active `WebSocket` is mounted to your component's `context` as `context.ws`. This means that you can programmatically interact with [Sockette's API](https://github.com/lukeed/sockette#api), including `close()`, `reconnect()`, `send()`, etc.

When `<Sockette/>` is unmounted, the `WebSocket` is closed (`ws.close()`) but the `context.ws` instance is still populated. Dependning on your application, this may be useful for recycling callbacks &mdash; otherwise it can be safely ignored!


## License

MIT © [Luke Edwards](https://lukeed.com)
