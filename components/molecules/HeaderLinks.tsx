import React from 'react';
import { Box, Flex, Card, Text } from 'rebass';
import A from '../atoms/Link';
import { Column } from '../grid';

const HeaderLink = ({ children, href = '' }) => (
  <A href={href} className="ml-4">
    {children}
  </A>
);
export const HeaderLinks = () => (
  <React.Fragment>
    <Column>
      <div className="hidden sm:inline-block py-4">
        <HeaderLink href="/stay/add">Agregar anuncio</HeaderLink>
        <HeaderLink href="/">Anfitrion</HeaderLink>
        <HeaderLink href="/">Mis Solicitudes</HeaderLink>
        <HeaderLink href="/">Inicia sesion</HeaderLink>
      </div>
    </Column>
  </React.Fragment>
);
