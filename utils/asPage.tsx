import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeProvider } from 'emotion-theming';
import { getTokenFromRequest } from './getCookie';

export const asPage = (Component) => {
  const AsPage = ({ authorization, ...rest }) => {
    return <Component {...rest} />;
  };

  hoistNonReactStatics(AsPage, Component);

  AsPage.getInitialProps = async (ctx) => {
    let authorization = '';
    if (typeof ctx.req !== 'undefined') {
      authorization = getTokenFromRequest(ctx.req);
    }
    if (Component.getInitialProps) {
      const initialProps = await Component.getInitialProps({
        ...ctx,
        authorization,
      });
      return initialProps;
    }
    return { authorization };
  };
  return AsPage;
};
