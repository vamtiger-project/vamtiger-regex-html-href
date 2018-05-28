"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const XRegExp = require("xregexp");
const __1 = require("../..");
const mock_data_1 = require("./mock-data");
describe('vamtiger-regex-html-href should match', function () {
    it('href', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const expected = 'some/stylesheet/link/index.css';
            const match = mock_data_1.default.match(__1.default);
            const xMatch = XRegExp.exec(mock_data_1.default, __1.default);
            chai_1.expect(match).to.be.ok;
            chai_1.expect(match[1]).to.equal(expected);
            chai_1.expect(xMatch).to.be.ok;
            chai_1.expect(xMatch[1]).to.equal(expected);
            chai_1.expect(xMatch.href).to.equal(expected);
        });
    });
});
//# sourceMappingURL=index.spec.js.map