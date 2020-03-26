import React from 'react';
import { Container, Row, Column } from '../grid';
import { HeaderLinks } from '../molecules';

export const Header = () => (
  <header className="border-b border-gray-6">
    <Container>
      <Row className="justify-between">
        <Column>
          <div className="py-4">
            <img className="h-6" src="/images/logo.svg" />
          </div>
        </Column>
        <HeaderLinks></HeaderLinks>
      </Row>
    </Container>
  </header>
);
