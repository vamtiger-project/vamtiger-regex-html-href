import { expect } from 'chai';
import * as XRegExp from 'xregexp';
import { default as regex, Match } from '../..';
import html from './mock-data';

describe('vamtiger-regex-html-href should match', function () {
    it('href', async function () {
        const expected = 'some/stylesheet/link/index.css';
        const match = html.match(regex) as RegExpMatchArray;
        const xMatch = XRegExp.exec(html, regex) as Match;

        expect(match).to.be.ok;
        expect(match[1]).to.equal(expected);

        expect(xMatch).to.be.ok;
        expect(xMatch[1]).to.equal(expected);
        expect(xMatch.href).to.equal(expected);
    })
})