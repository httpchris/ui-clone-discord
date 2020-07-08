import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: String,
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span> }
    </User>
  )
}

const UserList: React.FC = () => {
  return (
      <Container>
          <Role>Disponível - 1</Role>
          <UserRow nickname="Chris Mores"/>
          
          <Role>Offline - 20</Role>
          <UserRow nickname="Alexandre Carvalho" isBot/>
          <UserRow nickname="Victor Rosetti" />
          <UserRow nickname="Lucas Ferraz" />
          <UserRow nickname="Kimberly Almeida" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
          <UserRow nickname="Fulano" />
      </Container>);
}

export default UserList