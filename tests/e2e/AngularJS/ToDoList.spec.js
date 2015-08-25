  var ToDo = function(){
	  this.addSomeControl = element.all(by.css('.row.example')).get(1);
	  this.toDoApp = this.addSomeControl.element(by.css('.well.ng-scope'));
	  this.addToDoTextField = this.addSomeControl.element(by.model('todoList.todoText'));
	  this.addButton = this.toDoApp.element(by.css('.btn-primary'));
	  this.listItem = this.addSomeControl.all(by.repeater('todo in todoList.todos'));
	  this.checkBox = this.addSomeControl.all(by.model('todo.done'));
	  this.archiveButton = this.toDoApp.element(by.tagName('a'));
  };
  
  describe('In the Add Some Control tutorial', function() {
	  beforeEach(function() {
		  browser.get('https://angularjs.org/');
	  });
	  var toDo = new ToDo();
	  var thirdItemInList = toDo.listItem.get(2);
	  var thirdToDo = 'Here is a new todo';
	  
	  it('Adding a new toto should appear in the list"', function() {
		  expect(toDo.listItem.count()).toEqual(2);
		  toDo.addToDoTextField.click();
		  toDo.addToDoTextField.sendKeys(thirdToDo);
		  toDo.addButton.click();
		  expect(toDo.listItem.count()).toEqual(3);
		  expect(thirdItemInList.element(by.tagName('span')).getText()).toEqual(thirdToDo);
	  });	
  });
  
describe('In the Add Some Control tutorial - removal', function() {
	  beforeEach(function() {
		  browser.get('https://angularjs.org/');
	  });
	  var toDo = new ToDo();
	  var thirdItemInList = toDo.listItem.get(2);
	  var thirdToDo = 'Here is a new todo';
	  var fourthItemInList = toDo.listItem.get(3);
	  var fourthToDo = 'And another one';
	  
	  it('Removes items from the list"', function() {
		  var thirdCheckBox = toDo.checkBox.get(2);
		  
		  toDo.addToDoTextField.click();
		  toDo.addToDoTextField.sendKeys(thirdToDo);
		  toDo.addButton.click();
		  toDo.addToDoTextField.click();
		  toDo.addToDoTextField.sendKeys(fourthToDo);
		  toDo.addButton.click();
		  
		  thirdCheckBox.click();
		  toDo.archiveButton.click();
		  expect(toDo.listItem.count()).toEqual(2);
		  
	  });	 	  
  });