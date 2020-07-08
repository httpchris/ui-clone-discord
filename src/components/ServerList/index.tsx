import React from 'react';

import { Container, Separator} from './styles';
import ServerButton from '../ServerBotton';

const ServerList: React.FC =() => {
 return(
  <Container>
    <ServerButton isHome/>

    <Separator/>

    <ServerButton/>
    <ServerButton hasNotifications/>
    <ServerButton mentions={4}/>
    <ServerButton/>
    <ServerButton/>
    <ServerButton/>
    <ServerButton hasNotifications/>
    <ServerButton/>
    <ServerButton hasNotifications/>
    <ServerButton/>
    <ServerButton mentions={9}/>
    <ServerButton/>
  </Container>
 )
}

export default ServerList