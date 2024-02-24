import React                                        from 'react';
import { BrowserRouter as Router, Route, Routes }   from 'react-router-dom';

import not_found    from './pages/not_found';
import Account      from './pages/account/main';
import AnaSayfa     from './pages/AnaSayfa';
import DigerSayfa   from './pages/DigerSayfa';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*"         Component={not_found} />
        
        <Route exact path="/"   Component={AnaSayfa} />
        <Route path="/diger"    Component={DigerSayfa} />
        <Route path="/account"  Component={Account} />
      </Routes>
    </Router>
  );
};


export default App;