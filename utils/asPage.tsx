import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from '../theme';

export const asPage = (Component) => {
  const AsPage = ({ theme = defaultTheme, ...rest }) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...rest} />
      </ThemeProvider>
    );
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
