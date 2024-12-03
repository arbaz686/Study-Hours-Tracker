# Study Hours Tracker

The **Study Hours Tracker** is a dynamic web-based application that allows users to track and visualize their daily study hours in a graphical format. It uses `Chart.js` to create a line chart that represents productivity trends over time. The project includes features like date-based tracking, unique line colors for each day, and local storage support to retain data between sessions.

## Live Demo

Access the live demo of the project [here](https://arbaz686.github.io/Study-Hours-Tracker).

## Features

- **Track Study Hours**: Enter study hours at regular intervals (e.g., every 12 hours).
- **Date-Based Visualization**: Automatically associates study hours with dates in the format `DD-MMM` (e.g., `01-DEC`).
- **Color-Coded Lines**: Each day's data is represented with a unique color for better visualization.
- **Persistent Data**: Data is stored locally in the browser using `localStorage`, ensuring it is retained across sessions.
- **Reset Option**: Clear all data and start afresh with a single click.
- **Responsive Design**: The application works seamlessly across various devices and screen sizes.
- **Cross-Browser Support**: Optimized to work with modern browsers like Chrome, Firefox, and Edge.


## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Getting Started](#getting-started)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Screenshots](#screenshots)
6. [Contributing](#contributing)
7. [License](#license)

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling and layout design.
- **JavaScript (ES6)**: For dynamic content updates and interactivity.
- **Chart.js**: For creating visually appealing and responsive charts.
- **LocalStorage**: To store user data persistently in the browser.

## Getting Started

### Prerequisites

Ensure you have a modern web browser installed (e.g., Chrome, Firefox, Edge).

### Installation

1. Clone the repository:

   ```
   
   git clone https://github.com/arbaz686/Study-Hours-Tracker.git
   
   ```
2. Navigate to the project directory:

   ```
   
   cd Study-Hours-Tracker
   
   ```
3. Open `index.html` in your browser:

   ```
   
   open index.html
   
   ```
   Or drag and drop the file into your browser.

### Usage

1. **Adding Study Hours**:
   - Input the number of hours studied in the input field and click "Add Data."
   - The graph updates in real-time, showing your productivity trend.

2. **View By Date**:
   - Each day is automatically assigned a unique color, and data points are grouped by date.
   - Dates increment after every two entries.

3. **Reset Data**:
   - Click the "Reset Data" button to clear all records and restart tracking.

4. **Persistent Storage**:
   - Data is saved automatically in your browser. Even if you refresh or close the tab, your data remains intact.

## Screenshots

### Dashboard
![Study Hours Tracker Dashboard](https://github.com/user-attachments/assets/ec9eeede-5335-4c43-b607-3b355fdca41c)


### Graph
![Graph Visualization](https://github.com/user-attachments/assets/c6780ab6-1f94-42cc-bdc7-7d6710878d66)


## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:

   ```
   
   git checkout -b feature-name
   
   ```
3. Commit your changes:

   ```
   
   git commit -m "Add feature-name"
   
   ```
4. Push the branch:

   ```
   
   git push origin feature-name
   
   ```
5. Open a pull request on the original repository.

### Reporting Issues

If you encounter any issues or have suggestions for improvement, please open an issue in the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
