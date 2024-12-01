// script.js

// Initialize variables
const form = document.getElementById("study-form");
const studyHoursInput = document.getElementById("study-hours");
const resetButton = document.getElementById("reset-data");
const ctx = document.getElementById("studyChart").getContext("2d");

let studyData = JSON.parse(localStorage.getItem("studyData")) || []; // Load stored data
let startDate = new Date('2024-12-01'); // Start from 01-DEC

// Helper function to format dates (DD-MMM)
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  return `${day}-${month}`;
}

// Generate a pool of colors (you can extend this pool as needed)
const colorPool = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C00", "#00FF8C", "#8C00FF", "#F7A8B8", "#FFD700", "#00BFFF",
  "#8B4513", "#228B22", "#DC143C", "#A52A2A", "#0000FF", "#FF1493", "#FFD700", "#32CD32", "#FF6347", "#00CED1"
];

// Function to cycle through unique colors
function getUniqueColor(index) {
  return colorPool[index % colorPool.length]; // Cycles through colorPool and avoids repetition
}

// Chart.js initialization
let studyChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: studyData.map((_, index) => formatDate(new Date(startDate.setDate(startDate.getDate() + (index === 0 ? 0 : (index % 2 === 0 ? 1 : 0)))))),
    datasets: [
      {
        label: "Study Hours",
        data: studyData, // Directly use the study hours entered by the user
        borderColor: studyData.map((_, index) => getUniqueColor(index)), // Assign unique color to each entry
        borderWidth: 2,
        fill: false,
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Hours",
        },
        suggestedMin: 0,
        suggestedMax: 12,  // Adjust as needed
      },
    },
  },
});

// Update the chart data
function updateChart() {
  studyChart.data.labels = studyData.map((_, index) => formatDate(new Date(startDate.setDate(startDate.getDate() + (index === 0 ? 0 : (index % 2 === 0 ? 1 : 0))))));
  studyChart.data.datasets[0].data = studyData;
  studyChart.data.datasets[0].borderColor = studyData.map((_, index) => getUniqueColor(index)); // Apply unique colors to the line
  studyChart.update();
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const hours = parseFloat(studyHoursInput.value);
  if (!isNaN(hours) && hours >= 0) {
    studyData.push(hours); // Add entered hours directly to the studyData array
    localStorage.setItem("studyData", JSON.stringify(studyData));
    updateChart();
    studyHoursInput.value = ""; // Clear the input field
  }
});

// Handle reset button
resetButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset all data?")) {
    studyData = [];
    localStorage.setItem("studyData", JSON.stringify(studyData));
    updateChart();
  }
});

// Initial chart update
updateChart();
