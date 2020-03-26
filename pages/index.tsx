import React from 'react';
import { asPage } from '../utils';
import { Footer, Header, Banner, HomeSection } from '../components/organisms';

const Home = () => (
  <div>
    <Header />
    <Banner />
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
    <Footer />
  </div>
);

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
//   return { userAgent };
// };

export default asPage(Home);
