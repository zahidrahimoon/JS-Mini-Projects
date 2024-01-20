let studentList = [];

function addStudent(){
    const studentName = document.getElementById('studentName').value;
    const grade = parseFloat(document.getElementById('grade').value);

    if(studentName.trim() ==="" || isNaN(grade)){
        alert("Please enter a valid name and number.");
        return;
    }
    const student ={
        name : studentName,
        grade: grade
    }

    studentList.push(student);

    updateStudentList();
    calculateAverage();
    clearInputFields();     
    
}

function updateStudentList(){
    const studentListElement=document.getElementById('studentList');
    studentListElement.innerHTML ="";

   studentList.forEach(student=>{
    const li =document.createElement('li');
    li.textContent=`${student.name}: ${student.grade}`;
    studentListElement.appendChild(li);
   });
}

function calculateAverage() {
    const averageGradeElement = document.getElementById('averageGrade');

    if (studentList.length === 0) {
        averageGradeElement.textContent = '0';
        return;
    }

    const totalGrade = studentList.reduce((sum, student) => sum + student.grade, 0);
    const averageGrade = totalGrade / studentList.length;

    averageGradeElement.textContent = averageGrade.toFixed(2);
}


function clearInputFields() {
    document.getElementById('studentName').value = '';
    document.getElementById('grade').value = '';
}

