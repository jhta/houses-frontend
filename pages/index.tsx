import React from 'react';
import { asPage } from '../utils';
import { Box, Flex, Card, Text, Link } from 'rebass';

const Navbar = () => (
  <Flex px={2} color="black" alignItems="center">
    <Text p={2} fontWeight="bold">
      Rebass
    </Text>
    <Box mx="auto" />
    <Link variant="nav" href="#!">
      Profile
    </Link>
  </Flex>
);

const Home = () => (
  <div>
    <Navbar />
    <Flex>
      <Box width={[1]} color="black" p={[1]} pt={[5]}>
        <h1>Hello world</h1>
        <Card width={[1, 1 / 2]} height={320}>
          this is a card
        </Card>
      </Box>
    </Flex>
    <style jsx global>{`
      body {
        margin: 0;
      }
      p {
        font-size: 20px;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default asPage(Home);
