const canvas = document.getElementById('canvas');
canvas.width = ((window.innerWidth / 10).toFixed(0) - 3) * 10;
canvas.height = ((window.innerHeight / 10).toFixed(0) - 3) * 10;
const ctx = canvas.getContext('2d');

const genericTips = [
  'Hey kid, use your brain to win the battle!',
  'Get it together and let\'s start... finally!',
  'Prepare to the battle. And don\'t cry...',
];
const winTips = [
  'Nice shot!',
  'Great, keep it up!',
  'Wow!',
];
const loseTips = [
  'Hmm, try again...',
  'You missed!',
  'Pull yourself together!',
];

export { canvas, ctx };
export { genericTips, winTips, loseTips };
