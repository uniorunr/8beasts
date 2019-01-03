import { SimpleMath } from './simpleMath/simpleMath';
import Translation from './translation/translation';
import Audition from './audition/audition';

const chooseTask = async (spell) => {
  switch (spell.toLowerCase()) {
    case 'simple math spell':
      await SimpleMath.getAnswer();
      break;
    case 'magic translation':
      await Translation.getAnswer();
      break;
    case 'powerful ear':
      await Audition.getAnswer();
      break;
    default:
      throw new TypeError('Something went wrong, sorry kid!');
  }
};

export default chooseTask;
