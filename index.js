const programs = document.querySelectorAll("input[name=program]");
Array.from(programs).map((program) =>{
    program.addEventListener("change",handler);

})

function handler(e){
    if (e.target.checked){
        console.log(e.target.value);
        
    }
}