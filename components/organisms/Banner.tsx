import React from 'react';
import { Container, Row, Column } from '../grid';
import { H1 } from '../atoms';
import { BannerCard } from '../molecules';

export const Banner = ({ isAuth = true }) => (
  <section className="mb-12">
    <Container className="flex flex-col items-center py-6">
      <Row>
        <Column className="w-full justify-center">
          <H1 className="text-center">Ayuda a los que nos estan ayudando</H1>
        </Column>
      </Row>
      <Row className="justify-center mb-8">
        <Column className="w-full">
          <p className="text-xs text-center">
            Pariatur nulla exercitation et sint cupidatat fugiat enim ea quis. Eiusmod elit mollit sit amet excepteur
            aliqua velit esse do aliquip dolore magna occaecat nulla nulla. Consequat pariatur eiusmod minim ut ex.
          </p>
        </Column>
      </Row>
      <Row className="flex-wrap justify-center">
        <a className="cursor-pointer" href={isAuth ? '/stay/add' : '/session/login'}>
          <Column className="w-full md:w-auto md:pr-8 mb-6 items-center">
            <BannerCard
              imgSrc="/images/img-hospedar.png"
              title="Hospedar"
              description="Pariatur nulla exercitation et sint cupidatat fugiat enim ea quis"
            />
          </Column>
        </a>
        <a className="cursor-pointer" href="/map/mapPage">
          <Column className="w-full md:w-auto items-center">
            <BannerCard
              imgSrc="/images/img-buscar.png"
              title="Buscar Hospedaje"
              description="Pariatur nulla exercitation et sint cupidatat fugiat enim ea quis"
            />
          </Column>
        </a>
      </Row>
    </Container>
  </section>
);
