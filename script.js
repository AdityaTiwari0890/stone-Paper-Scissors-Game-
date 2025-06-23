let score = localStorage.getItem('score')!=undefined?JSON.parse(localStorage.getItem('score')):{
    win:0,
    lose:0,
    tie:0,
}
let computermove;
let usermove;
let final;
function computerChoice(){
    let result = Math.random()*3;
    if(result<=1){
        return "stone";
    }else if(result <=2){
        return "paper"
    }else{
        return "seazor";
    }
}
function match(choice){
    usermove = choice;
    computermove = computerChoice();
    if(usermove == computermove){
        score.tie++;
        showresult();
        final = 'tie';
        return;
    }
    if(usermove == "stone"){
        if(computermove == "seazor"){
            score.win++;
            showresult();
            final = 'win';
        }else{
            
            score.lose++;
            showresult();
            final = 'lose';
        }
    }
    else if(usermove == "paper"){
        if(computermove == "stone"){
            final = 'win';
            score.win++;
            showresult();
        }else{
            final = 'lose';
            score.lose++;
            showresult();
        }
    }
    else if( usermove == "seazor"){
        if(computermove == "paper"){
            final = 'win';
            score.win++;
            showresult();
        }else{
            final = 'lose';
            score.lose++;
            showresult();
        }
    }
}
function resetscore(){
    score={
        win:0,
        lose:0,
        tie:0
    }
    document.querySelector('.result').innerText="Reset";
}
function showresult(){
    document.querySelector('.result').innerText=`You have Chosen: ${usermove}\n Computer have Chosen: ${computermove}\n Its a ${final} \nwin ${score.win} lose: ${score.lose} tie ${score.tie}`;
    localStorage.setItem('score',JSON.stringify(score));
}