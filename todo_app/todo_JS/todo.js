//gets task from input
function get_todos() {
    //creates array of inputed tasks
    var todos= new Array;
    //pulls task saved in browser memory
    var todos_str = localStorage.getItem('todo');
    //if input is not null then JSON.parse will 
    //communicate with browser to make task a JS object
    if(todos_str !== null){
        todos= JSON.parse(todos_str);   
    }
    return todos;

}

// adds inputed task to the get_todos function array
function add() {
    // takes inputed task and makes  avar
    var task = document.getElementById('task').value;
    
    var todos = get_todos();
    //adds new task at end of array
    todos.push(task);
    //convers the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//keeps tasks displayed on screen
function show() {
    //sets task as retrieved var
    var todos = get_todos();

    //sets up task as unordered list
    var html = '<ul>';
    //displays task to the list in the order that it is inputed
    for(var i = 0; i <todos.length; i++) {
        //displays the task as a list and creates a button with the "x"
        html += '<li>' + todos[i] + '<button class="remove"  id="' + i + '">X</button></li>';

    };
    html+= '<li>';
    //displays the task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};

}

//displays inputed task when the add item button is clicked
document.getElementById("add").addEventListener('click', add);
//will keep inputs displayed on screen
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}
