// Carica la libreria di Google Charts
google.charts.load('current', {
  packages: ['corechart', 'bar']
});

// Imposta la funzione di callback da eseguire quando la libreria è caricata
google.charts.setOnLoadCallback(drawChart);

// Funzione per disegnare il grafico
function drawChart() {
  // Dati per il grafico
  var data = new google.visualization.arrayToDataTable([
    ['City', '2020', '2021'],
    ['New York', 8175000, 8008000],
    ['Los Angeles', 3792000, 3694000],
    ['Chicago', 2695000, 2392000],
    ['Houston', 2099000, 1953000],
    ['Phoenix', 1526000, 1453000]
  ]);

  // Impostazioni per il grafico
  var options = {
    chart: {
      title: 'Population of Largest U.S. Cities',
      subtitle: 'Based on 2020 and 2021 estimates',
    },
    bars: 'horizontal' // grafico a barre orizzontale
  };

  // Crea il grafico
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

  // Disegna il grafico con i dati e le opzioni
  chart.draw(data, options);
}
