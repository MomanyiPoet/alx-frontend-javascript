interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Samuel',
  fullTimeEmployee: false,
  lastName: 'Saruni',
  location: 'Tanzania',
  contract: false,
};

console.log(teacher3);
