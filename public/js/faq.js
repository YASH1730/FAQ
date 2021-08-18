
const val = document.getElementsByClassName('getval');
const text = document.getElementsByClassName('textArea');
const btn = document.getElementsByClassName("done");
const btn2 = document.getElementsByClassName("cancel");
const form = document.getElementsByClassName("Postform");
// const delet = document.getElementsByClassName("delete");
const edit  = document.getElementsByClassName('edit')




for (let i = 0; i < edit.length; i++) {
    const element = edit[i];
    element.addEventListener('click',()=>{
        text[i].style.display = "block";
        btn[i].style.display = "block";
        btn2[i].style.display = "block";
        form[i].style.display = "none";
    }
    )
    
    btn[i].addEventListener('click',()=>{
        
        if(text[i].value == "")
        {
            alert("Empty feilds are not allowed !!!")
            window.location = '/faq';
        }
        else{
            window.location = `/faq/edit/${val[i].innerText}/${text[i].value}`;
            
        }
        
        
    })
    btn2[i].addEventListener("click",()=>{
        text[i].style.display = "none";
        btn[i].style.display = "none";
        btn2[i].style.display = "none";
        form[i].style.display = "flex";
        
    })
    
    
   
}

function preventBack() { window.history.forward(); }  

    setTimeout("preventBack()", 0);  

    window.onunload = function () { null };