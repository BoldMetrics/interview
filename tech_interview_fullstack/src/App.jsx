import React from 'react';
import ProfileForm from './components/ProfileForm';
import ProductDropdown from './components/ProductDropdown'; 
import { Provider } from 'react-redux';
import store from './store'; 
import { GlobalStyle } from './global/globalStyle';
import { Root, Card, ReadTheDocs } from './global/styledComponents'; 

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Root>
        <h1>Garment Matching System</h1>
        <Card>
          <ProfileForm />
          <ProductDropdown />
        </Card>
        <ReadTheDocs href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
          React Documentation
        </ReadTheDocs>
      </Root>
    </Provider>
  );
};

export default App;