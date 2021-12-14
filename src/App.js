import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Photography from './components/Photography';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import PhotographyProject from './components/PhotographyProject';
import Admin from './components/Admin';
import BackPanel from './components/BackPanel'
import ScrollToTop from './components/ScrollToTop';
import GraphicDesign from "./components/GraphicDesign";
import Cinematography from "./components/Cinematography";
import MotionGraphics from "./components/MotionGraphics";
import UiDesign from "./components/UiDesign";
import GraphicDesignProject from "./components/GraphicDesignProject";
import { auth, onAuthStateChanged } from './firebase';
import UiDesignProject from "./components/UiDesignProject";

function App() {
  const displayHandler = () => {
    document.getElementById("pop_box").style.display = "block"
  }
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <ScrollToTop />
      {!loading &&
        <Switch >
          <Route exact path="/admin">
            <Admin />
            <Footer />
          </Route>
          <Route exact path="/admin/upload">
            {user ? <BackPanel /> : <Redirect to="/admin" />}
            <Footer />
          </Route>
          
          <Route exact path="/about us">
            <NavBar displayHandler={displayHandler} />
            <Header
              image='/assets/AboutUs.jpg'
              headerClass="header_container_gallery"
              captionClass="header_caption_gallery"
              content="About Beyond Pixel"
            />
            <AboutUs />
            <Footer />
          </Route>
          {/* services */}
          <Route exact path="/service/photography">
            <NavBar displayHandler={displayHandler} />
            <Header
              image='/assets/Photography.jpg'
              headerClass="header_container_gallery"
              captionClass="header_caption_gallery"
              content="Photography"
            />
            <Photography />
            <Footer />
          </Route>
          <Route exact path="/service/graphic design">
            <NavBar displayHandler={displayHandler} />
            <Header
              image='/assets/Photography.jpg'
              headerClass="header_container_gallery"
              captionClass="header_caption_gallery"
              content="Graphic Design"
            />
            <GraphicDesign />
            <Footer />
          </Route>
          <Route exact path="/service/cinematography">
            <NavBar displayHandler={displayHandler} />
            <Header
              image='/assets/Photography.jpg'
              headerClass="header_container_gallery"
              captionClass="header_caption_gallery"
              content="Cinematography"
            />
            <Cinematography displayHandler={displayHandler} />
            <Footer />
          </Route>
          <Route exact path="/service/motion graphics">
            <NavBar displayHandler={displayHandler} />
            <Header
              image='/assets/Photography.jpg'
              headerClass="header_container_gallery"
              captionClass="header_caption_gallery"
              content="Motion Graphics"
            />
            <MotionGraphics displayHandler={displayHandler} />
            <Footer />
          </Route>
          <Route exact path="/service/ui design">
            <NavBar displayHandler={displayHandler} />
            <Header
              image='/assets/uiDesign.png'
              headerClass="header_container_gallery"
              captionClass="header_caption_gallery"
              content={<>Ui/Ux Design<br />Website Development</>}
            />
            <UiDesign />
            <Footer />
          </Route>
          {/* view all */}
          <Route exact path="/photography/:id">
            <NavBar displayHandler={displayHandler} />
            <PhotographyProject displayHandler={displayHandler} />
            <Footer />
          </Route>
          <Route exact path="/graphic design/:id">
            <NavBar displayHandler={displayHandler} />
            <GraphicDesignProject displayHandler={displayHandler} />
            <Footer />
          </Route>
          <Route exact path="/ui design/:id">
            <NavBar displayHandler={displayHandler} />
            <UiDesignProject displayHandler={displayHandler} />
            <Footer />
          </Route>

          <Route path="/">
            <NavBar displayHandler={displayHandler} />
            <Header
              image='/assets/Group4@2x.png'
              headerClass="header_container_hero"
              captionClass="header_caption_hero"
              display="d-none d-md-block"
              content={<>A Place Where<br />Ideas Grow</>}
              displayContact={true}
              mobile={true}
              displayHandler={displayHandler}
            />
            <Home />
            <Footer />
          </Route>
        </Switch>
      }
    </Router>
  );
}

export default App;
