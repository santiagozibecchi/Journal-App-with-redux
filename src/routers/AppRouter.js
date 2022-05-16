import React from 'react';
import { Redirect } from 'react-router-dom';
import {
      BrowserRouter as Router,
      Switch,
      Route,
} from "react-router-dom";
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {

      return (
            <Router>

                  {/* Este div es solo una recomendacion */}
                  <div>

                        <Switch>

                              <Route
                                    path={'/auth'}
                                    component={AuthRouter}
                              />

                              <Route
                                    exact
                                    path={'/'}
                                    component={JournalScreen}     
                              />

                              <Redirect to='/auth/login' />


                        </Switch>

                  </div>




            </Router>
      )
}

export default AppRouter