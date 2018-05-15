import React from "react";
import { Switch, Route } from "react-router-dom";

export default () => (
  <div>
    <h1>BeatBox!</h1>
    <Switch>
      <Route path="/beatbox/boots" render={() => <h1>Boots!</h1>} />
      <Route path="/beatbox/cats" render={() => <h1>Cats!</h1>} />
    </Switch>
  </div>
);
