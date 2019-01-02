import { SimpleMath } from './simpleMath/simpleMath';
import Translation from './translation/translation';

const chooseTask = async (spell) => {
  switch (spell.toLowerCase()) {
    case 'simple math spell':
      await SimpleMath.getAnswer();
      break;
    case 'magic translation':
      await Translation.getAnswer();
      break;
    default:
      throw new TypeError('Something went wrong, sorry kid!');
  }
};

export default chooseTask;
