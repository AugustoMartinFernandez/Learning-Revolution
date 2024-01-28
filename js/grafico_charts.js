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

/*Grafico de Desarrolladores Web*/

document.addEventListener("DOMContentLoaded", function () {
  // Datos de ejemplo (reemplaza esto con tus propios datos)
  let datosDesarrolladores = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [{
        label: "Desarrolladores Web",
        data: [1200000, 1500000, 1800000, 2000000, 2200000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Programadores",
        data: [800000, 900000, 1000000, 1100000, 1200000],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  let opcionesDesarrolladores = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Evolución de Desarrolladores Web y Programadores",
        font: {
          size: 20,
        },
      },
      subtitle: {
        display: true,
        text: "Número de profesionales a lo largo de los años",
        font: {
          size: 16,
        },
      },
      annotation: {
        annotations: [{
          type: "line",
          mode: "horizontal",
          scaleID: "y",
          value: 1500000,
          borderColor: "rgba(255, 99, 132, 0.7)",
          borderWidth: 2,
          label: {
            content: "Línea de referencia",
            enabled: true,
            position: "right",
          },
        }, ],
      },
    },
  };

  // Obtén el contexto del lienzo
  let ctxDesarrolladores = document
    .getElementById("graficoDesarrolladores")
    .getContext("2d");

  // Crea el gráfico de área apilada
  let graficoDesarrolladores = new Chart(ctxDesarrolladores, {
    type: "line", // Cambiado a tipo 'line' para asegurar compatibilidad
    data: datosDesarrolladores,
    options: opcionesDesarrolladores,
  });
});
