const addBtn = document.querySelector('.todo-add-btn');
const todoInput = document.querySelector('.todo-add-field');
const todoContainer = document.querySelector('.todo-container')
const STORAGE_KEY = 'todoLists';

const app ={
    todoLists : JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
    setConfig(value) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    },
    render() {
        let todos ='';
        todos = this.todoLists.map((item, index) => {
            if(item.isCompleted){
                return `
                        <li class="todo-item">
                            <label class="todo-check-label">
                                <input type="checkbox" class="todo-checkbox" data-index =${index} checked>
                                    <span class="check-mark"></span>
                                    <span class="todo-content">${item.name}</span>
                            </label>
                            <div class="todo-delete todo-delete--check" data-index=${index}>
                                <i class="fas fa-times"></i>
                            </div>
                        </li>`
            }else{
                return `
                        <li class="todo-item">
                            <label class="todo-check-label">
                                <input type="checkbox" class="todo-checkbox" data-index =${index}>
                                    <span class="check-mark"></span>
                                    <span class="todo-content">${item.name}</span>
                            </label>
                            <div class="todo-delete" data-index=${index}>
                                <i class="fas fa-times"></i>
                            </div>
                        </li>`
            }
        })
        todoContainer.innerHTML=todos.join('')

    },
    addTodo(item) {
        this.todoLists.push({name: item, isCompleted: false});
        this.setConfig(this.todoLists);
        this.render();
        todoInput.value= '';
        todoInput.focus();
    },
    handleTodo(e){
            const deleteBtn = e.target.closest('.todo-delete');
            if(deleteBtn){
                console.log(this);
                const index = deleteBtn.dataset.index;
                this.todoLists.splice(index, 1);
                this.setConfig(this.todoLists);
                this.render();
            }
            const checkBtn =e.target.closest('.todo-checkbox');
            if(checkBtn){
                if(checkBtn.checked){
                    const index = checkBtn.dataset.index;
                    this.todoLists[index].isCompleted=true;
                    this.setConfig(this.todoLists);
                    this.render();
                }else{
                    const index = checkBtn.dataset.index;
                    this.todoLists[index].isCompleted=false;
                    this.setConfig(this.todoLists);
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
        todoContainer.onclick= this.handleTodo.bind(this)
        //check

    },
    start() {
        this.render();
        this.handleEvents();
    }
}
app.start();