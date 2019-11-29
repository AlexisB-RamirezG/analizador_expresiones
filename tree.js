export default class Tree {
    constructor(root) {
        this._root = root;
        this._orderString = "";
    }

    get orderString() {
        return this._orderString;
    }

    getPreOrder() {
        this._orderString = "";
        this._getPreOrderString(this._root);
        return this._orderString;
    }

    getPostOrder() {
        this._orderString = "";
        this._getPostOrderString(this._root);
        return this._orderString;
    }

    _getPreOrderString(root) {
        this._orderString += root.char;
        if (root.left != null) {
            this._getPreOrderString(root.left);
        }
        if (root.right != null) {
            this._getPreOrderString(root.right);
        }
    }

    _getPostOrderString(root) {
        if (root.left != null) {
            this._getPostOrderString(root.left);
        }
        if (root.right != null) {
            this._getPostOrderString(root.right);
        }
        this._orderString += root.char;
    }
}