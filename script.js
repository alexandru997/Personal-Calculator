const incomeSalary = document.getElementById("income-salary"),
  incomeFreelance = document.getElementById("income-freelance"),
  incomeExtra1 = document.getElementById("income-extra-1"),
  incomeExtra2 = document.getElementById("income-extra-2");

const costsFlat = document.getElementById("costs-flat"),
  costsHouseServices = document.getElementById("costs-house-service"),
  costsTransport = document.getElementById("costs-transport"),
  costsCredit = document.getElementById("costs-credits");

const totalMonthInput = document.getElementById("total-month"),
  totalDayInput = document.getElementById("total-day"),
  totalYearInput = document.getElementById("total-year");

let totalMonth, totalDay, totalYear;

const moneyBoxRange = document.getElementById("money-box-range"),
  accumulationInput = document.getElementById("accumulation"),
  spend = document.getElementById("spend");

let accumulation = 0;
let totalPocents = 0;

const inputs = document.querySelectorAll(".input");

for (input of inputs) {
  input.addEventListener("input", () => {
    coutingAviableMoney();
    calculationProcents();
  });
}

const strToNum = (str) => (str.value ? parseInt(str.value) : 0);

const coutingAviableMoney = () => {
  const totalPerMonth =
    strToNum(incomeSalary) +
    strToNum(incomeFreelance) +
    strToNum(incomeExtra1) +
    strToNum(incomeExtra2);
  const totalCosts =
    strToNum(costsFlat) +
    strToNum(costsHouseServices) +
    strToNum(costsTransport) +
    strToNum(costsCredit);

  totalMonth = totalPerMonth - totalCosts;
  totalMonthInput.value = totalMonth;
};

moneyBoxRange.addEventListener("input", (e) => {
  const totalProcentEl = document.getElementById("total-procents");
  totalPocents = e.target.value;
  totalProcentEl.innerHTML = totalPocents;
  calculationProcents();
});

const calculationProcents = () => {
  accumulation = ((totalMonth * totalPocents) / 100).toFixed();

  accumulationInput.value = accumulation;
  spend.value = totalMonth - accumulation;
  totalDay = (spend.value / 30).toFixed();
  totalDayInput.value = totalDay;
  totalYear = accumulation * 12;
  totalYearInput.value = totalYear;
};
