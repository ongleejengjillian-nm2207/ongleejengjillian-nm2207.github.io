//section 1:  Bar chart showing top 5 International Visitor Arrivals By Inbound Tourism Markets
const myCountries = ["China", "India", "Indonesia", "Malaysia", "Bangladesh"];
const myPercentage = ["88.24", "54.38", "33.45", "24.21", "17.89"];

const dataObj = {
  labels: myCountries,
  datasets: [
      {
          label: "Percentage of tourists",
          data: myPercentage,
          borderWidth: 2,
          backgroundColor: "hsla(300, 76%, 72%, 0.5)",
          borderColor: "hsla(333, 100%, 47%, 1)"
      }
  ]
};
new Chart("section1-bar-chart", {
  type: "bar",
  data: dataObj,
  options: {
      responsive: false
  }
}); 