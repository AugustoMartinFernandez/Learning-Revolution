/*Grafico de Lenguajes de programacion*/
let datos = {
  labels: ["2019", "2020", "2021", "2022", "2023"],
  datasets: [{
      label: "JavaScript",
      data: [100, 120, 150, 180, 200],
      backgroundColor: "#F7DF1E", // Color de fondo
      borderColor: "#D4AC0D", // Color del borde
      borderWidth: 2,
      text: ["A", "B", "C", "D", "E"], // Texto para las etiquetas
    },
    {
      label: "Python",
      data: [80, 90, 110, 130, 150],
      backgroundColor: "#306998",
      borderColor: "#214963",
      borderWidth: 2,
      text: ["W", "X", "Y", "Z", "P"], // Texto para las etiquetas
    },
    {
      label: "Java",
      data: [60, 70, 80, 90, 100],
      backgroundColor: "#007396",
      borderColor: "#005376",
      borderWidth: 2,
      text: ["M", "N", "O", "P", "Q"], // Texto para las etiquetas
    },
    {
      label: "C#",
      data: [40, 50, 60, 70, 80],
      backgroundColor: "#68217A",
      borderColor: "#4B155D",
      borderWidth: 2,
      text: ["E", "F", "G", "H", "I"], // Texto para las etiquetas
    },
    {
      label: "Ruby",
      data: [30, 40, 50, 60, 70],
      backgroundColor: "#CC342D",
      borderColor: "#AC281B",
      borderWidth: 2,
      text: ["R", "S", "T", "U", "V"], // Texto para las etiquetas
    },
  ],
};

let opciones = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true,
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Lenguajes de Programación mas populares y usados por Año",
      font: {
        size: 18,
      },
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    subtitle: {
      display: true,
      text: "Datos precisos para ilustrar el ejemplo",
      font: {
        size: 14,
      },
    },
  },
};

// Obtén el contexto del lienzo
let ctx = document.getElementById("graficoPersonasPorAno").getContext("2d");

// Crea el gráfico de barras
let graficoPersonasPorAno = new Chart(ctx, {
  type: "bar",
  data: datos,
  options: opciones,
});
