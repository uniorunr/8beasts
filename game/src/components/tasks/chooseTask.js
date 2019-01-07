import { SimpleMath } from './simpleMath/simpleMath';
import Translation from './translation/translation';
import Audition from './audition/audition';
import DragAndDrop from './dragAndDrop/dragAndDrop';
import Sequence from './sequence/sequence';
import FindExtra from './findExtra/findExtra';

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
    case 'right order attack':
      await DragAndDrop.getAnswer();
      break;
    case 'miraculous sequence':
      await Sequence.getAnswer();
      break;
    case 'find the extra':
      await FindExtra.getAnswer();
      break;
    default:
      throw new TypeError('Something went wrong, sorry kid!');
  }
};

export default chooseTask;
