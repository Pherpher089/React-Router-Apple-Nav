import React from 'react';
import NavigationBar from './components/NavigationBar'
import SubNavigationBar from './components/SubNavigationBar'
import {Route} from 'react-router-dom';

function App() {
  return(
    <div>
      <Route path='/' component={NavigationBar} />
      <SubNavigationBar />
    </div>
  );
}

export default App;
