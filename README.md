# VAMTIGER Bash
[VAMTIGER Regex HTML HREF](https://github.com/vamtiger-project/vamtiger-regex-html-href) will match an href for a defined html string.

## Installation
[VAMTIGER Regex HTML HREF](https://github.com/vamtiger-project/vamtiger-regex-html-href) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-regex-html-href
```
or
```bash
yarn add vamtiger-regex-html-href
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Regex HTML HREF](https://github.com/vamtiger-project/vamtiger-regex-html-href):
```javascript
import regex from 'vamtiger-regex-html-href';
```
or
```javascript
const regex = require('vamtiger-regex-html-href').default;
```

[VAMTIGER Regex HTML HREF](https://github.com/vamtiger-project/vamtiger-regex-html-href) will return a list of linked stylesheets for defined HTML document text.:
```javascript
const regex = require('vamtiger-regex-html-href').default;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="some/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>`;
const match = html.match(regex);

/*
 * if (match)
 *     match[1] = 'some/stylesheet/link/index.css'
 */
```

Named capture groups can be referenced when used together with [XRegExp](https://www.npmjs.com/package/xregexp):
```javascript
const XRegExp = require('xregexp');
const regex = require('vamtiger-regex-html-title').default;
// import {default as regex, Match} from 'vamtiger-regex-html-title'; // Typescript
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="some/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>`;
const match = XRegExp.exec(input, regex);
// const match: Match = XRegExp.exec(input, regex); // Typescript

/**
 * if (match)
 *     match.href === 'some/stylesheet/link/index.css'
 **/
```