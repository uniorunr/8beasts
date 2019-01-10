import { SimpleMath } from './simpleMath/simpleMath';
import Translation from './translation/translation';
import Audition from './audition/audition';
import DragAndDrop from './dragAndDrop/dragAndDrop';
import Sequence from './sequence/sequence';
import FindExtra from './findExtra/findExtra';

const chooseTask = async (spell) => {
  switch (spell.toLowerCase()) {
    case '1. simple math spell':
      await SimpleMath.getAnswer();
      break;
    case '5. magic translation':
      await Translation.getAnswer();
      break;
    case '2. powerful ear':
      await Audition.getAnswer();
      break;
    case '3. right order attack':
      await DragAndDrop.getAnswer();
      break;
    case '6. fairy sequence':
      await Sequence.getAnswer();
      break;
    case '4. find the extra':
      await FindExtra.getAnswer();
      break;
    default:
      throw new TypeError('Something went wrong, sorry kid!');
  }
};

export default chooseTask;
