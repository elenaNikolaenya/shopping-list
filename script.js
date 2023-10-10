/* Новые элементы должны добавляться в список по нажатию на Enter */
/* Пустые элементы не должны добавляться */
/* Если кликнуть на элемент списка, он зачеркивается */
/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */
/* Очищать input после добавления нового элемента в список */

/*ENG*/ 
/* New elements have to be added to the list by pressing Enter */
/* Empty elements should not be added */
/* If you click on a list item, it is crossed out */
/* If you click again on the crossed out one, it becomes normal again */
/* Clear input after adding a new element to the list */

const input = document.querySelector('#input');
const list = document.querySelector('.items');

function makeListItem() {
  const listItem = document.createElement('p');
  const textListItem = input.value;

  listItem.textContent = textListItem;
  list.append(listItem);

  input.value = '';
  
  listItem.addEventListener('click', function() {
  listItem.classList.toggle('done');  
})
}

input.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    if (input.value != '') {
      makeListItem();
    }    
  }
})