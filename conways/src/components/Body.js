import React from 'react'
import Conwaysimg from './img/conwayoflife.jpg'
import Tetris from './img/tetris2.jpg'
import './Body.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '5%',
        backgroundColor: 'rgb(17, 10, 88)',
        
        borderRadius: '50px',
        boxShadow: '23px 23px 46px #070423, -23px -23px 46px #1b108d' 
        
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      margin: '9%',
      borderRadius: '77px',
      boxShadow: 'inset 23px 23px 46px #070423, inset -23px -23px 46px #1b108d'
      
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    control: {
        padding: theme.spacing(2),
      },
  }));

 


const Body = () => {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


    return (
        <div className='body'>
            <div className='body-container'>
                
                    <Card className={classes.root}>
                    <CardActionArea>
                        <Link className='conway-link' to='/Conways_Game'>
                        <CardMedia
                        className={classes.media}
                         image={Conwaysimg} title ='img of conways game' />
                        <CardContent className='conways-title'>
                            <Typography gutterBottom variant="h5" component="h2">Conways Game
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
                            </Typography>
                        </CardContent>
                        </Link>
                        <CardActions disableSpacing>
                        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          </CardContent>
      </Collapse>
      
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                         image={Tetris} title ='img of conways game' />
                        <CardContent className='conways-title'>
                            <Typography gutterBottom variant="h5" component="h2">Conways Game
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          </CardContent>
      </Collapse>
                        </CardActionArea>
                    </Card>
                    
                

            </div>
            
        </div>
    )
}

export default Body
