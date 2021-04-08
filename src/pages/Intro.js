import React from 'react'
import house from './../assets/images/house.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  imageContainer: {
    textAlign: 'left',
    paddingLeft: '82px !important',
    paddingTop: '70px !important',
  },
  textContainer: {
    alignSelf: 'center',
  },
  text: {
    color: '#FFEEC6',
    textAlign: 'justify',
    marginTop: '30px',
    paddingLeft: '50px !important',
  },
}))

const Intro = () => {
  const classes = useStyles()
  return (
    <div className="view-container" id="intro">
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.imageContainer}>
          <img src={house} alt="" />
        </Grid>
        <Grid item xs={6} className={classes.textContainer}>
          <Typography variant="h5" component="h5" className={classes.text}>
            UNDARK es un juego narrativo de puzzles sobre 2 personajes
            ficticios, Sarah y Amelia, que son partícipes de la historia real de
            las chicas del radio.
          </Typography>

          <Typography variant="h5" component="h5" className={classes.text}>
            Uno de los personajes, Amelia, es justamente una de las chicas del
            radio y junto a Sarah, su nieta, y a través de diferentes
            interacciones multitemporales, debemos ayudarla a resolver ciertas
            situaciones y tomar difíciles decisiones.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Intro
