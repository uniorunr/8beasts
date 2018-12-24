import template from './home.template';

class LandingPage {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
  }

  static empty() {
    document.querySelector('.landing-page').remove();
  }
}

export default LandingPage;
