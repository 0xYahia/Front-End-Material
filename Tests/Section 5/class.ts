abstract class Department1 {
  static fiscalYear = 2023;
  // public name: string;
  // private id: string;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(): void;

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

  describe() {
    console.log("IT Department - ID: " + this.id);
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
  private static instance: AccountingDepartment1;

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
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  static getInstance() {
    if (AccountingDepartment1.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment1("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
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

// const accounting1 = new AccountingDepartment1("d2", []);
const accounting1 = AccountingDepartment1.getInstance();
// const accounting2 = AccountingDepartment1.getInstance();
// console.log(accounting1, accounting2);

accounting1.addReport("Something went wrong...");
accounting1.mostRecentReport = "Year End Report";
console.log(accounting1.mostRecentReport);
accounting1.printReports();

accounting1.addEmploys("Yahia"); // not added because yahia is admin
accounting1.addEmploys("Joe"); // will added

console.log(accounting1);

const employee1 = Department1.createEmployee("Yahia");
console.log(employee1, Department1.fiscalYear);

const it2 = new ITDepartment1("d1", []);
accounting1.describe();
it2.describe();
