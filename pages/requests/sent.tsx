import React from 'react';
import { asPage } from '../../utils';
import { Table } from '../../components/organisms';
import { Layout } from '../../components/layout';
import { Container, Row, Column } from '../../components/grid';
import { H1 } from '../../components/atoms';

const tableHeaders = ['Anfitrion', 'Fecha de solicitud', 'Desde/Hasta', 'Estado'];

const rows = [
  [
    { label: 'Pedro Perez' },
    { label: '12-03-20 12:34pm' },
    { label: '12-03-20 / 12-03-20 (4 dias)' },
    { label: 'Aprobada', styled: 'p-2 text-white bg-third rounded-xl rounded-lg' },
  ],
];

const RequestSent = ({ authorization }) => (
  <div>
    <Layout isAuth={Boolean(authorization)}>
      <Container className="my-12">
        <Row>
          <Column className="w-full justify-center">
            <H1 className="text-center">Mis solicitudes</H1>
          </Column>
        </Row>
        <Row className="justify-center mb-8">
          <Column className="w-full">
            <p className="text-center">En este listado encontraras las respuestas de la solicitud de hospedaje</p>
          </Column>
        </Row>
        <Table headers={tableHeaders} rows={[...rows, ...rows, ...rows]} />
      </Container>
    </Layout>
  </div>
);

export default asPage(RequestSent);
