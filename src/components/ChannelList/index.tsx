import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
        <Category>
          <span>Canais de Texto</span>
          <AddCategoryIcon/>
        </Category>

        <ChannelButton channelName ="chat-livre"/>
        <ChannelButton channelName ="FTG"/>
        <ChannelButton channelName ="Yu-Gi-Ho Duel Links"/>
        <ChannelButton channelName ="Celebrity Hunter"/>
        <ChannelButton channelName ="Clash Royal"/>
      </Container>
    );
}

export default ChannelList 