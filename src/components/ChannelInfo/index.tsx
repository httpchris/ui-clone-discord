import React from 'react';

import { 
  Container, 
  HashtagIncon, 
  Title,
  Separator,
  Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
      <Container>
          <HashtagIncon/>

          <Title>chat-livre</Title>

          <Separator/>

          <Description>Canal aberto para conversas</Description>
      </Container>
    );
}

export default ChannelInfo