import React from 'react';
import { FormButton } from '../atoms';
import { Row, Column } from '../grid';

export const FormBottom = ({
  back: { action: backAction, label: backLabel, show: showBackButton },
  next: { action: nextAction, label: nextLabel, disable: nextDisable, loading },
}) => (
  <React.Fragment>
    <hr className="w-full border mt-6 mb-2 border-gray-3" />
    <Row className="lg:flex lg:justify-between px-2">
      <Column className="w-1/2">
        {showBackButton ? (
          <a
            className="text-primary text-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault;
              backAction();
            }}
          >
            <div className="py-4">{backLabel}</div>
          </a>
        ) : null}
      </Column>
      <Column className="w-1/2 items-end">
        <FormButton action={nextAction} disable={nextDisable} loading={loading}>
          {nextLabel}
        </FormButton>
      </Column>
    </Row>
  </React.Fragment>
);
