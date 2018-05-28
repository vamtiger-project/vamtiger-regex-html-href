import * as XRegExp from 'xregexp';

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

export default regex;

export interface IMatch {
    href?: string;
}

export type Match = RegExpExecArray & IMatch;