export default class List {
    constructor() {
        this._start = null;
        this._end = null;
    }

    addToList(node) {
        if (this._start === null) {
            this._start = node;
        } else if (this._end === null) {
            this._start.next = node;
            this._end = node;
            this._end.prev = this._start;
        } else {
            this._end.next = node;
            node.prev = this._end;
            this._end = node;
        }
    }

    buildTree() {
        this._minimizeMultAndDiv(this._start);
        this._minimizeAddAndSubs(this._start);
        return this._start;
    }

    _minimizeMultAndDiv(start) {
        while (start != null) {
            if ((start.char == "/") || (start.char == "*")) {
                this._changeDoubleLinks(start);
            }
            start = start.next;
        }
    }

    _minimizeAddAndSubs(start) {
        while (start != null) {
            if ((start.char == "+") || (start.char == "-")) {
                this._changeDoubleLinks(start);
            }
            start = start.next;
        }
    }

    _changeDoubleLinks(start) {
        if (start.prev == this._start && start.next == this._end) {
            start.right = start.next;
            start.left = start.prev;
            this._start = start;
            this._end = null;
            start.next = null;
            start.prev = null;
        } else if (start.prev == this._start) {
            start.right = start.next;
            start.left = start.prev;
            this._start = start;
            start.prev = null;
            start.next = start.next.next;
            start.next.prev = start;
        } else if (start.next == this._end) {
            start.right = start.next;
            start.left = start.prev;
            this._end = start;
            start.next = null;
            start.prev.prev.next = start;
            start.prev = start.prev.prev;
        } else {
            start.right = start.next;
            start.left = start.prev;
            start.prev.prev.next = start;
            start.prev = start.prev.prev;
            start.next = start.next.next;
            start.next.prev = start;
        }
    }
}