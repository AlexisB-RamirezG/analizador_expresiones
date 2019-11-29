import Decoder from "./decoder.js";

let resultDiv = document.querySelector("#result"),
    pathsDiv = document.querySelector("#paths");

document.querySelector("#resolve").addEventListener("click", () => {
    m.sendToDecoder(document.querySelector("#equation").value);
});

class Main {
    constructor() {
        this._decoder = new Decoder();
    }

    sendToDecoder(equation) {
        let results = this._decoder.decodeAndSolveEquation(equation);
        this._printResults(results);
    }

    _printResults(results) {
        resultDiv.innerHTML = "Resultado: " + results[2];
        pathsDiv.innerHTML = "Pre Order: " + results[0] + "<br>" + "Post Order: " + results[1];
    }
}

let m = new Main();