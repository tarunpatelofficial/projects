window.addEventListener ('load', ()=>{
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list = document.querySelector("#tasks");


    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value;
        if(!task){
            return;
        }

        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div); 


        const task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);


        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);

        //time
        const task_time = document.createElement("input");
        task_time.classList.add("time");
        task_time.type = "time";
        task_time.style.color = "#f2e8cf";

        //To get IST
        const options = {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          };
          const currentTime = new Date().toLocaleTimeString('en-US', options);

        
        task_time.value = currentTime;
        task_content_div.appendChild(task_time);
        // task_content_div.appendChild(show_completed_time);


        const task_actions_div = document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);

        
        const task_edit_button = document.createElement("button");
        task_edit_button.classList.add("Edit");
        task_edit_button.innerHTML = "Edit";
        
        const task_delete_button = document.createElement("button");
        task_delete_button.classList.add("Delete");
        task_delete_button.innerHTML = "Delete";
    
        const task_completed_button = document.createElement("button");
        task_completed_button.classList.add("Completed");
        task_completed_button.innerHTML = "Completed";
    
        task_actions_div.appendChild(task_edit_button);
        task_actions_div.appendChild(task_completed_button);
        task_actions_div.appendChild(task_delete_button);


        task_edit_button.addEventListener('click', ()=>{
            if (task_edit_button.innerText.toLowerCase() == "edit") {
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit_button.innerText = "Save";
                task_input.style.textDecoration="none"
            }else{
                task_input.setAttribute("readonly", "readonly");
                task_edit_button.innerText ="Edit";
            }
        });

        task_delete_button.addEventListener('click',()=>{
            if (confirm("Are you sure you want pt delete this task?")) {
                list.removeChild(task_div);
            }
        })

        task_completed_button.addEventListener('click' ,()=>{
            task_input.style.textDecoration = "line-through";
            task_input.setAttribute("readonly", "readonly");
        })

        input.value = "";

    });
});
