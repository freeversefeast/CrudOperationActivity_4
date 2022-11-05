 
 const duplicate = new Set();
       
function onFormSubmit() {
        if(duplicate.has(document.getElementById("id").value)){
            alert('id is used')
           return;
        }
         var id=document.myform.id.value;  
         var fullName=document.myform.fullName.value;  
         var age=document.myform.age.value;  
        if (id==null || id==""){  
            alert("id can't be blank");  
            return false;  
        }
        if (fullName==null || fullName==""){  
            alert("Name can't be blank");  
            return false;  
        }
        if (age==null || age==""){  
            alert("age can't be blank");  
            return false;  
        }
        duplicate.add(document.getElementById("id").value);
            console.log(duplicate)
        var formData = readFormData();       
            insertNewRecord(formData);
            resetForm();     
            isValid = true;          
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
   
}


function onDelete(td) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);   
        duplicate.delete(document.getElementById("id").value);  
        console.log(duplicate);
}


   
