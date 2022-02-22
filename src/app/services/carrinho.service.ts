import { Oferta } from './../components/shared/oferta.model';
import { ItemCarrinho } from '../components/shared/item.carrinho.model'; 
import { ReplaySubject } from 'rxjs';

class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.itens.push(itemCarrinho)
        }

    }
    public totalCarrinhoCompras(): any {

        let total: number = 0;

        const totalReal = new ReplaySubject(1)

        this.itens.forEach((item: ItemCarrinho) => {
           total = total + (item.valor * item.quantidade)
        });

        totalReal.next(1);
        totalReal.subscribe(console.log);

        return totalReal;
    }
    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        }
    }

    public diminuirQuantidade(itemCarrinho: ItemCarrinho):void {
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade -= 1

            if(itemCarrinhoEncontrado.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1)
            }
        }
    }

    public limparCarrinho(): void {
        this.itens = []
    }
}

export { CarrinhoService }