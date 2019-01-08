import 'babel-polyfill';
import './assets/styles/style.css';
import ChoosePlayerName from './screens/choose-name/chooseName';
import LandingPage from './screens/home/home';
import MagicSpell from './components/modal-dialog/magic-spell';
import { combinedMonsterName } from './utils';
import { mnstrAdj, mnstrType, mnstrName } from './config';
import FireBase from './db/firebase';
import SoundController from './components/controllers/sound/soundController';

const startApp = () => {
  FireBase.init();
  LandingPage.draw();
  SoundController.draw();

  document.querySelector('.play-button .button').addEventListener('click', async (e) => {
    e.preventDefault();
    const playerName = await ChoosePlayerName.getNewPlayerName();
    await MagicSpell.start(playerName, combinedMonsterName(mnstrAdj, mnstrType, mnstrName));
  });
};

startApp();
