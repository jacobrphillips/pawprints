import PetsPage from './components/pages/PetsPage/PetsPage';
import HomePage from './components/pages/HomePage/HomePage';
import SignInPage from './components/pages/SignInPage/SignInPage';
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './App.css'

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route  path='/' element={<HomePage />} />
    <Route  path='/pets' element={<PetsPage />} />
    <Route  path='/sign-up' element={<SignInPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
