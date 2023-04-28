import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';


class FormEntregador extends React.Component{
    
	state = {

		nome: null,
		cpf: null,
        rg:null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null,
        qtdEntregasRealizadas:null,
        valorFrete:null,
        enderecoRua:null,
        enderecoNumero:null,
        enderecoBairro:null,
        enderecoCidade:null,
        enderecoCep:null,
        enferecoUf: null,
        enderecoComplemento: null
      
	}

    salvar = () => {

		let EntregadorRequest = {

			nome: this.state.nome,
			cpf: this.state.cpf,
            rg: this.state.rg,
			dataNascimento: this.state.dataNascimento,
			foneCelular: this.state.foneCelular,
			foneFixo: this.state.foneFixo,
            qtdEntregasRealizadas: this.state.qtdEntregasRealizadas,
            valorFrete: this.state.valorFrete,
            enderecoRua: this.state.enderecoRua,
            enderecoNumero:this.state.enderecoNumero,
            enderecoBairro:this.state.enderecoBairro,
            enderecoCidade: this.state.enderecoCidade,
            enderecoCep: this.state.enderecoCep,
            enderecoUf: this.state.enferecoUf,
            enderecoComplemento: this.state.enderecoComplemento
           
		}
	
		axios.post("http://localhost:8082/api/entregador", EntregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um Entregador.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

                                <Form.Input

										required
										fluid
										label='Nome'
										maxLength="100"
										placeholder ="Nome Completo"
										value={this.state.nome}
			                           onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
										fluid
										label='CPF'
										>
										<InputMask 
										mask="999.999.999-99"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})} 
										placeholder ="Informe seu CPF"
										/> 
									</Form.Input>
							

                                    <Form.Input
										fluid
										label='RG'>
										<InputMask 
										mask="99.999.999"
										value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})} 
										placeholder ="Informe seu RG"
										/> 
									</Form.Input>


                                    </Form.Group>
								
                                    <Form.Group>
                                    <Form.Input
                                        fluid
                                        label='Data Nascimento'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        	value={this.state.dataNascimento}
										onChange={e => this.setState({dataNascimento: e.target.value})} 
                                        /> 
                                    </Form.Input>

                                    <Form.Input
										fluid
										label='Fone Celular'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneCelular}
										onChange={e => this.setState({foneCelular: e.target.value})} 
										placeholder ="Número de Celular"
										/> 
									</Form.Input>

									<Form.Input
										fluid
										label='Fone Fixo'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneFixo}
										onChange={e => this.setState({foneFixo: e.target.value})}
										placeholder ="Número Fixo" 
										/> 
									</Form.Input>

                                    </Form.Group>

                                    <Form.Group>

                                    <Form.Input
                                        required
										fluid
										label='Entregas Realizadas'
                                        width={8}
									 value={this.state.qtdEntregasRealizadas}
										onChange={e => this.setState({qtdEntregasRealizadas: e.target.value})} 
										placeholder ="Número de Entegas Realizadas"
                                    />
									

                                    <Form.Input
                                        required
										fluid
										label='Valor do Frete'
                                        width={8}
										
                                        value={this.state.ValorFrete}
										onChange={e => this.setState({ValorFrete: e.target.value})} 
										placeholder ="Valor do frete"
                                     />
									
                                     </Form.Group>
                                    <Form.Group>
								    <Form.Input
										required
										fluid
										label='Rua'
										width={5}
										value={this.state.enderecoRua}
			                           onChange={e => this.setState({enderecoRua: e.target.value})}
									   placeholder ="Nome da Rua"
									/>
                           
                           
                                    <Form.Input
                                        required
										fluid
										label='Numero'
                                        width={6}
										
                                        value={this.state.enderecoNumero}
										onChange={e => this.setState({enderecoNumero: e.target.value})} 
										placeholder ="Numero da Residência"
                                        /> 
									

                                    <Form.Input
										required
										fluid
										label='Bairro'
										width={5}
										value={this.state.enderecoBairro}
			                           onChange={e => this.setState({enderecoBairro: e.target.value})}
									   placeholder ="Nome do Bairro"
									/>
                            
                                  
                                </Form.Group>
                                <Form.Group>

								<Form.Input
										required
										fluid
										label='Cidade'
										width={4}
										value={this.state.enderecoCidade}
			                           onChange={e => this.setState({enderecoCidade: e.target.value})}
									   placeholder ="Nome da Cidade"
									/>
                                     <Form.Input
                                        required
										fluid
										label='CEP'
                                        width={4}>
										<InputMask 
										maxLength="100"
                                        value={this.state.enderecoCep}
										onChange={e => this.setState({enderecoCep: e.target.value})} 
										placeholder ="Número do CEP"
                                        /> 
									</Form.Input>
                             
                                     
                                    <Form.Input
										required
										fluid
										label='UF'
										width={4}
										value={this.state.enferecoUf}
			                           onChange={e => this.setState({enferecoUf: e.target.value})}
									   placeholder ="Informe a UF"
									/>
                                    
                                       <Form.Input
										required
										fluid
										label='Complemento'
										width={4}
										value={this.state.enderecoComplemento}
			                           onChange={e => this.setState({enderecoComplemento: e.target.value})}
									   placeholder ="Informe o Complemento"
									/>
                            
                                   </Form.Group>
                      
								
							

                             
  
                             
							

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>
								<Link to={'/list-entregador'}>
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
									</Link>
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

export default FormEntregador;