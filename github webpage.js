//Section 1: 2 charts using Plotly and Chartjs-->

//Plotly map chart


d3.csv('https://raw.githubusercontent.com/ongleejengjillian-nm2207/ongleejengjillian-nm2207.github.io/main/section%201.csv', function(err, rows){
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }

      var data = [{
          type: 'choropleth',
          locationmode: 'country names',
          locations: unpack(rows, 'location'),
          z: unpack(rows, 'percentage'),
          text: unpack(rows, 'location'),
          autocolorscale: true
      }];

      var layout = {
        title: '% change in International visitor arrivals<br>from the top 15 markets (2021)',
        geo: {
            projection: {
                type: 'robinson'
            }
        }
      };

      Plotly.newPlot("myMap", data, layout, {showLink: false});
    });

  //line chart
  const myYears = ["2018", "2019", "2020", "2021", "2022"];
  const myReceipts = ["26.94", "27.69", "4.83", "1.89", "14.18"];

  const dataObj = {
    labels: myYears,
    datasets: [
        {
            label: "Total Tourism Receipts in Singapore (Billions)",
            data: myReceipts,
            borderWidth: 2,
            backgroundColor: "hsla(0, 100%, 82%, 0.6)",
            borderColor: "hsla(333, 100%, 47%, 1)"
        }
    ]
  };
  new Chart("section1-line-chart", {
    type: "line",
    data: dataObj,
    options: {
        responsive: false
    }
  }); 

  //bar chart using chartjs
  const my2Years = ["2019", "2021"];
  const myMillions = ["375.9", "75.9"];

  const dataObj2 = {
    labels: my2Years,
    datasets: [
        {
            label: "Hotel industry Revenue (Millions)",
            data: myMillions,
            borderWidth: 2,
            backgroundColor: "hsla(0, 100%, 82%, 0.6)",
            borderColor: "hsla(333, 100%, 47%, 1)"
        }
    ]
    
  };
new Chart("section2-bar-chart", {
  type: "bar",
  data: dataObj2,
  options: {
      responsive: false
  }
}); 

//pie chart using chartjs
var data = [{
  values: [38, 51, 11],
  labels: ['First', 'Repeat', 'Not Stated'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('myPie', data, layout);

var data = [{
  values: [58, 15, 9, 4, 4,],
  labels: ['Holiday', 'Visit Friends / Relatives', 'General Business Purpose', 'MICE', 'Others', 'Not Stated'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('myPie2', data, layout);