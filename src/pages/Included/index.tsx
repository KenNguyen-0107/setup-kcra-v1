import React, { memo } from 'react';

interface IIncluded {}

export const Included = memo((props: IIncluded) => {
  return (
    <>
      <h3>What's included?</h3>
      <ol>
        <li>React v17.0.2</li>
        <li>React-router-dom v5.1.2</li>
        <li>React-redux v7.2.5</li>
        <li>Redux Toolkit v1.6.1</li>
        <li>Typescript v4.4.2</li>
        <li>Styled-components v5.3.1</li>
        <li>Lodash v4.17.21</li>
        <li>moment v2.29.1</li>
        <li>React-toastify v8.0.2</li>
        <li>
          ... and many more, check <code>package.json</code> for detail
        </li>
      </ol>
    </>
  );
});
