import React, { useState } from 'react';
import { asPage } from '../utils';
import { Banner, HomeSection } from '../components/organisms';
import { Layout } from '../components/layout';

const Home = ({ authorization, name }) => {
  const isAuth = Boolean(authorization);
  return (
    <div>
      <Layout isAuth={isAuth}>
        <Banner isAuth={isAuth} />
        <HomeSection
          title="Como funciona?"
          description="Pariatur nulla exercitation et sint cupidatat fugiat enim ea quis. Eiusmod elit mollit sit amet excepteuraliqua velit esse d fugiat enim ea quis. Eiusmod elit mollit sit amet excepteuraliqua velit esse do aliquip dolore magna occaecat nulla nulla. Consequat pariatur eiusmod minim ut ex."
          imgSrc="/images/img-funciona.png"
        />
        <HomeSection
          title="Como funciona?"
          description="Pariatur nulla exercitation et sint cupidatat fugiat enim ea quis. Eiusmod elit mollit sit amet excepteuraliqua velit esse d fugiat enim ea quis. Eiusmod elit mollit sit amet excepteuraliqua velit esse do aliquip dolore magna occaecat nulla nulla. Consequat pariatur eiusmod minim ut ex."
          imgSrc="/images/img-ayuda.png"
          invert
        />
      </Layout>
    </div>
  );
};

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
//   return { userAgent };
// };

export default asPage(Home);
