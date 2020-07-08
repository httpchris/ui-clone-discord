import React from 'react';

import { 
Container, 
Profile, 
Avatar, 
UserData,
Icons, 
HeadphoneIcon, 
MicIcon,
SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
      <Container>
        <Profile>
            <Avatar />
            <UserData>
                <strong>Guilherme Costa</strong>
                <span>#6293</span>
            </UserData>
        </Profile>
        <Icons>
          <MicIcon/>
          <HeadphoneIcon/>
          <SettingsIcon/>
        </Icons>
      </Container>
    );
}

export default UserInfo