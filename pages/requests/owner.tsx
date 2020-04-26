import React from 'react';
import { isEmpty } from 'lodash';
import { asPage } from '../../utils';
import { Table } from '../../components/organisms';
import { Layout } from '../../components/layout';
import { Container, Row, Column } from '../../components/grid';
import { H1 } from '../../components/atoms';

import { getOwnerRequests } from '../../services/apis/requests';

const tableHeaders = ['Nombre', 'Fecha de solicitud', 'Desde/Hasta', 'Estado', 'Detalle'];

const rows = [
  [
    { label: 'Pedro Perez' },
    { label: '12-03-20 12:34pm' },
    { label: '12-03-20 / 12-03-20 (4 dias)' },
    { label: 'Aprobada', styled: 'p-2 text-white bg-third rounded-xl rounded-lg' },
    { label: 'Detalle', link: '#' },
  ],
];
const OwnerRequestsPage = ({ authorization, requests = [] }) => (
  <div>
    <Layout isAuth={Boolean(authorization)}>
      <Container className="my-12">
        <Row>
          <Column className="w-full justify-center">
            <H1 className="text-center">Solicitudes recibidas</H1>
          </Column>
        </Row>
        <Row className="justify-center mb-8">
          <Column className="w-full">
            <p className="text-center">
              En este listado encontraras todas las solicitudes por las personas que necesitan un hospedaje.
            </p>
          </Column>
        </Row>
        <Table headers={tableHeaders} rows={[...rows, ...rows, ...rows]} />
      </Container>
    </Layout>
  </div>
);

OwnerRequestsPage.getInitialProps = async ({ req, authorization }) => {
  try {
    const {
      data: { requests },
      error,
    } = await getOwnerRequests({ UserId: 1 }, authorization);
    if (!isEmpty(error)) {
      throw new Error(error);
    }

    return { requests, authorization };
  } catch (e) {
    return { error: e.toString() };
  }
};

export default asPage(OwnerRequestsPage);
