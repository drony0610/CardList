import React from 'react';
import styled from 'styled-components';
import './App.css';
import CardList from './components/card-list_component/card_list';

function App() {

 
  //TODO: создать filter по наличию
  return (
    <AppContainer>
      <Title>Explore</Title>
      <Subtitle>buy and sell digital art in nft</Subtitle>
      <CardList></CardList>
    </AppContainer>
  );
}


const Title = styled.h1`
  font-size: 32px;
  font-weight:700;
`;
const Subtitle = styled.p`
  font-size: 14px;
  font-weight:400;
  color:#828282;
`;
const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  max-width:1400px;
  width:100%;
  padding:6px;
  margin:0 auto;
`

export default App;
