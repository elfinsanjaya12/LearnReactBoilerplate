/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import AppRouter from 'containers/router'

import history from 'containers/history'

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import TodoPage from 'containers/TodoPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable';


import Drawer from 'components/Drawer'
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

import UserIcon from '@material-ui/icons/SupervisorAccount'
import PostIcon from '@material-ui/icons/ListAlt'
import AlbumsIcon from '@material-ui/icons/PhotoAlbum'

const menuList = {
  users: {
    name: 'Users',
    icon: <UserIcon />,
  },

  todo: {
    name: 'Posts',
    icon: <PostIcon />,
  },
  albums: {
    name: 'Albums',
    icon: <AlbumsIcon />,
  },

}

export default function App() {
  return (
    <AppWrapper>
      {/* <Navbar /> */}
      <Drawer
        menuList={menuList}
        onClickMenu={to => history.push(`/${to}`)}
      >
        <AppRouter />
      </Drawer>
    </AppWrapper >
  );
}
