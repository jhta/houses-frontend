import React, { useEffect } from 'react';
import { Box, Flex, Card, Text } from 'rebass';
import A from '../atoms/Link';
import { Column } from '../grid';

import { login } from '../../services/oauth';

const HeaderLink = ({ children, href, ...rest }) => (
  <A lassName="ml-4" href={href} {...rest}>
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
        <div
          onClick={async () => {
            await login({ password: '123456', username: 'test@test.com' });
          }}
        >
          this is an example
        </div>
      </div>
    </Column>
  </React.Fragment>
);
