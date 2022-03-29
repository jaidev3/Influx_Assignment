

var obj = {};
let nameGroup = "Jaidev";
let member1 = { name: "Nrupul", expenses: [] };
let member2 = { name: "Anu", expenses: [] };
let member3 = { name: "Vishakha", expenses: [] };
let expense = 30;
let individualExpenseArray = [];
let totalSum = 0;


var tripGroup = (nameGroup) => {
  if (obj[nameGroup] == undefined) {
    obj[nameGroup] = [];
  }
  //   console.log(obj);
};

//////////adding members/////////////////
var addMember = (member) => {
  obj.Jaidev.push(member);
  //   console.log(obj.Jaidev[0]);
};

//////add expenses//////

let addExpenses = (expense, member) => {
  for (let i = 0; i < obj.Jaidev.length; i++) {
    if (obj.Jaidev[i].name == member.name) {
      obj.Jaidev[i].expenses.push(expense);
    }
  }

  //   console.log(obj.Jaidev);
};

//////splitBill//////
let splitBill = () => {
  for (let j = 0; j < obj.Jaidev.length; j++) {
    let sum = 0;
    for (let k = 0; k < obj.Jaidev[j].expenses.length; k++) {
      sum = sum + obj.Jaidev[j].expenses[k];
    }
    totalSum = totalSum + sum;
    individualExpenseArray.push({ name: obj.Jaidev[j].name, sum: sum });
  }

  let averageExpense = Math.floor(totalSum / obj.Jaidev.length);
  //console.log(individualExpenseArray, totalSum, averageExpense);

  for (let i = 0; i < individualExpenseArray.length; i++) {
    if (individualExpenseArray[i].sum == averageExpense) {
      console.log(
        `--------------${individualExpenseArray[i].name} no needs to pay group admin------------`
      );
    } else if (individualExpenseArray[i].sum <= averageExpense) {
      console.log(
        `---------------${individualExpenseArray[i].name} needs to get payed Rs:${Math.abs(
          individualExpenseArray[i].sum - averageExpense
        )} by group admin---------------`
      );
    } else if (individualExpenseArray[i].sum >= averageExpense) {
      console.log(
        `-------------${individualExpenseArray[i].name} needs to pay Rs:${Math.abs(
          individualExpenseArray[i].sum - averageExpense
        )} to group admin----------------`
      );
    }
  }
};

/////main function///
function main() {
  var start = Date.now();

  tripGroup(nameGroup);
  //console.log(obj);
  addMember(member1);
  addMember(member2);
  addMember(member3);
  // console.log(obj.Jaidev);
  addExpenses(expense, member1);
  addExpenses(40, member2);
  addExpenses(expense, member3);
  // console.log(obj.Jaidev);

  splitBill();
  var end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
}

main();
