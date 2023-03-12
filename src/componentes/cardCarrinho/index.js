import './cardCarrinhoStyle.css'

function CardCarrinho(){
    return(
        <div className='CardCarrinho'>
            <p className="imgCardCarrinho">
                IMAGEM PRODUTO
            </p>

            <br></br>

            <p className='desImgCarrinho'>DESCRIÇÃO PRODUTO</p>
        </div>
    );
}

export default CardCarrinho;