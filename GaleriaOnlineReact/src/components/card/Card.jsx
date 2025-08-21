import "./Card.css"
import imgCard from '../../assets/img/stitch.png'
import imgPen from '../../assets/img/pen.png'
import imgTrash from '../../assets/img/trash.png'

export const Card = ({tituloCard}) => {
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