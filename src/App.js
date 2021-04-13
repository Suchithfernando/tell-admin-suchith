import "./App.css";
import { Switch, Route } from "react-router-dom";
//components
import NavBar from "./components/navigationTop/NavBar";
import RightNavBar from "./components/navigationTop/RightNavBar/RightNavBar";
import Filter from "./components/navigationTop/Filter/Filter";
import Footer from "./components/navigationTop/Footer/Footer";
import Cat_Filter from "./components/navigationTop/Cat_Filter/Cat_Filter";

//Pages
import HomePage from "./webPages/HomePage";
import SigninPage from "./webPages/SigninPage";
import ProfilePage from "./webPages/ProfilePage";
import HelpPage from "./webPages/HelpPage";
import UserGenPage from "./webPages/UserGenPage";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/*Nav bar*/}
        <div className="header">
          <NavBar />
        </div>
        {/* main content */}
        <div className="body">
          <div className="rightnav">
            <RightNavBar />
          </div>
          <div className="bodycontent">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/SigninPage">
                <SigninPage />
              </Route>
              <Route path="/ProfilePage">
                <ProfilePage />
              </Route>
              <Route path="/HelpPage">
              <HelpPage/>
              </Route>
              <Route path="/UserGenPage">
                <UserGenPage />
              </Route>
            </Switch>
          </div>
          <div className="filter">
            <Cat_Filter/>
          </div>
        </div>
        {/* footer*/}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
