window.addEventListener('load', function () {
    const form = document.querySelector('#form');
    const input = document.querySelector('#firstinput'); 
    const list = document.querySelector('#one');

        form.addEventListener('submit', function (fo){
            fo.preventDefault()

                const task = input.value;
                if(!task) {
                    alert('Input your to do list for today');
                    return;
                }

                const taskELement = document.createElement('div');
                taskELement.classList.add('two');

                const taskContent = document.createElement('div');
                taskContent.classList.add('content');

                taskELement.appendChild(taskContent);

                const inputElement = document.createElement('input');
                inputElement.classList.add('todolist');
                inputElement.type = 'type';
                inputElement.value = task;
                inputElement.setAttribute('readonly', 'readonly')

                taskContent.appendChild(inputElement)

                const inputActions = document.createElement('div');
                inputActions.classList.add('actions')

                const inputEdit = document.createElement('button');
                inputEdit.classList.add('edit');
                inputEdit.innerHTML = 'Edit'

                const inputDelete = document.createElement('button');
                inputDelete.classList.add('delete')
                inputDelete.innerHTML = 'Delete'

                inputActions.appendChild(inputEdit);
                inputActions.appendChild(inputDelete);

                taskELement.appendChild(inputActions)

                list.appendChild(taskELement)

                input.value = ''

                inputEdit.addEventListener('click',  () => {
                    if(inputEdit.innerText.toLowerCase() == 'edit') {
                        inputElement.removeAttribute('readonly');
                        inputElement.focus();
                        inputEdit.innerText = 'Save';
                    }
                    else {
                        inputElement.setAttribute('readonly', 'readonly')
                        inputEdit.innerText = 'Edit'
                    }
                })

                inputDelete.addEventListener('click', () => {
                    list.removeChild(taskELement)
                })
        })
})

//variables
const reveal = document.querySelector('.word');
const hidden = document.querySelector('.hid');

    reveal.addEventListener('click', function () {

        if(hidden.classList.contains('word')) {
            hidden.classList.remove('word')
        }
        else {
            hidden.classList.add('word')
        }
    })