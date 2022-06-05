const notesList = [];

function displayNotes(){
    document.getElementById("List").innerHTML = "";
    notesList.push(document.getElementById("notesBar").value)
    notesList.forEach((e)=>{

        let taskList = document.createElement("li");
        taskList.innerHTML = e;

        document.getElementById("List").append(taskList)
    })


}
    
export default displayNotes;