import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../util/constantes";

export default function FormProduto () {

	const [idProduto, setIdProduto] = useState();
const [codigo, setCodigo] = useState();
const [titulo, setTitulo] = useState();
const [descricao, setDescricao] = useState();
const [valorUnitario, setValorUnitario] = useState();
const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();


const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get(ENDERECO_API + "api/produto/" + state.id)
    .then((response) => {
	setIdProduto(response.data.id)
    setCodigo(response.data.codigo)
	setTitulo(response.data.titulo)
    setDescricao(response.data.descricao)
	setValorUnitario(response.data.valorUnitario)
	setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
	setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
		})
	}
   }, [state])


	function salvar () {

		let produtoRequest = {

			codigo:codigo,
			titulo:titulo,
			descricao:descricao,
			valorUnitario:valorUnitario,
			tempoEntregaMinimo:tempoEntregaMinimo,
			tempoEntregaMaximo:tempoEntregaMaximo
		}

		if (idProduto != null) { //Alteração:
			axios.put(ENDERECO_API + "api/produto/" + idProduto, produtoRequest)
			.then((response) => { console.log('Produto alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter um produto.') })
		} else { //Cadastro:
			axios.post(ENDERECO_API + "api/produto", produtoRequest)
			.then((response) => { console.log('Produto cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o Produto.') })
		}
 
	}

        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

					{ idProduto === undefined &&
                  <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                       }
                  { idProduto != undefined &&
                  <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }


                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Código'
										maxLength="100"
										value={codigo}
										onChange={e => setCodigo(e.target.value)}
									/>

									<Form.Input
										fluid
										label='titulo'
										value={titulo}
										onChange={e => setTitulo(e.target.value)} 
										
									/>

								
									<Form.Input
										fluid
										label='Descrição'
                                        width={6}
										value={descricao}
										onChange={e => setDescricao(e.target.value)}
										placeholder ="Descrição" 
										/> 
								</Form.Group>
								
								<Form.Group>

									<Form.Input
										fluid
										label='valorUnitario'
                                        width={6}
										value={valorUnitario}
										onChange={e => setValorUnitario(e.target.value)} 
										 
										/> 
								
                                    <Form.Input
                                          fluid
                                          label='tempoEntregaMinimo'
                                           width={6}
											value={tempoEntregaMinimo}
											onChange={e => setTempoEntregaMinimo(e.target.value)} 
                                             
                                        /> 
										
										<Form.Input
                                          fluid
                                          label='tempoEntregaMaximo'
                                           width={6}
											value={tempoEntregaMaximo}
											onChange={e => setTempoEntregaMaximo(e.target.value)} 
                                             
                                        /> 
                                  

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>
									
								<Link to={'/list-produto'}>
									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'>
										<Icon name='reply' />
										Voltar
									
									</Button>
									</Link>
									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={() => salvar()}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}


