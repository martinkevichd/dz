let field = document.querySelector('.field');
let move = 0;

field.addEventListener('click', function(event){
    
    
    let check =function(event) {

    let blocks = document.getElementsByClassName('box');
    let arr = [];

    
    for(let i = 0; i < blocks.length; i++){
        arr.push(blocks[i].innerHTML);    
    }
    
    if(arr[0]=="X" && arr[1]=='X' && arr[2]=='X'
       ||arr[3]=="X" && arr[4]=='X' && arr[5]=='X'
       ||arr[6]=="X" && arr[7]=='X' && arr[8]=='X'
       ||arr[0]=="X" && arr[3]=='X' && arr[6]=='X'
       ||arr[1]=="X" && arr[4]=='X' && arr[7]=='X' 
       ||arr[2]=="X" && arr[5]=='X' && arr[8]=='X'
       ||arr[0]=="X" && arr[4]=='X' && arr[8]=='X'
       ||arr[2]=="X" && arr[4]=='X' && arr[6]=='X') {

        alert('ПОБЕДА КРЕСТИКОВ');
        location.reload();
       }


     if (arr[0]=="O" && arr[1]=='O' && arr[2]=='O'
    ||arr[3]=="O" && arr[4]=='O' && arr[5]=='O'
    ||arr[6]=="O" && arr[7]=='O' && arr[8]=='O'
    ||arr[0]=="O" && arr[3]=='O' && arr[6]=='O'
    ||arr[1]=="O" && arr[4]=='O' && arr[7]=='O' 
    ||arr[2]=="O" && arr[5]=='O' && arr[8]=='O'
    ||arr[0]=="O" && arr[4]=='O' && arr[8]=='O'
    ||arr[2]=="O" && arr[4]=='O' && arr[6]=='O') 
    {
        alert('ПОБЕДА НОЛИКОВ');
        location.reload();
    }
    if(move == 9){
        alert('НИЧЬЯ');
        location.reload();
    }

    }
    if(event.target.className=='box') {
        if(move%2==0) event.target.innerHTML='X';
        else event.target.innerHTML='O';
        move++;
        check(event);
   
    }
 
    
   
    
})

