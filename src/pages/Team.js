import React from 'react'
import house from './../assets/images/house.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textContainer: {
    color: '#FFEEC6',
    textAlign: 'justify',

    paddingLeft: '92px !important',
    paddingRight: '92px !important',
    paddingTop: '70px !important',
  },
  text: {
    color: '#FFEEC6',
    fontSize: '26px !important',
    textAlign: 'justify',
    marginTop: '30px',
  },
}))

const Team = () => {
  const classes = useStyles()
  return (
    <div className="view-container" id="team">
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.textContainer}>
          <Typography className={classes.text}>
            <strong>The Glowing Girls</strong> surgió en la Women's Game Jam
            2020 tras formar equipo para crear un videojuego con la temática de
            Juntas a la distancia.
          </Typography>
          <Typography className={classes.text}>
            El equipo se compone actualmente de varias personas de diferentes
            áreas.
          </Typography>
          <Typography className={classes.text}>
            Nuestra meta es visibilizar la historia de las chicas del radio a
            través de una actividad interactiva
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Team
