export default class Node {
    constructor(char) {
        this._char = char;
        this._left = null;
        this._right = null;
        this._next = null;
        this._prev = null;
    }

    get char() {
        return this._char;
    }

    get left() {
        return this._left;
    }

    set left(nLeft) {
        this._left = nLeft;
    }

    get right() {
        return this._right;
    }

    set right(nRight) {
        this._right = nRight;
    }

    get next() {
        return this._next;
    }

    set next(nNext) {
        this._next = nNext;
    }

    get prev() {
        return this._prev;
    }

    set prev(nPrev) {
        this._prev = nPrev;
    }
}