import styled from 'styled-components';

export const Container = styled.div`
position:relative; 
*width:414px;
width:1000px;
height:800px;
margin:0 auto; 
background:#FDF6ED;
border-radius:18px;
box-sizing:border-box;
overflow:hidden;
`;

export const Header = styled.div`
width:100%;
height:60px;
background-color:#D39161;
*border-radius:18px;
padding:10px;
box-sizing:border-box;
font-size:24px;
line-height:50px;
display:flex; 
justify-content:center;
font-family: 'SBAggroB';
letter-spacing:-1px;
`;

export const Contents = styled.div`

width:90%;
margin:0 auto;
margin-top:30px;
max-height:88%;
*border:2px solid red;
box-sizing:border-box;
overflow:auto;
text-align:left;
display:flex;
justify-content:space-between;
align-items:flex-start;
flex-wrap:wrap;


`;

export const AddBtn = styled.button`

position:absolute;
right:20px;
cursor:pointer;
outline:none;
background:none;
border:none;
font-size:34px;
margin-left:10px;
margin-top:3px;
`;

export const Title = styled.h1`
margin:60px 0 60px 0 ;
line-height:1.5;
    
`;


/** Addword.js **/

export const AddContents = styled.div`
width:40%;
margin:0 auto;
box-sizing:border-box;
position:relative;
padding:30px 30PX;
box-sizing:border-box;
text-align:left;
border-radius:30px;
background:#fff;

`;

export const Word = styled.div`

margin-bottom:30px;
display:flex;
flex-direction:column;
& span {
    font-size:18px;
    margin-bottom:10px;
}

& input {
    padding:15px 20px;
    font-size:18px;
    outline:none;
    border:none;
    border-radius:60px;
    background:#e9c9b1;
    font-family: 'SBAggroL';
}
`;