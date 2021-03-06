import grey from '@material-ui/core/colors/grey';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const grey500 = grey['500'];

const Container = styled.p`
  margin: 0;
  padding: 25px 15px;
  color: ${grey500};
  text-align: center;
`;

export default () => (
  <Container>
    <FormattedMessage id="PRODUCT_FILTER.NOTHING_FOUND" />
    <br />
    <FormattedMessage id="PRODUCT_FILTER.PRODUCT_WISH" />
  </Container>
);
