import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';


export interface Props {
  author: String,
  date: String,
  content: String | React.ReactElement | React.ReactNode;
  hasMention?: boolean,
  isBot?: boolean;
} 

const ChannelMessage: React.FC<Props> = ({
  author, 
  date, 
  content,
  hasMention, 
  isBot
}) => {
  return (
      <Container className={hasMention ? 'mention' : ''  }>
        <Avatar className={isBot ? 'bot' : ''}/>

        <Message>
          <Header>
          <strong>{author}</strong>

            {isBot && <span>Bot</span>}

            <time>{date}</time>
            <Content>{content}</Content>
          </Header>
        </Message>
      </Container>
    );
}

export default ChannelMessage