import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-scroll'

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: '5px solid #96d093',
    margin: '0px 70px',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '40px',
  },
  base: {
    backgroundColor: '#41574f',
    boxShadow: 'none',
    height: '140px',
  },
  button: {
    color: '#96d093',
    fontSize: '32px',
    fontWeight: '100',
    textTransform: 'capitalize',
  },
  title: {
    fontSize: '60px',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.base}>
      <Toolbar className={classes.root}>
        <Link to="intro" spy={true} smooth={true} duration={500}>
          <Button className={classes.button}>The Story</Button>
        </Link>
        <Link to="team" spy={true} smooth={true} duration={500}>
          <Button className={classes.button}>The Team</Button>
        </Link>
        <Typography variant="h6" className={classes.title}>
          Undark
        </Typography>
        <Link to="playable" spy={true} smooth={true} duration={500}>
          <Button className={classes.button}>The Process</Button>
        </Link>
        <Link to="contact-us" spy={true} smooth={true} duration={500}>
          <Button className={classes.button}>Contact Us</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
