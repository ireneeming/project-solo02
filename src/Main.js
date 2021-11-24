import React from 'react';
import {Container, Header, AddBtn,Contents } from './styles';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from "@fortawesome/free-solid-svg-icons";

import {useHistory} from 'react-router-dom';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const Main = (props) => {
    const history = useHistory();

    return(
        <>
            <Container>
                <Header>
                
                    <span style={{textAlign:'center'}}>HELLO WORDS</span>
                    <AddBtn onClick={()=>{
                        history.push('/addword');
                    }}>
                        <FontAwesomeIcon icon={faPlus} className="fa fa-smile-o" />
                    </AddBtn>
                    
                </Header>
                <Contents>
                <Card sx={{ minWidth: 275 }} style={{background:'#bbb', marginBottom:'15px', width:'49%',height:'150px'}}>
                    <CardContent>
                        <Typography variant="h5" component="div" style={{ fontFamily: 'SBAggroM'}}>
                       단어명
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontFamily: 'SBAggroM'}}>
                        설명글
                        </Typography>
                        <Typography variant="body2" style={{color:'blue',fontFamily: 'SBAggroL'}}>
                       예시글
                        
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ minWidth: 275 }} style={{background:'#bbb', marginBottom:'15px', width:'49%',height:'150px'}}>
                    <CardContent>
                        <Typography variant="h5" component="div" style={{ fontFamily: 'SBAggroM'}}>
                       단어명
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontFamily: 'SBAggroM'}}>
                        설명글
                        </Typography>
                        <Typography variant="body2" style={{color:'blue',fontFamily: 'SBAggroL'}}>
                       예시글
                        
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ minWidth: 275 }} style={{background:'#bbb', marginBottom:'15px', width:'49%',height:'150px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" style={{ fontFamily: 'SBAggroM'}}>
                       단어명
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontFamily: 'SBAggroM'}}>
                        설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글
                        </Typography>
                        <Typography variant="body2" style={{color:'blue',fontFamily: 'SBAggroL'}}>
                       예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시글예시
                        
                        </Typography>
                    </CardContent>

                </Card>
                
                

              
                </Contents>
                

            </Container>
        </>
    );
}





export default Main;