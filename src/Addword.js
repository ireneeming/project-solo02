import React from 'react';
import {Container, Header, AddBtn,Contents } from './styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from "@fortawesome/free-solid-svg-icons";

 


const Addword = (props) => {
    return(
        <>
        <Container>
            <Header>
            
                <span style={{textAlign:'center'}}>ADD WORD</span>
               
                
            </Header>
            <Contents>
            
            
            

          
            </Contents>
            

        </Container>
    </>
    );
}

export default Addword;