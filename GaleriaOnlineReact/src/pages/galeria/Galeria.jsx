import './Galeria.css'
import icon from "../../assets/img/upload-1.svg"
import { Botao } from '../../components/botao/Botao'
import {Card} from '../../components/card/Card'
import api from '../../Services/services'
import { useEffect, useState } from 'react'

export const Galeria = () => {

        const [cards, setCards] = useState([]);

    async function listarCards(){  
        try {
            const resposta = await api.get("imagem");
            //me manda ai as informacoes
            setCards(resposta.data);

        } catch (error) {
            console.error("Erro ao listar:", error);
            alert("Erro ao listar!");
        }
    } 

    
    useEffect(() => {
        listarCards();
    });

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
                {cards.lenght > 0 ? (
                    cards.map((e) => (
                    <Card 
                        tituloCard={e.nome}
                        img=""/>
                    ))
                ) : <p>Nenhum card cadastrado</p>}

            </div>
        </>
    )
}