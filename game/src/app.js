import 'babel-polyfill';
import './styles/style.css';
import ChoosePlayerName from './screens/choose-name/chooseName';
import LandingPage from './screens/home/home';
import { GameState, setGameState } from './game';
import { loadCanvas } from './screens/battle/start';
import MagicSpell from './components/modal-dialog/magic-spell';
import { pause, combinedMonsterName } from './utils';
import { monsterAdjective, monsterType, monsterName } from './config';

const startApp = () => {
  const gameState = new GameState();
  setGameState(gameState);
  LandingPage.draw();

  document.querySelector('.play-button .button').addEventListener('click', async (e) => {
    e.preventDefault();
    const playerName = await ChoosePlayerName.getNewPlayerName();
    loadCanvas(playerName, combinedMonsterName(monsterAdjective, monsterType, monsterName));
    await pause(2000);
    await MagicSpell.getSpell();
  });
};

startApp();
