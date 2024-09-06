import { Button, Stack } from "@mui/material";
import './Produto.css'
import React from "react";
import { useState } from "react";
import CustomTextField from "../../components/custom/CustomTextField";
import Subtitulo from "../../components/custom/Subtitulo";
import Navegacao from "../../components/custom/Navegacao";

const ProdutoCreate = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('nome' + nome);
        console.log('descricao' + descricao); 
        console.log('preco' + preco); 
    }
    return (
        <div className='container-produto'>
            <section>
                <form onSubmit={handleSubmit}>
                <Subtitulo
                    texto="Cadastre um produto"
                />
                <Subtitulo
                    texto=""
                />
                    <Stack
                        spacing={3}
                        alignItems="right"
                        direction="column"
                    >
                        <CustomTextField 
                            label='Nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <CustomTextField
                            label='Descrição'
                            value={descricao}
                            onChange={(e) => setNome(e.target.value)}
                        />                    
                        <CustomTextField
                            label='Preço'
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />                   
                        <Button variant="contained">Cadastrar</Button>
                        <Navegacao
                            rotaVoltar='/produto-lista'
                        />                    
                    </Stack>
                </form>                           
            </section>
        </div>
    )
};

export default ProdutoCreate;