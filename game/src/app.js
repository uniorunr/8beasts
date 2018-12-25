import 'babel-polyfill';
import './styles/style.css';
import ChoosePlayerName from './screens/choose-name/chooseName';
import LandingPage from './screens/home/home';
import { GameState, setGameState } from './game';
import loadCanvas from './screens/battle/start';
import MagicSpell from './components/modal-dialog/magic-spell';
import { pause } from './utils';

const startApp = () => {
  const gameState = new GameState();
  setGameState(gameState);
  LandingPage.draw();

  document.querySelector('.play-button .button').addEventListener('click', async (e) => {
    e.preventDefault();
    const playerName = await ChoosePlayerName.getNewPlayerName();
    loadCanvas(playerName);
    await pause(3000);
    MagicSpell.draw();
  });
};

startApp();
