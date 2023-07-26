import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const rutas = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={rutas} />
    </div>
  );
}

export default App;
