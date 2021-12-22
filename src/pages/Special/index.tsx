/**
 *
 * Special
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components';

interface ISpecial {}

export const Special = memo((props: ISpecial) => {
  return (
    <Wrapper>
      <h3>Special Feature</h3>
      <h4>This Custom CRA Template has been configed with a Plop feature</h4>
      <br />
      <h5>
        Which means you can auto generate prepared file template with just a
        command
      </h5>
      <h4>What to do?</h4>
      <p>
        Simply run <code>yarn generate</code>
      </p>
      <p>Choose a type of folder to create - React Components or Redux Slice</p>
      <p>
        For React Components: create a folder with the <i>[user's input]</i>{' '}
        name, containing an <code>index.tsx</code> file with pre-written hook
        and a <code>Loadabe.ts</code> file.
      </p>
      <p>
        For Redux Slice: create a folder with the <i>[user's input]</i> name,
        containing an <code>index.ts</code> file for reducers, a{' '}
        <code>selectors.ts</code> and <code>saga.ts</code>.
      </p>
    </Wrapper>
  );
});

const Wrapper = styled.div``;
