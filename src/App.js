import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Starter App</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/'>Links</Link> - {' '}
          <Link to='/about'>element<About /> 
      
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;


