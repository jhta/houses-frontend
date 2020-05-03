import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeProvider } from 'emotion-theming';
import { getTokenFromRequest, getCookie } from './getCookie';

export const asPage = (Component) => {
  const AsPage = (props) => {
    return <Component {...props} />;
  };

  hoistNonReactStatics(AsPage, Component);

  AsPage.getInitialProps = async (ctx) => {
    let authorization = '';
    let name = '';
    let email = '';

    if (typeof ctx.req !== 'undefined') {
      const { req } = ctx;
      authorization = getTokenFromRequest(req);
      name = getCookie(req, 'user_name');
      email = getCookie(req, 'user_email');
    }

    const formattedName = name || email;
    if (Component.getInitialProps) {
      const initialProps = await Component.getInitialProps({
        ...ctx,
        authorization,
        name: formattedName,
      });
      return initialProps;
    }
    return { authorization, name: formattedName };
  };
  return AsPage;
};
