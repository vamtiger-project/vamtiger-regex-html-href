"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const space = '\\s*?';
const quote = `("|')`;
const pattern = `
    href
    ${space}
    =
    ${space}
    ${quote}
    (?<href>
        .*?
    )
    ${quote}
`;
const flags = 'xmnsi';
const regex = XRegExp(pattern, flags);
exports.default = regex;
//# sourceMappingURL=index.js.map