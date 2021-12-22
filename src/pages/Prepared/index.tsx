import React, { memo } from 'react';

interface IPrepared {}

export const Prepared = memo((props: IPrepared) => {
  return (
    <>
      <h3>What has been prepared?</h3>
      <ul>
        <li>Redux store - No need to setup another one</li>
        <li>
          Global theme, styles, check <code>src/styles</code> for more.
        </li>
        <li>
          Some useful{' '}
          <strong>
            <i>lodash</i>
          </strong>{' '}
          functions, this is to prevent importing the whole library
          <br />
          Just import from <code>src/utils/lodash.ts</code> or import the whole
          file with <code>import _ from 'utils/lodash'</code>
        </li>
        <li>
          React{' '}
          <strong>
            <i>History</i>
          </strong>{' '}
          config. Import{' '}
          <code>{`import { useHistory } from 'react-router-dom';`}</code> and
          declare
          <code>const history = useHistory()</code> to use.
        </li>
        <li>
          Simple Regex validation for general use cases. Check{' '}
          <code>src/helper/regex.ts</code> for detail.
        </li>{' '}
      </ul>
    </>
  );
});
