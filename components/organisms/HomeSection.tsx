import React from 'react';
import classnames from 'classnames';
import { Container, Row, Column } from '../grid';
import { H1 } from '../atoms';

export const HomeSection = ({ description = '', title = '', imgSrc = '', invert = false }) => (
  <section className={classnames('py-16', { 'bg-white': !invert }, { 'bg-gray-5': invert })}>
    <Container>
      <Row className={classnames('items-center flex-wrap', { 'flex row flex-row-reverse': invert })}>
        <Column className="w-full sm:w-1/2 pb-6">
          <H1 className={classnames({ 'text-principal': invert })}>{title}</H1>
          <p className="text-xs">{description}</p>
        </Column>
        <Column
          className={classnames(
            'w-full sm:w-1/2',
            { 'items-center': !invert },
            { 'sm:items-start items-center': invert }
          )}
        >
          <img src={imgSrc} className="h-56 " />
        </Column>
      </Row>
    </Container>
  </section>
);
