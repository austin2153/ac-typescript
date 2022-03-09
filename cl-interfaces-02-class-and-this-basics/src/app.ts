class Department {
  name: string;

  // executed when you instantiate the class (line 14)
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

// create a Department object from the class
const accounting = new Department('FBI');

// call the describe function of the class on this instance
accounting.describe();

// dont do this...
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();