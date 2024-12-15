import './App.css';
import Header from './Components/Common/heading/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Common/home/Home';
import About from './Components/about/About';
import CourseHome from './Components/allcourses/CourseHome';
import Team from './Components/team/Team';
import Price from './Components/Pricing/Price';
import Blog from './Components/blog/Blog';
import Contact from './Components/contact/Contact';
import Footer from './Components/Common/footer/Footer';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  const location = useLocation(); // Get the current route

  const showHeaderFooter = location.pathname !== '/dashboard'; // Hide Header/Footer for /dashboard

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/courses" exact Component={CourseHome} />
        <Route path="/team" exact Component={Team} />
        <Route path="/pricing" exact Component={Price} />
        <Route path="/journal" exact Component={Blog} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/dashboard" exact Component={Dashboard} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
