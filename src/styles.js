import styled from 'styled-components';

export const Container = styled.div`
position:relative; 
*width:414px;
width:1080px;
height:913px;
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
