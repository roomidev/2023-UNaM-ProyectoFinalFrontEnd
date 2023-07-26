import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Store from './components/Store/Store.js';
import Contact from './components/Contact/Contact.js';
import NotFound from './components/NotFound/NotFound.js';

const routes = 
[
    {path:'/', element:<Home />},
    {path:'/sobre-nosotros', element:<About />},
    {path:'/ventas', element:<Store />},
    {path:'/contacto', element:<Contact />},
    {path:'/*', element:<NotFound />},
];

export default routes;