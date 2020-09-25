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
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '5%',
        backgroundColor: 'rgb(17, 10, 88)',
        
        borderRadius: '50px',
        boxShadow: '23px 23px 46px #070423, -23px -23px 46px #1b108d',
        textAlign: 'center'
        
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
                
                    

                    <Card
                    
                    whileHover={{ boxShadow: '23px 23px 46px #070423, -23px -23px 46px #ca6fb7' }}
                     className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                         image={Conwaysimg} title ='img of conways game' />
                         <Link className='conway-link' to='/Conways_Game'>
                        <CardContent className='conways-title'>
                            <Typography gutterBottom variant="h5" component="h2">Tetris
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.
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
          
          <Typography style={{color: 'rgb(58,123,192)'}} paragraph>
          It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.
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
                            <Typography gutterBottom variant="h5" component="h2">Tetris
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. It has been published by several companies, most prominently during a dispute over the appropriation of the game's rights in the late 1980s.
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
          
          <Typography style={{color: 'rgb(58,123,192)'}} paragraph>
          In Tetris, players must complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the playing field is filled. The longer the player can delay this inevitable outcome, the higher their score will be. In multiplayer games, the players must last longer than their opponents, and in certain versions, players can inflict penalties on opponents by completing a significant number of lines. Some adaptations have provided variations to the game's theme, such as three-dimensional displays or a system for reserving pieces.
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
