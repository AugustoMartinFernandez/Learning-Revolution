let datos = {
    labels: ["María González", "Juan Pérez", "Carolina Rodríguez", "Roberto Martínez"],
    datasets: [
      {
        label: 'Éxito Profesional',
        data: [99, 74, 84, 92],
        backgroundColor: ['#F7DF1E', '#306998', '#ff6347', '#68217A'],
        borderColor: ['#D4AC0D', '#214963', '#bc3020', '#8d3ba1'],
        borderWidth: 2,
      },
    ],
  };
  
  let opciones = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Éxito Profesional de Usuarios que compraron en The Learning Revolution",
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
  let ctx = document.getElementById("graficoExitoProfesional").getContext("2d");
  
  // Crea el gráfico tipo doughnut
  let graficoExitoProfesional = new Chart(ctx, {
    type: "doughnut",
    data: datos,
    options: opciones,
  });
  