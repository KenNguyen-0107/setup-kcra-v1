import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FolderStructure } from 'pages/FolderStructure/Loadable';
import { Prepared } from 'pages/Prepared/Loadable';
import { Included } from 'pages/Included/Loadable';
import { useDispatch } from 'react-redux';
import { useThemeSlice } from 'stores/reducers/theme';
import { GlobalStyle } from 'styles/global-styles';
import { ToastContainer } from 'react-toastify';
import { Special } from 'pages/Special/Loadable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { actions: themeActions } = useThemeSlice();

  const [toggleIncluded, setToggleIncluded] = React.useState<boolean>(true);
  const [togglePrepared, setTogglePrepared] = React.useState<boolean>(false);
  const [toggleFolderStructure, setToggleFolderStructure] = React.useState<boolean>(false);
  const [toggleSpecial, setSpecial] = React.useState<boolean>(false);

  return (
    <>
    <Helmet titleTemplate="%s - Insert Title" defaultTitle="title" htmlAttributes={{ lang: i18n.language }}>
        <meta name="description" content="Insert Title" />
        {/* TODO: Google Analytics */}
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`}
        ></script> 
          <script async>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}');
            `}
      </script>
        */}
      </Helmet>
      <div className="Introduction">
        <h2>
          {t('React App created using Custom CRA, made by&nbsp;')}
          <a href="mailto:baoanhnguyen@gmail.com">kenichiwaaa</a>
        </h2>
        <button
          type="button"
          style={{ margin: '0 8px', padding: '0 4px' }}
          onClick={() => dispatch(themeActions.changeTheme())}
        >
          Toggle Theme
        </button>
        <button
          type="button"
          style={{ margin: '0 8px', padding: '0 4px' }}
          onClick={() => setToggleIncluded(!toggleIncluded)}
        >
          Toggle Included
        </button>
        <button
          type="button"
          style={{ margin: '0 8px', padding: '0 4px' }}
          onClick={() => setTogglePrepared(!togglePrepared)}
        >
          Toggle Prepared
        </button>
        <button
          type="button"
          style={{ margin: '0 8px', padding: '0 4px' }}
          onClick={() => setToggleFolderStructure(!toggleFolderStructure)}
        >
          Toggle Folder Structure
        </button>
        <button type="button" style={{ margin: '0 8px', padding: '0 4px' }} onClick={() => setSpecial(!toggleSpecial)}>
          Toggle Special
        </button>
        <br />
        {toggleIncluded && (
          <div className="included">
            <Included />
          </div>
        )}
        <br />
        {togglePrepared && (
          <div className="prepared">
            <Prepared />
          </div>
        )}
        <br />
        {toggleFolderStructure && (
          <div className="folder-structure">
            <FolderStructure />
          </div>
        )}
        <br />
        {toggleSpecial && (
          <div className="folder-structure">
            <Special />
          </div>
        )}
      </div>

      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
