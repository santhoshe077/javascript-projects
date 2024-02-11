const listContainer = document.getElementById("list-cntainer");
const inputbox = document.getElementById("input-box");

function addtask()
{
    if(inputbox.value ==='')
    {
        alert("Enter the text");
    }
    else
    {
        // creating dynamic html element , "li" is tag name
        let li =document.createElement("li"); 
        // storing value to the html element
        li.innerHTML=inputbox.value;

        // appending li as a child of listcontainer -> ul
        listContainer.appendChild(li);

        // creating child inside the <li> -> <span>
        let span=document.createElement("span");
        //storing x symbol in <span>
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    //removing value after enter the value
    inputbox.value='';
    // stored the entered value
    savetask();
}
//show the saved value
showtask(); 

//adding eventlisterner to change <li> attribute , click is an event, e is an object
listContainer.addEventListener("click",(e)=>
{ 
    // targetting the tag <li>
    if(e.target.tagName ==="LI")
    {
        //updating the attribute
        e.target.classList.toggle("checked");
        //saving the update
        savetask();
    }
    //targetting the tag <span>
    else if(e.target.tagName ==="SPAN")
    {
        //removing the value parentelement <li>
        e.target.parentElement.remove();
    }
})



function savetask()
{
    // storing value in local storage
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask()
{
    // getting the value from local starage
    listContainer.innerHTML=localStorage.getItem("data");
}

