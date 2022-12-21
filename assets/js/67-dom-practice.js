import { students } from "../data/students.js";

const tblStudentTbody = document.querySelector("#tblStudents tbody");

/* EVENTS */
document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
    const lastTDs = tblStudentTbody.querySelectorAll("tr td:last-child");
    console.log(lastTDs);

    lastTDs.forEach( (td ,index)=> {
        if(td.innerText<50){
           // td.style.backgroundColor = "red";
           tblStudentTbody.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor = "red";
        }
    } )
});

/* EVENTS */

const loadData = () => {
    let strHtml = "";

    students.forEach( (students, index)=> {
        strHtml += `<tr>
        <th scope="row">${index+1}</th>
        <td>${students.name}</td>
        <td>${students.point}</td>
      </tr>`;
    } );

    tblStudentTbody.innerHTML = strHtml;

};



loadData();
