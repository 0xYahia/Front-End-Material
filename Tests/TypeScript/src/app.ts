class Department1 {
  // public name: string;
  // private id: string;
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department1) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmploys(employee) {
    // this.id = "5"; //! can't change it because it readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment1 extends Department1 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it1 = new ITDepartment1("d1", ["Yahia"]);

it1.addEmploys("Yahia");
it1.addEmploys("Ahmed");

it1.describe();
it1.name = "New Name";
it1.printEmployeeInformation();

console.log(it1);

class AccountingDepartment1 extends Department1 {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Not report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmploys(name: string): void {
    if (name === "Yahia") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting1 = new AccountingDepartment1("d2", []);

accounting1.addReport("Something went wrong...");
accounting1.mostRecentReport = "Year End Report";
console.log(accounting1.mostRecentReport);
accounting1.printReports();

accounting1.addEmploys("Yahia"); // not added because yahia is admin
accounting1.addEmploys("Joe"); // will added

console.log(accounting1);
