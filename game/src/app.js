import 'babel-polyfill';
import './styles/style.css';
import ChoosePlayerName from './screens/choose-name/chooseName';
import LandingPage from './screens/home/home';
import { GameState, setGameState } from './game';
import loadCanvas from './screens/battle/start';

const startApp = () => {
  const gameState = new GameState();
  setGameState(gameState);
  LandingPage.draw();

  document.querySelector('.play-button .button').addEventListener('click', async (e) => {
    e.preventDefault();

    const playerName = await ChoosePlayerName.getNewPlayerName();
    loadCanvas(playerName);
  });
};

startApp();
