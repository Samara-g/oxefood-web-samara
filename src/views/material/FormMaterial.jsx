import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../util/constantes";

const ufList = [
	{ key: 'o', text: 'Alagoas', value: 'AL' },
	{ key: 'f', text: 'Paraíba', value: 'PB' },
	{ key: 'm', text: 'Pernambuco', value: 'PE' },
  ]

class FormMaterial extends React.Component{
    
	state = {

		titulo: null,
		valor: null,
        responsavel:null,
		localizacao: null,
		peso: null,
		dataAquisicao: null,
      
	}

    salvar = () => {

		let MaterialRequest = {

			titulo: this.state.titulo,
			valor: this.state.valor,
            responsavel: this.state.responsavel,
			localizacao: this.state.localizacao,
			peso: this.state.peso,
			dataAquisicao: this.state.dataAquisicao,

           
		}
	
		axios.post( ENDERECO_API+ "api/material", MaterialRequest)
		.then((response) => {
			console.log('Material cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um Material.')
		})
	}


    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Material &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

							<Form.Group>

                                <Form.Input

										required
										fluid
										label='Titulo'
										maxLength="100"
										placeholder ="Titulo"
										value={this.state.titulo}
			                           onChange={e => this.setState({titulo: e.target.value})}
									/>

									<Form.Input
										fluid
										label='Valor'
										value={this.state.valor}
										onChange={e => this.setState({valor: e.target.value})} 
										placeholder ="Informe o valor"
										 />
									
							

                                    <Form.Input
										fluid
										label='Responsável'
										value={this.state.responsavel}
										onChange={e => this.setState({responsavel: e.target.value})} 
										placeholder ="Informe o responsável"
										/> 
									


                                    </Form.Group>
								
                                    <Form.Group>
                            
                                    <Form.Input
										fluid
										label='Localizacao'
                                        width={6}
										value={this.state.localizacao}
										onChange={e => this.setState({localizacao: e.target.value})} 
										placeholder ="localizacao"
										/> 
									

									<Form.Input
										fluid
										label='Peso'
                                        width={6}
										value={this.state.peso}
										onChange={e => this.setState({peso: e.target.value})}
										placeholder ="insira o peso" 
										/> 

                               
                                     <Form.Input
                                        fluid
                                        label='Data da Aquisição'
                                        width={6}>
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        	value={this.state.dataAquisicao}
										onChange={e => this.setState({dataAquisicao: e.target.value})} 
                                        /> 
									</Form.Input>

                                    </Form.Group>
  
                             
							

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>
								
									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									
									</Button>
								
									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
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
}

export default FormMaterial;