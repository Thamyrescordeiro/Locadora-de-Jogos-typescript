"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var Jogo = /** @class */ (function () {
    function Jogo(id, titulo, genero, preco) {
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.preco = preco;
    }
    Jogo.prototype.toString = function () {
        return "ID: ".concat(this.id, " | T\u00EDtulo: ").concat(this.titulo, " | G\u00EAnero: ").concat(this.genero, " | Pre\u00E7o: R$").concat(this.preco.toFixed(2));
    };
    return Jogo;
}());
exports.Jogo = Jogo;
