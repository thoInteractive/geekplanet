import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'react-router-dom/Link';
import styled from 'styled-components';
import HomeSearch from './search';
import ShoppingCartIcon from '../shoppingcart/shoppingCartIcon';
import { backgroundColor } from '../theme';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor,
  },
});

const Header = ({
  classes,
  toggleDrawer,
}) => (
  <AppBar
    position="fixed"
    className={classes.appBar}
  >
    <StyledToolbar>
      <TitleContainer>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Title to="/">
          <Typography variant="title" color="inherit">
            {APP.TITLE}
          </Typography>
        </Title>
      </TitleContainer>
      <HomeSearch />
      <ShoppingCartIcon />
    </StyledToolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
