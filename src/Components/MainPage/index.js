import React from 'react';
import {
  Main,
  Header,
  Tab,
  SecondTab,
  SecondHeader,
  ImgBox,
  GamesBar,
  GamesTab,
  Games,
} from './styles';
import previewGames from '../../Models/mainPage'
import { Link } from 'react-router-dom'

export default function MainApp() {
  return (
    <div>
      <Main>
        <Header>
          <video loop muted autoPlay>
            <source src="https://media.contentapi.ea.com/content/dam/eacom/videos/2019/12/ea-video-mashup-trailer-update-dpc-23632.mp4" type="video/mp4" />
          </video>
          <Tab>
            <h1>HYLDAN</h1>
            <div>
              <a href="https://www.linkedin.com/in/marcos007/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" /></a>
              <a href="https://github.com/Maark007" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x" /></a>
            </div>
          </Tab>
          <SecondTab>
            <Link to="/games" className="hvr-fade">SEE OUR PRODUCTS</Link>
          </SecondTab>
        </Header>
        <SecondHeader>
          <div className="subtitles">
            <div className="phrase e">
              <ImgBox src="https://i.ibb.co/VJmqR6Z/emy.jpg" alt="img-1" />
              <h2>Action</h2>
              <span itemRef="span1">
                An action electronic game is a type of electronic game that challenges
                the player's speed, reflex and quick thinking.
              </span>
            </div>
            <div className="phrase">
              <ImgBox src="https://i.ibb.co/hmjMN7j/Destiny.jpg" alt="img-2" />
              <h2>Adventure</h2>
              <span>
                Adventure games, are electronic games whose emphasis
                is focused on the plot and not on the graphics or action.
              </span>
            </div>
            <div className="phrase">
              <ImgBox src="https://i.ibb.co/zNHCbcs/BFV.jpg" alt="img-3" />
              <h2>Shooting</h2>
              <span>
              shooting games is a subgenre of action games, 
              which use their main mechanics to use projectiles to eliminate enemies.
              </span>
            </div>
          </div>
        </SecondHeader>
        <GamesBar>
          <h1>FEATURED GAMES</h1>
          <GamesTab>
            {previewGames.map((previewGames, index) => (
              <div key={index} className="container">
                <Games>
                  <div className="firstImage">
                    <img className="img" src={previewGames.image} alt="img1" />
                  </div>
                  <div className="absoluteImg">
                    <img src={previewGames.name} alt="img2" />
                  </div>
                </Games>
              </div>
            ))}
          </GamesTab>
          <div className="last-div">
            <h1>HYLDAN</h1>
          </div>
        </GamesBar>
      </Main>
    </div>
  );
}