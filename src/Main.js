import React from 'react';
import {Container, Header, AddBtn,Contents } from './styles';

import{useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import {useParams, useHistory} from 'react-router-dom';
import {deleteWordFB,loadWordFB} from './redux/modules/words';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const Main = (props) => {
    
    const history = useHistory();
    const my_list = useSelector((state)=>state.words.words_list);
    const params = useParams();  
    const dispatch = useDispatch();
    

   


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
                
                {
                     my_list.map((w,index)=>{
                        return(
                           
                            <Card sx={{ minWidth: 275 }} style={{position:'relative',background:'#bbb',borderRadius:'14px', marginBottom:'15px', width:'49%',height:'150px'}}>
                                <CardContent>
                                    <Typography word={w.word}  variant="h5" component="div" style={{ fontFamily: 'SBAggroM'}}>
                                    {w.word}
                                    </Typography>
                                    <Typography desc={w.desc} key={index} sx={{ mb: 1.5 }}  style={{ fontFamily: 'SBAggroM',marginTop:'20px'}}>
                                    {w.desc}
                                    </Typography>
                                    <Typography example={w.example}  variant="body2" style={{color:'blue',fontFamily: 'SBAggroL'}}>
                                    {w.example}
                                    
                                    </Typography>
                                    
                                </CardContent>
                                <div onClick={()=>{
                                        dispatch(deleteWordFB(my_list[index].id));
                                        
                                        dispatch(loadWordFB());
                                    }} style={{position:'absolute',top:'20px',right:'20px'}}>삭제</div>

                            </Card>
                           
                        );
                    })

                }
                </Contents>
                

            </Container>
        </>
    );
}





export default Main;
