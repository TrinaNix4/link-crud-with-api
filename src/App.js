import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Links App</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/'>Links</Link> - {' '}
           
      
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;


