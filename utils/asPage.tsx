import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeProvider } from 'emotion-theming';

export const asPage = (Component) => {
  const AsPage = ({ theme = {}, ...rest }) => {
    return <Component {...rest} />;
  };

  hoistNonReactStatics(AsPage, Component);

  AsPage.getInitialProps = async (ctx) => {
    if (Component.getInitialProps) {
      const newCtx = {
        ...ctx,
      };

      const initialProps = await Component.getInitialProps(newCtx);
      return initialProps;
    }

    return {};
  };
  return AsPage;
};
