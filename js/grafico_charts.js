/*Grafico de Lenguajes de programacion*/
let datos = {
  labels: ["2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
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
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
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
        annotations: [
          {
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
          },
        ],
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

/*Grafico Sueldos*/
document.addEventListener("DOMContentLoaded", function () {
  // Datos de ejemplo (reemplaza esto con tus propios datos)
  let datosSueldosMensuales = {
    labels: [
      "Ene 2022",
      "Feb 2022",
      "Mar 2022",
      "Abr 2022",
      "May 2022",
      "Jun 2022",
      "Jul 2022",
      "Ago 2022",
      "Sep 2022",
      "Oct 2022",
      "Nov 2022",
      "Dic 2022",
      "Ene 2023",
      "Feb 2023",
      "Mar 2023",
      "Abr 2023",
      "May 2023",
      "Jun 3",
      "Jul 2023",
      "Ago 2023",
      "Sep 2023",
      "Oct 2023",
      "Nov 2023",
      "Dic 2023",
    ],
    datasets: [
      {
        label: "Sueldo Promedio Desarrolladores ($)",
        data: [
          40000, 57000, 66000, 46000, 72000, 78000, 80000, 86000, 89000, 70000,
          76000, 89000, 99000, 92000, 80000, 78000, 86000, 100000, 102000,
          104000, 96000, 114000, 116000, 119000,
        ],
        borderColor: "rgba(33, 150, 243, 1)", // Azul
        borderWidth: 3,
        pointBackgroundColor: "rgba(33, 150, 243, 1)",
        fill: false,
      },
      {
        label: "Sueldo Promedio Programadores ($)",
        data: [
          70000, 73000, 57000, 64000, 69000, 55000, 67000, 69000, 73000, 86000,
          79000, 83000, 87000, 89000, 60000, 74000, 83000, 96000, 98000, 100000,
          90000, 104000, 106000, 117000, 10000,
        ],
        borderColor: "rgba(255, 99, 132, 1)", // Rojo
        borderWidth: 3,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  let opcionesSueldosMensuales = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        beginAtZero: true,
        callback: function (value, index, values) {
          return "$" + value;
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Evolución de Sueldos Mensuales (2022-2023)",
        font: {
          size: 20,
        },
      },
      subtitle: {
        display: true,
        text: "Comparación a lo largo de los meses de 2022 y 2023",
        font: {
          size: 16,
        },
      },
    },
  };

  // Obtén el contexto del lienzo
  let ctxSueldosMensuales = document
    .getElementById("graficoSueldosMensuales")
    .getContext("2d");

  // Crea el gráfico de líneas
  let graficoSueldosMensuales = new Chart(ctxSueldosMensuales, {
    type: "line",
    data: datosSueldosMensuales,
    options: opcionesSueldosMensuales,
  });
});


