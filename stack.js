export default class Stack {
    constructor() {
        this._end = null;
    }

    get end() {
        return this._end;
    }

    push(node) {
        if (this._end == null) {
            this._end = node;
        } else {
            node.prev = this._end;
            this._end = node;
        }
    }

    pop() {
        let value = this._end;
        this._end = this._end.prev;
        return value;
    }
}