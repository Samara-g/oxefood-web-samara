import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Título'
										maxLength="100"
                                        placeholder ="Informe o Título do Produto"
									/>

									<Form.Input
                                        required
										fluid
										label='Código do Produto'>
										<InputMask 
										mask="999.999.999-99"
                                         placeholder ="Informe o Código do Produto"
                                        /> 
                                        
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

                                
									<Form.TextArea
										fluid
										label='Descrição'
                                        width={16}
                                        placeholder ="Informe a Descrição do Produto"
                                        >
									
                                        </Form.TextArea>
                                  </Form.Group>
                                  <Form.Group>
									<Form.Input
                                        required
										fluid
										label='Valor Unitário'
                                        width={7}>
										<InputMask 
										mask="00.0" 
                                       
                                        /> 
									</Form.Input>

                             
                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        placeholder="Ex: 20/03/1985"
                                        width={7}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="30"
                                           
                                        /> 
                                    </Form.Input>
                           
                                    
									<Form.Input
										fluid
										label='Tempo de Entrega Máximo em Minutos'
                                        width={7}>
										<InputMask 
										 placeholder="40"
                                         
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

export default FormProduto;