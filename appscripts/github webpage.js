//section 1:  Bar chart showing top 5 International Visitor Arrivals By Inbound Tourism Markets
const myCountries = ["China", "India", "Indonesia", "Malaysia", "Bangladesh"];
const myNumbers = ["88240", "54380", "33450", "24210", "17890"];

const dataObj = {
  labels: myCountries,
  datasets: [
      {
          label: "number of tourists",
          data: myNumbers,
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
