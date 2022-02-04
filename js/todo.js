const addBtn = document.querySelector('.todo-add-btn');
const todoInput = document.querySelector('.todo-add-field');
const todoContainer = document.querySelector('.todo-container')


const app ={
    todoLists : [],
    render() {
        let todos ='';
        todos = this.todoLists.map((item, index) => {
            return `
                    <li class="todo-item">
                        <label class="todo-check-label">
                            <input type="checkbox" class="todo-checkbox" data-index =${index}>
                                <span class="check-mark"></span>
                                <span class="todo-content">${item.name}</span>
                        </label>
                        <div class="todo-delete ${item.isCompleted ? 'todo-delete--check':''}" data-index=${index}>
                            <i class="fas fa-times"></i>
                        </div>
                    </li>`
        })
        todoContainer.innerHTML=todos.join('')

    },
    addTodo(item) {
        this.todoLists.push({name: item, isCompleted: false});
        this.render();
        console.log(this.todoLists);
        todoInput.value= '';
        todoInput.focus();
    },
    deleteTodo(e){
            const deleteBtn = e.target.closest('.todo-delete');
            if(deleteBtn){
                const index = deleteBtn.dataset.index;
                console.log(this);
                this.todoLists.splice(index, 1);
                this.render();
            }
    },
    handleCheck(e) {
        const checkBtn =e.target.closest('.todo-checkbox');
        if(checkBtn){
            if(checkBtn.checked){
                const index = checkBtn.dataset.index;
                this.todoLists[index].isCompleted=true;
                this.render();
            }else{
                const index = checkBtn.dataset.index;
                this.todoLists[index].isCompleted=false;
                this.render();
            }
        }
    },
    handleEvents() {
        // add event
        addBtn.addEventListener('click', () => {
            const todoValue = todoInput.value.trim()
            if(todoValue.length > 0){
                this.addTodo(todoValue)
            }
        });
        //delete
        todoContainer.onclick= this.deleteTodo.bind(this)
        //check
        todoContainer.onclick = this.handleCheck.bind(this)
    },
    start() {
        this.render();
        this.handleEvents();
    }
}
app.start();