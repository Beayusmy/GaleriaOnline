import "./Card.css"
import imgPen from '../../assets/img/pen.png'
import imgTrash from '../../assets/img/trash.png'

export const Card = ({tituloCard, imgCard}) => {
    return(
        <>
        <div className="cardDaImagem">
            <p>{tituloCard}</p>
            <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card." />
            <div className="icons">
                <img src={imgPen} alt="Icone de caneta para realizar uma alteraçao." />
                <img src={imgTrash} alt="Icone de uma lixeira para realizar a exclusao" />
            </div>
        </div>
        </>
    )
}