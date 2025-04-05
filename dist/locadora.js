"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var jogo_1 = require("./jogo");
var Locadora = /** @class */ (function () {
    function Locadora() {
        this.jogos = [];
        this.idAtual = 1;
    }
    Locadora.prototype.criarJogo = function () {
        console.log("\n--- Cadastro de Jogo ---");
        var titulo = readline.question("Título: ");
        var genero = readline.question("Gênero: ");
        var preco = parseFloat(readline.question("Preço: "));
        var jogo = new jogo_1.Jogo(this.idAtual++, titulo, genero, preco);
        this.jogos.push(jogo);
        console.log("\n✅ Jogo cadastrado com sucesso!\n");
    };
    Locadora.prototype.listarJogos = function () {
        console.log("\n--- Lista de Jogos ---");
        if (this.jogos.length === 0) {
            console.log("Nenhum jogo cadastrado.");
        }
        else {
            this.jogos.forEach(function (jogo) { return console.log(jogo.toString()); });
        }
        console.log();
    };
    Locadora.prototype.atualizarJogo = function () {
        console.log("\n--- Atualizar Jogo ---");
        var id = parseInt(readline.question("ID do jogo: "));
        var jogo = this.jogos.find(function (j) { return j.id === id; });
        if (!jogo) {
            console.log("\n❌ Jogo não encontrado!\n");
            return;
        }
        jogo.titulo = readline.question("Novo t\u00EDtulo (".concat(jogo.titulo, "): ")) || jogo.titulo;
        jogo.genero = readline.question("Novo g\u00EAnero (".concat(jogo.genero, "): ")) || jogo.genero;
        var novoPreco = readline.question("Novo pre\u00E7o (R$".concat(jogo.preco.toFixed(2), "): "));
        if (novoPreco)
            jogo.preco = parseFloat(novoPreco);
        console.log("\n✅ Jogo atualizado com sucesso!\n");
    };
    Locadora.prototype.deletarJogo = function () {
        console.log("\n--- Deletar Jogo ---");
        var id = parseInt(readline.question("ID do jogo: "));
        var index = this.jogos.findIndex(function (j) { return j.id === id; });
        if (index === -1) {
            console.log("\n❌ Jogo não encontrado!\n");
            return;
        }
        this.jogos.splice(index, 1);
        console.log("\n✅ Jogo removido com sucesso!\n");
    };
    Locadora.prototype.menu = function () {
        var opcao = readline.question("Escolha uma opção: ");
        console.log("Você digitou:", opcao);
        var executando = true;
        while (true) {
            console.log("\n🎮 Locadora de Jogos 🎮");
            console.log("1. Cadastrar Jogo");
            console.log("2. Listar Jogos");
            console.log("3. Atualizar Jogo");
            console.log("4. Deletar Jogo");
            console.log("5. Sair");
            var opcao_1 = readline.questionInt("Escolha uma opção: ");
            switch (opcao_1) {
                case 1:
                    this.criarJogo();
                    break;
                case 2:
                    this.listarJogos();
                    break;
                case 3:
                    this.atualizarJogo();
                    break;
                case 4:
                    this.deletarJogo();
                    break;
                case 5:
                    console.log("\n👋 Saindo do sistema...\n");
                    executando = false;
                    break;
                default:
                    console.log("\n❌ Opção inválida! Tente novamente.\n");
            }
        }
    };
    return Locadora;
}());
var locadora = new Locadora();
locadora.menu();
