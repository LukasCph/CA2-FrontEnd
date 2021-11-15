import React from 'react';

// Routing
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content, Navs } from './SideBar.styles';

function SideBar() {
  return (
    <Wrapper>
      <Content>
        <h2>EndPoints</h2>
        <Link to="/first">
          <Navs>View Stats</Navs>
        </Link>
        <Link to="/users">
          <Navs>Users</Navs>
        </Link>
        <Link to="/chuck">
          <Navs>Tasks</Navs>
        </Link>
        <Link to="/fourth">
          <Navs>Edit Team</Navs>
        </Link>
        <Link to="/playerlookup">
          <Navs>Look-up Player</Navs>
        </Link>
      </Content>
    </Wrapper>
  );
}

export default SideBar;
