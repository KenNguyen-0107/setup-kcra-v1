import React, { useState, memo } from 'react';
import styled from 'styled-components';

interface IFolderStructure {}

export const FolderStructure = memo((props: IFolderStructure) => {
  const [openFolder, setOpenFolder] = useState<boolean>(false);

  return (
    <Wrapper>
      <h3>Folder Structure</h3>
      <ul className="treeRoot first-menu">
        <li className="hasSubMenu first-menu">
          <span onClick={() => setOpenFolder(!openFolder)}>
            <strong>src</strong>
            <i>
              <u>(click me)</u>
            </i>
          </span>
          <ul className={openFolder ? 'activeSubMenu' : 'inactiveSubmenu'}>
            <li className="hasSubMenu">
              <span>
                <strong>assets</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>
                    <strong>images</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>icons</strong>
                  </span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>constants</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>globalDateFormat.ts</span>
                </li>
                <li>
                  <span>envConfig.ts</span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>components</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>
                    <strong>Input</strong>
                  </span>
                  <ul className="activeSubMenu">
                    <li>
                      <span>index.tsx</span>
                    </li>
                    <li>
                      <span>Loadable.ts</span>
                    </li>
                    <li>
                      <span>...</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>helpers</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>regex.ts</span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>pages</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>
                    <strong>Home</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Contacts</strong>
                  </span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>stores</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>
                    <strong>reducers</strong>
                  </span>
                  <ul className="activeSubMenu">
                    <li>
                      <span>
                        <strong>theme</strong>
                      </span>
                      <ul className="activeSubMenu">
                        <li>
                          <span>index.ts</span>
                        </li>
                        <li>
                          <span>saga.ts</span>
                        </li>
                        <li>
                          <span>selectors.ts</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>rootState.ts</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>styles</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>global-styles.ts</span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>types</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>config</span>
                  <ul className="activeSubMenu">
                    <li>
                      <span>globalTypes.ts</span>
                    </li>
                    <li>
                      <span>infector-typing.ts</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>themeTypes.ts</span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
            <li className="hasSubMenu">
              <span>
                <strong>utils</strong>
              </span>
              <ul className="activeSubMenu">
                <li>
                  <span>lodash.ts</span>
                </li>
                <li>
                  <span>history.ts</span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  .first-menu::before {
    display: none !important;
  }

  .first-menu li:first-child::after {
    top: 0 !important;
  }

  ul.treeRoot > li ul,
  ul.treeRoot > li ul {
    padding-left: 20px;
  }
  ul.treeRoot li {
    border-left: 1px solid ${p => p.theme.primary};
  }
  ul.treeRoot ul li,
  ul.treeRoot li {
    border-left: 1px solid ${p => p.theme.primary};
    padding-left: 20px;
    position: relative;
    font-size: 16px;
    line-height: 24px;
  }
  ul.treeRoot ul li:last-child:after,
  ul.treeRoot li:last-child:after {
    position: absolute;
    content: '';
    display: inline-block;
    top: 12px;
    width: 1px;
    left: -1px;
    bottom: 0;
    background: ${p => p.theme.secondary};
  }
  ul.treeRoot ul li:before,
  ul.treeRoot li:before {
    height: 1px;
    background: ${p => p.theme.primary};
    width: 15px;
    left: 0;
    top: 11px;
    display: inline-block;
    content: '';
    position: absolute;
  }
  .treeRoot li ul {
    display: none;
  }
  .treeRoot li ul.activeSubMenu {
    display: block;
  }
`;
