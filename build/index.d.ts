declare const regex: RegExp;
export default regex;
export interface IMatch {
    href?: string;
}
export declare type Match = RegExpExecArray & IMatch;
