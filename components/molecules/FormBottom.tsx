import React from 'react';
import { FormButton } from '../atoms';
import { Row, Column } from '../grid';

export const FormBottom = ({
  back: { url: backUrl, label: backLabel },
  next: { action: nextAction, label: nextLabel },
}) => (
  <React.Fragment>
    <hr className="w-full border mt-6 mb-2 border-gray-3" />
    <Row className="lg:flex lg:justify-between px-2">
      <Column className="w-1/2">
        <a className="text-primary text-lg cursor-pointer" href={backUrl}>
          <div className="py-4">
            {'<'} {backLabel}
          </div>
        </a>
      </Column>
      <Column className="w-1/2">
        <FormButton action={nextAction}>{nextLabel}</FormButton>
      </Column>
    </Row>
  </React.Fragment>
);
