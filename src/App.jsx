import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavTop from './components/NavTop';
import reactLogo from './assets/react.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavTop/>
      <Container>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
      </Routes>
      </Container>
    </div>
  )
}

function Layout() {
  return (
    <div>
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />  
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
