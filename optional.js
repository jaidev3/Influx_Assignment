var obj = {};
let nameGroup = "Jaidev";
let expense = 30;
let individualExpenseArray = [];
let totalSum = 0;

var tripGroup = (nameGroup) => {
  if (obj[nameGroup] == undefined) {
    obj[nameGroup] = [];
  }
  //   console.log(obj);
};
tripGroup(nameGroup)


//////////adding 10 members/////////////////
var addMember = () => {
  for (let i = 0; i < 10; i++) {
    obj.Jaidev.push({ name: `member${i + 1}`,expenses:[] });
  }
  console.log(obj.Jaidev);
};
addMember();


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
        `---------------${
          individualExpenseArray[i].name
        } needs to get payed Rs:${Math.abs(
          individualExpenseArray[i].sum - averageExpense
        )} by group admin---------------`
      );
    } else if (individualExpenseArray[i].sum >= averageExpense) {
      console.log(
        `-------------${
          individualExpenseArray[i].name
        } needs to pay Rs:${Math.abs(
          individualExpenseArray[i].sum - averageExpense
        )} to group admin----------------`
      );
    }
  }
};

/////main function///
function main() {
  tripGroup(nameGroup);
  //console.log(obj);
  addMember();
  // console.log(obj.Jaidev);
  addExpenses(expense, member1);
  addExpenses(40, member2);
  addExpenses(expense, member3);
  // console.log(obj.Jaidev);

  splitBill();
}

// main();
