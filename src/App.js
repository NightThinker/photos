import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';

import NavBar from './shared/theme/NavBar/NavBar'
import { routes } from './shared/routes/routes'
import './App.css';
import './shared/styles/tailwind.css'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <div className='layout'>

            <NavBar />
            <Switch>
              {routes.map((route, i) => (
                <Route exact key={route.path} {...route} />
              ))}
            </Switch>
          </div>
        </Suspense>
      </Router>
    </RecoilRoot>
  );
}

export default App;
