// script.js

// Initialize variables
const form = document.getElementById("study-form");
const studyHoursInput = document.getElementById("study-hours");
const resetButton = document.getElementById("reset-data");
const ctx = document.getElementById("studyChart").getContext("2d");

let studyData = JSON.parse(localStorage.getItem("studyData")) || []; // Load stored data
let startDate = new Date("2024-12-01"); // Start from 01-DEC
let entryCounter = studyData.length; // Counter to track entries

// Helper function to format dates (DD-MMM)
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
  return `${day}-${month}`;
}

// Generate a pool of colors (extendable)
const colorPool = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C00", "#00FF8C",
  "#8C00FF", "#F7A8B8", "#FFD700", "#00BFFF", "#8B4513", "#228B22",
  "#DC143C", "#A52A2A", "#0000FF", "#FF1493", "#32CD32", "#FF6347", "#00CED1",
];

// Function to cycle through unique colors
function getUniqueColor(index) {
  return colorPool[index % colorPool.length]; // Cycles through the color pool
}

// Function to update date labels
function generateDateLabels() {
  let labels = [];
  let currentDate = new Date("2024-12-01");
  for (let i = 0; i < studyData.length; i++) {
    if (i % 2 === 0 && i !== 0) {
      currentDate.setDate(currentDate.getDate() + 1); // Increment date after every two entries
    }
    labels.push(formatDate(currentDate));
  }
  return labels;
}

// Chart.js initialization
let studyChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: generateDateLabels(), // Generate initial labels
    datasets: [
      {
        label: "Study Hours",
        data: studyData, // Use the studyData array for Y-axis
        borderColor: "#007BFF", // Single line color
        backgroundColor: "rgba(0, 123, 255, 0.1)", // Background fill color
        borderWidth: 2,
        pointBackgroundColor: studyData.map((_, index) => {
          const uniqueColor = getUniqueColor(index); // Get unique color for each data point
          return `${uniqueColor}80`; // Add transparency (alpha = 0.5)
        }),
        pointBorderColor: studyData.map((_, index) => {
          const uniqueColor = getUniqueColor(index); // Get unique color for each data point
          return `${uniqueColor}80`; // Add transparency (alpha = 0.5)
        }),
        pointBorderWidth: 1,
        pointRadius: 4,
      },
    ],
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
        suggestedMin: 0, // Start at 0
        suggestedMax: 12, // Max of 12 hours
      },
    },
  },
});

// Update the chart data
function updateChart() {
  studyChart.data.labels = generateDateLabels(); // Update labels
  studyChart.data.datasets[0].data = studyData; // Update Y-axis data
  studyChart.data.datasets[0].pointBackgroundColor = studyData.map((_, index) => {
    const uniqueColor = getUniqueColor(index);
    return `${uniqueColor}80`; // Add transparency (alpha = 0.5)
  }); // Update point colors with transparency
  studyChart.data.datasets[0].pointBorderColor = studyData.map((_, index) => {
    const uniqueColor = getUniqueColor(index);
    return `${uniqueColor}80`; // Add transparency (alpha = 0.5)
  }); // Update border colors with transparency
  studyChart.update();
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const hours = parseFloat(studyHoursInput.value);
  if (!isNaN(hours) && hours >= 0) {
    studyData.push(hours); // Add hours to data array
    localStorage.setItem("studyData", JSON.stringify(studyData)); // Save to localStorage
    updateChart(); // Update chart
    studyHoursInput.value = ""; // Clear input field
  }
});

// Handle reset button
resetButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset all data?")) {
    studyData = [];
    localStorage.setItem("studyData", JSON.stringify(studyData)); // Clear localStorage
    entryCounter = 0; // Reset entry counter
    updateChart(); // Reset chart
  }
});

// Initial chart update
updateChart();
