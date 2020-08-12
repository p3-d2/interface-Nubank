import React from 'react'

import { Container, TabsContainer, TabItem, TabText } from './style'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Header() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name='person-add' size={24} color='#fff' />
          <TabText>Indicar amigos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  )
}
