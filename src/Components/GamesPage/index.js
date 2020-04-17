import React, { useState, useRef } from 'react';
import games from '../../Models/games';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CanvasDraw from "react-canvas-draw";
import {
  Main,
  Tab,
  GamesTab,
  GamesBar,
  GameBox,
  AbsoluteDescription,
  DivTable,
} from './styles';
import {
  Header,
  SecondTab
} from '../MainPage/styles'

export default function GamesBuy() {
  const [filterDiv, setFilterDiv] = useState(false);
  const [open, setOpen] = useState(false);
  const [fillGames, setFillGames] = useState(games);
  const [filterValue, setFilterValue] = useState(0);
  const myCanvas = useRef()

  function handleTest() {
    setOpen(true);
    setFilterDiv(true);
  }

  function handleClose() {
    setOpen(false);

    let arrayFilter = games.filter(e => {
      if (filterValue === 200) {
        return e.price >= filterValue;
      } else {
        return e.price <= filterValue;
      }
    })
    setFillGames(arrayFilter)
  }

  return (
    <Main>
      <div className="all">
        <Tab>
          <h1>HYLDAN</h1>
        </Tab>
        <Header>
          <video className="videoDiv" loop muted autoPlay>
            <source src="https://www.callofduty.com/cdn/mw/videos/seasons/s2-hero-vid-desktop.mp4" type="video/mp4" />
          </video>
          <SecondTab>
            <div className="centerDiv">
              <img src={require('../../assets/game_undraw.svg')} alt="gameDiv" />
              <h1>HYLDAN</h1>
            </div>
          </SecondTab>
        </Header>
      </div>
      <div className="productsDiv">
        <h2 className="products-title">Todos os Produtos</h2>
        <span onClick={handleTest}>Filter</span>
      </div>
      {filterDiv &&
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title">Fill your games</DialogTitle>
          <div className="windowFillBox">
            <DivTable>
              <div className="ColumnPrices">
                <span onClick={() => setFilterValue(50)}>R$ 50 {filterValue === 50 && <i className="fas fa-check" />}</span>
                <span onClick={() => setFilterValue(100)}>R$ 100 {filterValue === 100 && <i className="fas fa-check" />}</span>
                <span onClick={() => setFilterValue(160)}>R$ 160 {filterValue === 160 && <i className="fas fa-check" />}</span>
                <span onClick={() => setFilterValue(200)}>R$ 200+ {filterValue === 200 && <i className="fas fa-check" />}</span>
              </div>
              <div className="fillBoxBtn">
                <button onClick={handleClose} className="fillButton">Fill</button>
              </div>
              <CanvasDraw
                brushColor='#000'
                lazyRadius='0'
                brushRadius='3'
                canvasWidth={400}
                canvasHeight={200}
                styled={{ marginLeft: 10, marginRight: 10 }}
                ref={myCanvas}
              >
              </CanvasDraw>
              <button className="canvasClearBtn" onClick={() => myCanvas.current.clear()}>Clear</button>
            </DivTable>
          </div>
        </Dialog>
      }
      <GamesTab>
        <GamesBar>
          {fillGames.map((games, index) => (
            <GameBox key={index}>
              <img className="col-1" src={games.image} alt="" />
              <AbsoluteDescription>
                <span>{games.name}</span>
              </AbsoluteDescription>
            </GameBox>
          ))}
        </GamesBar>
      </GamesTab>
      <div className="last-div">
        <h1>HYLDAN</h1>
      </div>
    </Main>
  )
};

