interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Local",
  lastName: "Poet",
  age: 25,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Brian",
  lastName: "Momanyi",
  age: 23,
  location: "Nakuru"
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement("table");
  for (const student of studentsList) {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.innerText = student.firstName;
    row.appendChild(firstNameCell);
    const locationCell = document.createElement("td");
    locationCell.innerText = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
  }
  document.body.appendChild(table);
}

renderTable();