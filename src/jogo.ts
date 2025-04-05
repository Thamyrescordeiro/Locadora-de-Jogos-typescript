export class Jogo {
    constructor(
      public id: number,
      public titulo: string,
      public genero: string,
      public preco: number
    ) {}
  
    toString(): string {
      return `ID: ${this.id} | Título: ${this.titulo} | Gênero: ${this.genero} | Preço: R$${this.preco.toFixed(2)}`;
    }
  }