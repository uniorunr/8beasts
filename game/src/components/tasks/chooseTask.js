import { SimpleMath } from './simpleMath/simpleMath';

const chooseTask = async (spell) => {
  switch (spell.toLowerCase()) {
    case 'simple math spell':
      await SimpleMath.getAnswer();
      break;
    case 'magic translation':
      await SimpleMath.getAnswer();
      break;
    default:
      throw new TypeError('Something went wrong, sorry kid!');
  }
};

export default chooseTask;
