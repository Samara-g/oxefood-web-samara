import axios from 'axios';
import React from "react";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import { ENDERECO_API } from "../util/constantes";

class ListMaterial extends React.Component{

   state = {

       listaMaterial: [],
       openModal: false,
       materialObj: {}
      
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }

carregarLista = () => {

       axios.get( ENDERECO_API + "api/material")
       .then((response) => {
          
           this.setState({
               listaMaterial: response.data
           })
       })

   };
   formatarData = (dataParam) => {

    if (dataParam == null || dataParam == '') {
        return ''
    }
    
    let dia = dataParam.substr(8,2);
    let mes = dataParam.substr(5,2);
    let ano = dataParam.substr(0,4);
    let dataFormatada = dia + '/' + mes + '/' + ano;

    return dataFormatada
};

setOpenModal = (val) => {

    this.setState({ 
        openModal: val
    })
};

exibirDetalheMaterial = (id) => {

    axios.get(ENDERECO_API + "api/material/" + id)
    .then((response) => {
      
        this.setState({
            entregadorObj: response.data,
            openModal: true,
        })
    })

};
   
render(){
       return(
           <div>

               <div style={{marginTop: '3%'}}>

                   <Container textAlign='justified' >

                       <h2> Material </h2>

                       <Divider /> 

                       <div style={{marginTop: '4%'}}>
                    
                           <Button
                               inverted
                               circular
                               icon
                               labelPosition='left'
                               color='orange'
                               floated='right'
                           >
                               <Icon name='clipboard outline' />
                              Novo
                           </Button>
                           
 <br/><br/><br/>
                      
                           <Table color='orange' sortable celled>

                               <Table.Header>
                                   <Table.Row>
                                       <Table.HeaderCell>Titulo</Table.HeaderCell>
                                       <Table.HeaderCell>Valor</Table.HeaderCell>
                                       <Table.HeaderCell>Responsável</Table.HeaderCell>
                                       <Table.HeaderCell>Locaalização</Table.HeaderCell>
                                       <Table.HeaderCell>Peso</Table.HeaderCell>
                                       <Table.HeaderCell>Data da Aquisição</Table.HeaderCell>
                                       <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                   </Table.Row>
                               </Table.Header>
                          
                               <Table.Body>

                                   { this.state.listaMaterial.map(material => (

                                       <Table.Row>
                                           <Table.Cell>{material.titulo}</Table.Cell>
                                           <Table.Cell>{material.valor}</Table.Cell>
                                           <Table.Cell>{material.responsavel}</Table.Cell>
                                           <Table.Cell>{material.localizacao}</Table.Cell>
                                           <Table.Cell>{material.peso}</Table.Cell>
                                           <Table.Cell>{this.formatarData( material.dataAquisicao)}</Table.Cell>
                                           <Table.Cell textAlign='center'>
                                              
                                           <Button
                                                   inverted
                                                   circular
                                                   icon='file alternate outline'
                                                   color='green'
                                                   title='Clique aqui para exibir este material' 
                                                   onClick={e => this.exibirDetalheMaterial(material.id)}
                                                />  &nbsp;
                                              
                                                <Button
                                                   inverted
                                                   circular
                                                   icon='edit'
                                                   color='blue'
                                                   itle='Clique aqui para editar os dados deste material' /> &nbsp;
                                                   
                                                <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este material' />

                                           </Table.Cell>
                                       </Table.Row>
                                       
                                   ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
           </div>
       )
   }
}

export default ListMaterial;
