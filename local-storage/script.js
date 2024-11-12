const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const deleteButton = document.querySelector('.delete');
const unCheck = document.querySelector('.uncheck');
const items = JSON.parse(localStorage.getItem('items'))|| [];

 console.log(items); 
  function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item ={
      text,
      done : false,
    }
    items.push(item);

    populateList(items,itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((item , i) =>{
      return `
      <li>
        <input type='checkbox' data-index =${i} id="item${i}" ${item.done ? "checked" : '' } ></input>
        <label for='item${i}'>${item.text}</label>
      </li>
      `
    }).join('');
  }
  function toggleDone(e){
    if(!e.target.matches('input')) return ; // skipping the other tags like <label> etc with e
    const element = e.target
    const index = element.dataset.index;
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items,itemsList);
  }
  function unCheckAll(){
    items.map(item => item.done = false)
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items,itemsList);
  }
  function deleteAll(){
     items.splice(0,items.length);
     localStorage.clear()
     populateList(items,itemsList);

  }

  addItems.addEventListener('submit',addItem);
  itemsList.addEventListener('click', toggleDone);
  unCheck.addEventListener('click', unCheckAll);
  deleteButton.addEventListener('click', deleteAll);


  populateList(items, itemsList);

