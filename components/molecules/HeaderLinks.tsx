import React from 'react';
import A from '../atoms/Link';
import { Column } from '../grid';

const HeaderLink = ({ children, href, ...rest }) => (
  <A className="ml-4" href={href} {...rest}>
    {children}
  </A>
);

export const HeaderLinks = ({ isAuth = false, name }) => (
  <React.Fragment>
    <Column>
      <LinksIfUserLogged isAuth={isAuth} name={name} />
      <LinksIfUserDoesNotLogged isAuth={isAuth} />
    </Column>
  </React.Fragment>
);

const LinksIfUserLogged = ({ isAuth, name }) =>
  !isAuth ? null : (
    <div className="hidden sm:inline-block py-4">
      <HeaderLink href="/stay/add">Agregar anuncio</HeaderLink>
      <HeaderLink href="/">Mis Solicitudes</HeaderLink>
      <HeaderLink href="/" className="text-gray-2 font-bold ml-4">
        {name || 'Cerrar sesión'}
      </HeaderLink>
    </div>
  );

const LinksIfUserDoesNotLogged = ({ isAuth }) =>
  isAuth ? null : (
    <div className="hidden sm:inline-block py-4">
      <HeaderLink href="/session/login">Inicia sesion</HeaderLink>
    </div>
  );
