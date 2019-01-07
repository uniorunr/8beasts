import Sortable from 'sortablejs';
import template from './dragAndDrop.template';
import { Task } from '../../../screens/battle/start';
import dictionary from '../dictionary.json';
import { shuffle } from '../../../utils';

class DragAndDrop extends Task {
  static addDragAndDrop() {
    const el = document.querySelector('.letterList');
    Sortable.create(el, {
      animation: 150,
    });
  }

  static listItems(wordAsString) {
    const list = document.createElement('ul');
    list.className = 'letterList';
    const lettersArr = wordAsString.split('');
    const shuffleArr = shuffle(lettersArr);
    shuffleArr.forEach((element, i) => {
      const listItem = document.createElement('li');
      listItem.className = `letterListItem letterListItem-item${i + 1}`;
      listItem.innerHTML = element;
      list.appendChild(listItem);
    });
    const parent = document.querySelector('.task-drag-drop-wrapper');
    parent.insertBefore(list, parent.firstChild);
  }

  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
    const dict = JSON.parse(JSON.stringify(dictionary));
    const filteredDict = dict.englishWords.filter(item => item.word.length < 5);
    const { word } = filteredDict[Math.floor(Math.random() * filteredDict.length)];
    DragAndDrop.listItems(word.toLowerCase());
    DragAndDrop.addDragAndDrop();
    return word;
  }

  static empty() {
    document.querySelector('#taskDragAndDrop').remove();
  }

  static getAnswer() {
    const rightAnswer = DragAndDrop.draw().toLowerCase();
    const submitButton = document.querySelector('#taskDragAndDrop .submit-button');
    return new Promise((resolve) => {
      submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const listNodes = document.querySelector('.letterList');
        const listNodesArr = [...listNodes.childNodes];
        const resultArr = [];
        listNodesArr.forEach((element) => {
          resultArr.push(element.innerHTML);
        });
        const result = resultArr.join('');
        if (result === rightAnswer) {
          DragAndDrop.empty();
          await DragAndDrop.win('attack');
          resolve(result);
        } else {
          DragAndDrop.empty();
          await DragAndDrop.lose();
          resolve(result);
        }
      });
    });
  }
}

export default DragAndDrop;
