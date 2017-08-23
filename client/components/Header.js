import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CurrentUserQuery from '../queries/CurrentUser';

class Header extends Component {


    renderButtons(){
        if(this.props.data.loading) return <p>Loading...</p>
        
    }

    render(){

        return (
          <nav>
              <div className="nav-wrapper">
                  {this.renderButtons()}
              </div>
          </nav>
        );
    }
};

export default graphql(CurrentUserQuery)(Header);