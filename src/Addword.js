import React from 'react';
import {Container, Header, Title, AddContents, Word} from './styles';
import {addWordFB} from './redux/modules/words';
import {useDispatch} from 'react-redux';
import{useHistory} from 'react-router-dom';
 
const Addword = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

   

    const new_word = React.useRef(null);
    const new_desc = React.useRef(null);
    const new_example = React.useRef(null);

    const addWordList = (props)=>{
        
        dispatch(addWordFB({word:new_word.current.value,desc:new_desc.current.value, example:new_example.current.value}));
        history.push('/');
    }

    return(
        <>
            <Container>
                <Header>
                
                    <span onClick={()=>{history.push('/')}} style={{textAlign:'center'}} >ADD WORD</span>
                
                    
                </Header>
                <Title>단어추가하기!</Title>
                <AddContents>
                    

                    <Word>
                        <span>단어명</span>
                        <input ref={new_word}></input>
                    </Word>
                    
                    <Word>
                        <span>설명글</span>
                        <input ref={new_desc}></input>
                    </Word>
                    
                    <Word style={{marginBottom:'0'}}>
                        <span>예시글</span>
                        <input ref={new_example}></input>
                    </Word>
                    
                
                

            
                </AddContents>
                <button class="btn01 mg-t50" onClick={addWordList}>SAVE</button>

            </Container>
        </>
    );
}



export default Addword;