import React from 'react';
import { Container, Row, Column } from '../grid';
import { HeaderLinks } from '../molecules';

export const Header = () => (
  <header className="border-b border-gray-6">
    <Container>
      <Row className="justify-between">
        <Column>
          <div className="py-4 flex justify-center items-center text-center">
            <img className="h-6" src="/images/logo.svg" />
            <a className="text-gray-2 px-4 text-lg cursor-pointer" href="/map/mapPage">
              <div className="flex text-secondary mx-2 w-20 justify-center items-center bg-fourth rounded-full h-8">
                Buscar
              </div>
            </a>
          </div>
        </Column>
        <HeaderLinks></HeaderLinks>
      </Row>
    </Container>
  </header>
);
