import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RecoilRoot } from 'recoil';

import Album from './feature/album/Album'
import Photo from './feature/photo/Photo'
import AlbumById from './feature/album/AlbumById'
import Logo from './shared/components/Logo/Logo'

import './App.css';
import './shared/styles/tailwind.css'

function App() {
  return (
    <RecoilRoot>

      <Router>
        <div className='layout'>
          <nav className='nav'>
            <ul className='flex flex-col m-5 gap-4'>
              <li className='mb-4 w-16'><Logo /></li>
              <li>
                <Link to="/">Photos</Link>
              </li>
              <li>
                <Link to="/album">Albums</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/album/:id">
              <AlbumById />
            </Route>
            <Route path="/album">
              <Album />
            </Route>
            <Route path="/">
              <Photo />
            </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
