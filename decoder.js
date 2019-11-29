import Node from "./node.js";
import List from "./list.js";
import Tree from "./tree.js";
import Stack from "./stack.js";

export default class Decoder {
    constructor(equation) {
        this._equationString = equation;
    }

    decodeAndSolveEquation(equation) {
        let list = new List();
        this._decodeEquation(equation, list);
        let tree = new Tree(list.buildTree(list)),
            preOrder = tree.getPreOrder(),
            postOrder = tree.getPostOrder(),
            generalStack = new Stack();
        this._decodePreOrder(preOrder, generalStack);
        let finalResult = this._solveEquation(generalStack, preOrder.length);
        let results = [preOrder,postOrder, finalResult]
        return results;
    }

    _solveEquation(generalStack, length) {
        let numberStack = new Stack();
        for (let i = length - 1; i >= 0; i--) {
            let value = generalStack.pop();
            if (value.char == "+") {
                let num1 = numberStack.pop(),
                    num2 = numberStack.pop(),
                    result = Number(num1.char) + Number(num2.char);
                numberStack.push(new Node(result));
            } else if (value.char == "-") {
                let num1 = numberStack.pop(),
                    num2 = numberStack.pop(),
                    result = Number(num1.char) - Number(num2.char);
                numberStack.push(new Node(result));
            } else if (value.char == "*") {
                let num1 = numberStack.pop(),
                    num2 = numberStack.pop(),
                    result = Number(num1.char) * Number(num2.char);
                numberStack.push(new Node(result));
            } else if (value.char == "/") {
                let num1 = numberStack.pop(),
                    num2 = numberStack.pop(),
                    result = Number(num1.char) / Number(num2.char);
                numberStack.push(new Node(result));
            } else {
                numberStack.push(new Node(value.char));
            }
        }
        let finalResult = numberStack.pop();
        return finalResult.char;
    }

    _decodePreOrder(preOrder, generalStack) {
        for (let i = 0; i <= preOrder.length - 1; i++) {
            generalStack.push(new Node(preOrder.charAt(i)));
        }
    }

    _decodeEquation(equation, list) {
        for (let i = 0; i <= equation.length - 1; i++) {
            list.addToList(new Node(equation.charAt(i)));
        }
    }
}