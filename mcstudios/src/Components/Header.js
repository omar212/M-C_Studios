import React, {Component} from 'react';
import {Content, Drawer, Header, Layout, Navigation} from 'react-mdl';

class header extends Component {
  render() {
    return (
        <div style = {{ height: '300px', position: 'relative' }}><Layout>
        <Header transparent title = "Title" style = {{ color: 'white' }}>
        <Navigation><a href = "#">Link</a>
            </Navigation>
        </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="#">Link</a>
        </Navigation>
              </Drawer><Content /></Layout>
    </div>);
  }
}

export default header;
