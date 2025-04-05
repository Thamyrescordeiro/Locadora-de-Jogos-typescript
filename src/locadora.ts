import * as readline from "readline-sync";
import { Jogo } from "./jogo";



class Locadora {
  private jogos: Jogo[] = [];
  private idAtual: number = 1;

  criarJogo(): void {
    console.log("\n--- Cadastro de Jogo ---");
    const titulo = readline.question("Título: ");
    const genero = readline.question("Gênero: ");
    const preco = parseFloat(readline.question("Preço: "));

    const jogo = new Jogo(this.idAtual++, titulo, genero, preco);
    this.jogos.push(jogo);

    console.log("\n✅ Jogo cadastrado com sucesso!\n");
  }

  listarJogos(): void {
    console.log("\n--- Lista de Jogos ---");
    if (this.jogos.length === 0) {
      console.log("Nenhum jogo cadastrado.");
    } else {
      this.jogos.forEach((jogo) => console.log(jogo.toString()));
    }
    console.log();
  }

  atualizarJogo(): void {
    console.log("\n--- Atualizar Jogo ---");
    const id = parseInt(readline.question("ID do jogo: "));
    const jogo = this.jogos.find((j) => j.id === id);

    if (!jogo) {
      console.log("\n❌ Jogo não encontrado!\n");
      return;
    }

    jogo.titulo = readline.question(`Novo título (${jogo.titulo}): `) || jogo.titulo;
    jogo.genero = readline.question(`Novo gênero (${jogo.genero}): `) || jogo.genero;
    const novoPreco = readline.question(`Novo preço (R$${jogo.preco.toFixed(2)}): `);
    if (novoPreco) jogo.preco = parseFloat(novoPreco);

    console.log("\n✅ Jogo atualizado com sucesso!\n");
  }

  deletarJogo(): void {
    console.log("\n--- Deletar Jogo ---");
    const id = parseInt(readline.question("ID do jogo: "));
    const index = this.jogos.findIndex((j) => j.id === id);

    if (index === -1) {
      console.log("\n❌ Jogo não encontrado!\n");
      return;
    }

    this.jogos.splice(index, 1);
    console.log("\n✅ Jogo removido com sucesso!\n");
  }

  menu(): void {
    let executando = true;
    while (true) {
      console.log("\n🎮 Locadora de Jogos 🎮");
      console.log("1. Cadastrar Jogo");
      console.log("2. Listar Jogos");
      console.log("3. Atualizar Jogo");
      console.log("4. Deletar Jogo");
      console.log("5. Sair");

      const opcao = readline.questionInt("Escolha uma opção: ");

      switch (opcao) {
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
  }
}

const locadora = new Locadora();
locadora.menu();
