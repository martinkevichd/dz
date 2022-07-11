const create = function() {
    let value = document.querySelector('input');
    value.addEventListener('keydown', function(){
        if(event.keyCode === 13) {
            let list = document.createElement('div');
            
            document.body.appendChild(list);
            list.innerHTML = this.value;
            this.value = ' ';
    
           createCheckbox(list);
    
            let style = document.createElement('style');
            style.innerHTML = `
                div{
                    display:flex;
                    flex-direction: row-reverse;
                    justify-content: flex-end;
                    border: 1px solid grey;
                    background: #86a8e7;                
                    color:white;
                    font-weight: bold;
                    font-size:36px;
                    max-width: 350px;
                }
    
                .checkbox {
                    width:25px;
                    margin-left: 20px;
                    margin-right: 10px;
                }
                
                .buttonChange {
                    width:35px;
                    height:35px;
                    margin-left:5px;
                    margin-top:5px;
                    background: url(pencil.png) no-repeat ;
                    background-size:contain;
                    border:0;
                    
                }
            `;
            document.head.appendChild(style);
            
            remove(list);
        }
    });
} 

let createCheckbox = function(list){
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    list.appendChild(checkbox);

    checkbox.addEventListener('click', function(){
        if(this.checked){
            list.style.textDecoration = 'line-through';
            list.style.color = 'rgba(0, 0, 0, 0.2)';
            
        } else {
            list.style.textDecoration = 'none';
            list.style.color = 'white';
        }
    });

    let buttonChange = document.createElement('button');
           buttonChange.classList.add('buttonChange');
           list.appendChild(buttonChange);
           change(buttonChange,list);

    
}

const remove = function(list){

    let btn = document.querySelector('button');
        btn.addEventListener('click', function(){
            list.remove();
        })

}

const change = function(buttonChange,list){
    buttonChange.addEventListener('click', function(){
        let newList = prompt('Введите новое значение');
        if(newList != " ")
        {
            list.innerHTML=newList;
            createCheckbox(list);
        } 
    })
}

create();

