import './Galeria.css'
import icon from "../../assets/img/upload-1.svg"
import { Botao } from '../../components/botao/Botao'
import {Card} from '../../components/card/Card'

export const Galeria = () => {
    return (
        <>
            <h1 className='tituloGaleria'> Galeria online </h1>

            <form className="formulario" onSubmit="">
                <div className="campoNome">
                    <label>Nome</label>
                    <input type="text" className='inputNome' />
                </div>
                <div className="campoImagem">
                    <label className="arquivoLabel">
                        <i><img src={icon} alt="Icone de upload de imagem" /></i>
                        <input type="file" className="arquivoInput" />
                    </label>
                </div>
                    <Botao nomeBotao="Cadastrar"/>
            </form>

            <div className='campoCards'>
                <Card tituloCard="luis gostoso"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
                <Card tituloCard="Stich"/>
            </div>
        </>
    )
}