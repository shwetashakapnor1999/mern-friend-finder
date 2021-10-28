import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";
import Newsfeed from "./Newsfeed";
import Newsfeedfriends from "./Newsfeedfriends";
import Newsfeedimages from "./Newsfeedimages";
import Newsfeedmessages from "./Newsfeedmessages";
import Timeline from "./Timeline";
import Timelineabout from "./Timelineabout";
import Timelinefriends from "./Timelinefriends";
import Timelinealbum from "./Timelinealbum";
import UserHome from "./UserHome";
import AdminHome from "./AdminHome";
import Logout from "./Logout";
import ManageUsers from "./ManageUsers";
import FileUpload from "./FileUpload";
export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/newsfeed" component={Newsfeed} />
          <Route path="/newsfeedfriends" component={Newsfeedfriends} />
          <Route path="/newsfeedimages" component={Newsfeedimages} />
          <Route path="/newsfeedmessages" component={Newsfeedmessages} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/timelinealbum" component={Timelinealbum} />
          <Route path="/timelineabout" component={Timelineabout} />
          <Route path="/timelinefriends" component={Timelinefriends} />
          <Route path="/userhome" component={UserHome} />
          <Route path="/adminhome" component={AdminHome} />
          <Route path="/logout" component={Logout} />
          <Route path="/manageuser" component={ManageUsers} />
          <Route path="/fileupload" component={FileUpload} />
        </Switch>
      </Router>
    </div>
  );
}
