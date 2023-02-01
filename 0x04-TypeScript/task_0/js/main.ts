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
