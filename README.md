# Pushed SDK
![CI](https://github.com/itaibo/pushed-sdk/actions/workflows/ci.yml/badge.svg)

Unofficial pushed.co JavaScript SDK. Has been created using  The [Pushed API Docs](https://about.pushed.co/docs/api) as reference.

### Usage
Install the package:
```sh
npm install pushed-sdk
````

Get your credentials and intialize the class:

```js
import Pushed from 'pushed-sdk';

const pushed = new Pushed({
	app_key: 'JIUHIdeijfoehyfwuijd',
	app_secret: 'JHIGUYTIKODmjwnhbgydfuwJOGkpdfijoeuhy8fuw9i0dowjhug8Y',
});

// Send notification to all users subscribed to app
await pushed.notifications.send({
	content: 'Hey from the pushed-sdk package!',
	content_extra: 'https://github.com/itaibo/pushed-sdk',
	content_type: 'url',
	target_type: 'app',
});
```

