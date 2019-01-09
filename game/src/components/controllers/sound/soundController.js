import mainThemeSrc from '../../../assets/sounds/john_maus_-_believer_minimized.mp3';
import wizzardAttackSrc from '../../../assets/sounds/wizzard_attack.wav';
import wizzardHealSrc from '../../../assets/sounds/wizzard_heal.wav';
import monsterAttackSrc from '../../../assets/sounds/monster_attack.wav';
import monsterDeathSrc from '../../../assets/sounds/monster_death.wav';
import wizzardDeathSrc from '../../../assets/sounds/wizzard_death.wav';
import template from './soundController.template';

class SoundController {
  static draw() {
    sessionStorage.setItem('sound', false);
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
    SoundController.mainTheme();
  }

  static mainTheme() {
    const mainThemeSound = new Audio(mainThemeSrc);
    mainThemeSound.volume = 0.02;

    mainThemeSound.addEventListener('ended', () => {
      mainThemeSound.currentTime = 0;
      mainThemeSound.play();
    }, false);

    document.querySelector('.sound-button').addEventListener('click', (e) => {
      if (mainThemeSound.paused) {
        SoundController.play(mainThemeSound);
        e.target.value = 'sound off';
        sessionStorage.setItem('sound', true);
      } else {
        SoundController.pause(mainThemeSound);
        e.target.value = 'sound on';
        sessionStorage.setItem('sound', false);
      }
    });
  }

  static wizzardAttack() {
    const wizzardAttackSound = new Audio(wizzardAttackSrc);
    wizzardAttackSound.volume = 0.5;
    const soundState = sessionStorage.getItem('sound');

    if (soundState === 'true') {
      SoundController.play(wizzardAttackSound);
    }
  }

  static wizzardHeal() {
    const wizzardHealSound = new Audio(wizzardHealSrc);
    wizzardHealSound.volume = 0.25;
    const soundState = sessionStorage.getItem('sound');

    if (soundState === 'true') {
      SoundController.play(wizzardHealSound);
    }
  }

  static monsterAttack() {
    const monsterAttackSound = new Audio(monsterAttackSrc);
    monsterAttackSound.volume = 0.25;
    const soundState = sessionStorage.getItem('sound');

    if (soundState === 'true') {
      SoundController.play(monsterAttackSound);
    }
  }

  static monsterDeath() {
    const monsterDeathSound = new Audio(monsterDeathSrc);
    monsterDeathSound.volume = 0.9;
    const soundState = sessionStorage.getItem('sound');

    if (soundState === 'true') {
      SoundController.play(monsterDeathSound);
    }
  }

  static wizzardDeath() {
    const wizzardDeathSound = new Audio(wizzardDeathSrc);
    wizzardDeathSound.volume = 0.9;
    const soundState = sessionStorage.getItem('sound');

    if (soundState === 'true') {
      SoundController.play(wizzardDeathSound);
    }
  }

  static play(soundObj) {
    const sound = soundObj;
    sound.play();
  }

  static pause(soundObj) {
    const sound = soundObj;
    sound.pause();
  }
}

export default SoundController;
