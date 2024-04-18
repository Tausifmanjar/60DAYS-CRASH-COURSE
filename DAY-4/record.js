// fill in javascript code here
let form = document.querySelector("form")
let tbody = document.querySelector("tbody")

loadLocalStorageData();
form.addEventListener("submit",function(e){
    e.preventDefault();


    let name = document.getElementById("name").value;
    let employeeID = document.getElementById("employeeID").value;
    let department = document.getElementById("department").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mbl = document.getElementById("mbl").value;
    

    let role = calculateRole()
    console.log(role)

    let newRow = `
        <tr>
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${exp}</td>
        <td>${email}</td>
        <td>${mbl}</td>
        <td>${role}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
        </tr>
    `
    
     tbody.innerHTML += newRow;
     SavetoLocalStorage();
     form.reset()
})
function calculateRole(experience){

    if(experience > 5){
        return  "Senior"
    }else if( experience >= 2 && experience <= 5){
        return  "Junior"
    }else{
        return  "Fresher"
    }
}

function deleteRow(row){
    let r = row.closest("tr");
    r.parentNode.removeChild(r)
    SavetoLocalStorage();
}

function SavetoLocalStorage(){
    let rows = tbody.querySelectorAll("tr")

   let data = [];

    rows.forEach((row) => {

        let rowData = {
            name : row.cells[0].textContent,
            employeeID : row.cells[1].textContent,
            department : row.cells[2].textContent,
            exp : row.cells[3].textContent,
            email : row.cells[4].textContent,
            mbl : row.cells[5].textContent,
            role : row.cells[6].textContent

        }
        data.push(rowData);
    })                                     
    localStorage.setItem("employeeData", JSON.stringify(data))


}

function loadLocalStorageData(){
    let storeData = JSON.parse(localStorage.getItem("employeeData")) 

    storeData.forEach(data => {
    let newRow = `
    <tr>
    <td>${data.name}</td>
    <td>${data.employeeID}</td>
    <td>${data.department}</td>
    <td>${data.exp}</td>
    <td>${data.email}</td>
    <td>${data.mbl}</td>
    <td>${data.role}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
    </tr>
`
tbody.innerHTML += newRow;
})

}
