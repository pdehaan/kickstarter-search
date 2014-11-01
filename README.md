# kickstarter-search

Search Kickstarter by keyword using Node.js

## How do even?

You can install the `kickstarter-search` module using npm using the following command:

```sh
$ npm install pdehaan/kickstarter-search --save
```

To use the module, simply require `kickstarter-search` and call the `search()` method:

```js
'use strict';

var kickstarter = require('kickstarter-search');

kickstarter.search('jquery').then(console.log, console.error);
```

The `kickstarter-search` module cURLs the data from `kickstarter.com/projects/search.json?term={{term}}` and returns the results as JSON (using promises).
