    let name =  document.querySelector("#name")
    let company =  document.querySelector("#company")
    let year =  document.querySelector("#year")
    let price = document.querySelector("#price")
    let type_console = document.querySelector("#type_console")
    let submit_btn =  document.querySelector("#submit_btn")

    let table_body = document.querySelector("#table_body")

    /*
        Función para agregar un hijo a la tabla
    */

    let addConsole = (name, company ,year ,price ,type_console)=>{
        let new_row = document.createElement("tr")
        
        new_row.classList.add("table-active")
        new_row.innerHTML = 
            `<th scope='row'>${name}</th>
            <td>${company}</td>
            <td>${year}</td>
            <td>${price}</td>
            <td>${type_console}</td>`
        table_body.appendChild(new_row)
    }

    /*
        Listener para detectar el click en el boton
    */

    submit_btn.addEventListener("click", ()=>{
        let nombre = name.value
        let compañia = company.value
        let año = year.value
        let precio = price.value
        let tipo = type_console.options[type_console.selectedIndex].text
        

        addStudent(name, company ,year ,price ,type_console)
    })

    name.addEventListener("keyup", (e)=>{
        let keyCode = e.keyCode
    /*
        Listener para disparar el botón cuando se aprete enter
    */

    name.addEventListener("keyup", (event)=>{
        let keyCode = event.keyCode
        let name = name.value

        if(keyCode == 13){
            submit_btn.click()
        }
    })