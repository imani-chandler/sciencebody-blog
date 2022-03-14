import Header from './Navigation'
import Home from './Home';
import Blog from './Blog';
import Create from './Create';
import BlogDetails from './BlogDetails';
import About from './About';
import Contact from './Contact';
import BlogDetailsX from './BlogDetailsX';
import ThankYou from './ThankYou';
import Footer from './Footer';

import { Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/create-blog">
              <Create/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/thankyou">
              <ThankYou/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="/x/:id">
              <BlogDetailsX/>
            </Route>
          </Switch>
          <Footer/>
      </div>
  );
}

export default Main;








