import template from './home.template';
import wizzard from '../../assets/img/landing_page_wizzard.png';
import screenshot1 from '../../assets/img/screenshots/screenshot1.png';
import screenshot2 from '../../assets/img/screenshots/screenshot2.png';
import screenshot3 from '../../assets/img/screenshots/screenshot3.png';
import screenshot4 from '../../assets/img/screenshots/screenshot4.png';


class LandingPage {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);

    document.querySelector('.lp-wizzard').setAttribute('src', wizzard);

    document.querySelector('.gameplay-screenshot.screenshot1').setAttribute('src', screenshot1);
    document.querySelector('.gameplay-screenshot.screenshot2').setAttribute('src', screenshot2);
    document.querySelector('.gameplay-screenshot.screenshot3').setAttribute('src', screenshot3);
    document.querySelector('.gameplay-screenshot.screenshot4').setAttribute('src', screenshot4);
  }

  static empty() {
    document.querySelector('.landing-page').remove();
  }
}

export default LandingPage;
