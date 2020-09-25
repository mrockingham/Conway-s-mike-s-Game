import React, { useState, useCallback, useRef } from "react";
import "./Congame.css";
import Produce from "immer";
import FastForwardIcon from "@material-ui/icons/FastForward";
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import DialpadIcon from "@material-ui/icons/Dialpad";
import ClearIcon from "@material-ui/icons/Clear";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) =>({
  root: {
    width: '100%',
    backgroundColor: "rgb(17, 10, 88)",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "rgb(17, 10, 88)",
    color: "rgb(58,123,192)",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  pos: {
    marginBottom: 12,
  },
}));

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function Congame() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);
  const [gridSize1, setGridSize] = useState(10);
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < gridSize1; i++) {
      rows.push(Array.from(Array(gridSize1), () => 0));
    }

    return rows;
  });
  console.log(gridSize1);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1000);
  runningRef.current = running;

  const gsize = gridSize1;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }


  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setSpeed((speed) => speed);
    setCount((count) => (count += 1));
    setGrid((g) => {
      return Produce(g, (gridCopy) => {
        for (let i = 0; i < gridSize1; i++) {
          for (let s = 0; s < gridSize1; s++) {
            let neighbors = 0;

            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newS = s + y;
              if (
                newI >= 0 &&
                newI < gridSize1 &&
                newS >= 0 &&
                newS < gridSize1
              ) {
                neighbors += g[newI][newS];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][s] = 0;
            } else if (g[i][s] === 0 && neighbors === 3) {
              gridCopy[i][s] = 1;
            }
          }
        }
      });
    });
    console.log("gsize", gridSize1);
    setTimeout(runSimulation, speed);
  }, [gridSize1]);

  const runSimulation2 = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setCount((count) => (count += 1));
    setGrid((g) => {
      return Produce(g, (gridCopy) => {
        for (let i = 0; i < gridSize1; i++) {
          for (let s = 0; s < gridSize1; s++) {
            let neighbors = 0;

            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newS = s + y;
              if (
                newI >= 0 &&
                newI < gridSize1 &&
                newS >= 0 &&
                newS < gridSize1
              ) {
                neighbors += g[newI][newS];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][s] = 0;
            } else if (g[i][s] === 0 && neighbors === 3) {
              gridCopy[i][s] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation2, 3000);
  }, [gridSize1]);
  const runSimulation3 = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setCount((count) => (count += 1));
    setGrid((g) => {
      return Produce(g, (gridCopy) => {
        for (let i = 0; i < gridSize1; i++) {
          for (let s = 0; s < gridSize1; s++) {
            let neighbors = 0;

            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newS = s + y;
              if (
                newI >= 0 &&
                newI < gridSize1 &&
                newS >= 0 &&
                newS < gridSize1
              ) {
                neighbors += g[newI][newS];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][s] = 0;
            } else if (g[i][s] === 0 && neighbors === 3) {
              gridCopy[i][s] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation3, 50);
  }, [gridSize1]);




  return (
    <div className="app-body">
      <div className="grid-generation">
          <h3>
            Generation:{"  "}
            {count}
          </h3>
        </div>
        <Card className={classes.root}>
     <div className='game-lineup'>   
      <div className="grid-buttons">
        <motion.button
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
          className="conway-start"
          onClick={() => {
            setGridSize(gridSize1);
            setRunning(!running);
            if (!running) {
              runningRef.current = true;

              runSimulation();
              console.log("what is this", gridSize1);
            }
          }}
        >
          <div className="start-text">
            {running ? <StopIcon /> : <PlayArrowIcon />}
          </div>
        </motion.button>

        <motion.button
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;

              runSimulation2();
            }
          }}
        >
          <div className="slow-text">
            {running ? <StopIcon /> : <SlowMotionVideoIcon />}
          </div>
        </motion.button>

        <motion.button
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;

              runSimulation3();
            }
          }}
        >
          <div className="fast-text">
            {running ? <StopIcon /> : <FastForwardIcon />}
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 2.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setCount(0);
            const rows = [];
            for (let i = 0; i < gridSize1; i++) {
              rows.push(Array.from(Array(gridSize1), () => 0));
            }
            setGrid(rows);
            return rows;
          }}
        >
          <div className="clear-text">
            <ClearIcon />
          </div>
        </motion.button>

        <motion.button
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
          onClick={() => {
            const rows = [];
            for (let i = 0; i < gridSize1; i++) {
              rows.push(
                Array.from(Array(gridSize1), () =>
                  Math.random() > 0.6 ? 1 : 0
                )
              );
            }

            setGrid(rows);
          }}
        >
          <div className="random-text">
            <DialpadIcon />
          </div>
        </motion.button>

        {/* setCount((count) => (count += 1)); */}

        
      </div>
      
        
        <div className="grid-container">
          <div
            className="app"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridSize1}, 20px)`,
              columnGap: "3rem",
            }}
          >
            {grid.map((rows, x) =>
              rows.map((col, y) => (
                <motion.div
                  className="grid-box"
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    loop: Infinity,
                    repeatDelay: 1,
                  }}
                  
                  key={`${x}-${y}`}
                  onClick={() => {
                    const newGrid = Produce(grid, (gridCopy) => {
                      gridCopy[x][y] = grid[x][y] ? 0 : 1;
                    });
                    setGrid(newGrid);
                  }}
                  style={{
                    width: 20,
                    height: 15,
                    backgroundColor: grid[x][y] ? "purple" : '#110a58',
                    border: "solid 1px black",
                    margin: "10px",
                    paddingTop: "10px",
                    borderRadius: '50px',
        boxShadow: '23px 23px 46px #070423, -23px -23px 46px #1b108d' 
                  }}
                />
              ))
            )}
          </div>
        </div>
        <div className="grid-buttons">
        
        <motion.button
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
        type="button" onClick={handleOpen}>
        <div className='instructions'> Instructions</div>
      </motion.button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">The universe of the Game of Life is an infinite, two-dimensional grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.</h2>
            <p id="transition-modal-description">1. Any live cell with two or three live neighbors survives.</p>
            <p id="transition-modal-description">2. Any dead cell with three live neighbors becomes a live cell.</p>
            <p id="transition-modal-description">3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.</p>
          </div>
        </Fade>
      </Modal>
        <motion.button
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
          onClick={() => {
            setGridSize(15);
            const rows = [];
            for (let i = 0; i < gridSize1; i++) {
              rows.push(Array.from(Array(gridSize1), () => 0));
            }
            setGrid(rows);
            return rows;
          }}
        >
          <div className="grid-size-text">GridSize 15</div>
        </motion.button>
        <motion.button
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
          onClick={() => {
            setGridSize(10);
            const rows = [];
            for (let i = 0; i < gridSize1; i++) {
              rows.push(Array.from(Array(gridSize1), () => 0));
            }
            setGrid(rows);
            return rows;
          }}
        >
          <div className="grid-size-text">GridSize 10</div>
        </motion.button>
      </div>
       </div> 
       
      </Card>
      
    </div>
  );
}

export default Congame;
