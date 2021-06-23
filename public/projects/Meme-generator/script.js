const source = document.getElementById('memeImg');
const template = document.getElementById('memeTxt');
const frame = document.getElementsByClassName('box');
const submit = document.getElementById('submit')
submit.addEventListener('click',placingSource);
function placingSource (){
    if(frame[0].children[0] != undefined)
    {
        for(let index=0; index<frame[0].children.length; index+=1){
            frame[0].removeChild(frame[0].children[index]);
        }
    }
    
    if(source.files[0]!=undefined)
    {
    frame[0].style.backgroundImage="url("+URL.createObjectURL(source.files[0])+")";
    frame[0].style.backgroundRepeat="no-repeat";
    }

    if(template.value!=undefined)
    {
        console.log('im here')
        let templateElement = document.createElement('h2');
        templateElement.classList.add('txt');
        templateElement.innerText=template.value;
        frame[0].appendChild(templateElement);
    }

}
