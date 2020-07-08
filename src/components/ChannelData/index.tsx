import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIncon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
        <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Guilherme Costa"
            date="08/07/2020"
            content="Finalmente finazei esse UI clone!"
          />
        ))}

          <ChannelMessage 
            author="Watson"
            date={'08/07/2020'}
            content={
              <>
                <Mention>@Guilherme Costa</Mention>, finalmente meu senhor.
                Felicidades! ^^
              </>
            }
            hasMention
            isBot
          />
        </Messages>

        <InputWrapper>
          <Input type="text" placeholder="Conversar em #chat-livre"/>
          <InputIncon/>
        </InputWrapper>
    </Container>);
}

export default ChannelData