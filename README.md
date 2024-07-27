# Chartly

Chartly is a lightweight JavaScript library for creating simple yet customizable charts, including bar charts, line charts, and pie charts. It's designed to be easy to use and integrate into your projects.

## Features

- Bar Chart, Line Chart, and Pie Chart support
- Customizable colors and options
- Axis labels and gridlines
- Lightweight and easy to use

## Installation

You can install Chartly via npm or include it directly in your project.

### Using npm

Run the following command in your project directory to install Chartly:

```sh
npm install chartly
```

### Using a script tag

Download the library and include it in your HTML file:

```js
<script type="module" src="path/to/chartly/src/index.js"></script>
```

## Usage

### Importing the Library

If you are using modules, you can import Chartly as follows:

```js
import Chartly from "chartly";
```

### Example : Creating Charts in HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chartly Example</title>
</head>

<body>
  <!-- Bar Chart -->
  <canvas id="barChart" width="600" height="400"></canvas>

  <!-- Line Chart -->
  <canvas id="lineChart" width="600" height="400"></canvas>

  <!-- Pie Chart -->
  <canvas id="pieChart" width="600" height="400"></canvas>

  <script type="module">
    import Chartly from 'path/to/chartly/src/index.js';

    // Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        data: [15, 25, 10, 30, 20],
        label: 'Bar Chart Data',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
    new Chartly.BarChart(barCtx, barData, {
      color: 'blue'
    }).draw();

    // Line Chart
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        data: [5, 20, 15, 25, 10],
        label: 'Line Chart Data',
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true
      }]
    };
    new Chartly.LineChart(lineCtx, lineData, {
      color: 'green'
    }).draw();

    // Pie Chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieData = {
      datasets: [{
        data: [10, 20, 30, 40],
        backgroundColor: ['red', 'blue', 'green', 'yellow']
      }],
      labels: ['Red', 'Blue', 'Green', 'Yellow']
    };
    new Chartly.PieChart(pieCtx, pieData, {
      colors: ['red', 'blue', 'green', 'yellow']
    }).draw();
  </script>
</body>


</html>
```

### Example: Creating Charts in Node.js

Here's how you can create a bar chart, line chart, and pie chart using Chartly in a Node.js script:

```javascript
const { createCanvas } = require("canvas");
const Chartly = require("chartly");

// Create a canvas and context
const canvas = createCanvas(600, 400);
const ctx = canvas.getContext("2d");

// Bar Chart Example
const barData = {
  labels: ["A", "B", "C", "D", "E"],
  datasets: [{ data: [12, 19, 3, 5, 2] }],
};
const barChart = new Chartly.BarChart(ctx, barData, { color: "blue" });
barChart.draw();

// Save the Bar Chart as an image
const fs = require("fs");
const out = fs.createWriteStream(__dirname + "/barChart.png");
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on("finish", () => console.log("Bar chart saved as barChart.png"));

// Line Chart Example
const lineCanvas = createCanvas(600, 400);
const lineCtx = lineCanvas.getContext("2d");
const lineData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{ data: [5, 10, 15, 20, 25] }],
};
const lineChart = new Chartly.LineChart(lineCtx, lineData, {
  color: "green",
});
lineChart.draw();

const lineOut = fs.createWriteStream(__dirname + "/lineChart.png");
const lineStream = lineCanvas.createPNGStream();
lineStream.pipe(lineOut);
lineOut.on("finish", () => console.log("Line chart saved as lineChart.png"));

// Pie Chart Example
const pieCanvas = createCanvas(600, 400);
const pieCtx = pieCanvas.getContext("2d");
const pieData = {
  datasets: [{ data: [10, 20, 30, 40] }],
  labels: ["Red", "Blue", "Green", "Yellow"],
};
const pieChart = new Chartly.PieChart(pieCtx, pieData, {
  colors: ["red", "blue", "green", "yellow"],
});
pieChart.draw();

const pieOut = fs.createWriteStream(__dirname + "/pieChart.png");
const pieStream = pieCanvas.createPNGStream();
pieStream.pipe(pieOut);
pieOut.on("finish", () => console.log("Pie chart saved as pieChart.png"));
```
## API Documentation

### BarChart

**Constructor:**

new Chartly.BarChart(context, data, options)

**Parameters:**

- context (CanvasRenderingContext2D): The canvas context to draw the chart on.
- data (Object): The data for the chart.
  - labels (Array): Labels for the x-axis.
  - datasets (Array): An array of datasets (each dataset is an object with a data array).
- options (Object): Optional settings for the chart.
  - color (String): Color for the bars (default is 'blue').

**Methods:**

- draw(): Draws the bar chart.

### LineChart

**Constructor:**

new Chartly.LineChart(context, data, options)

**Parameters:**

- context (CanvasRenderingContext2D): The canvas context to draw the chart on.
- data (Object): The data for the chart.
  - labels (Array): Labels for the x-axis.
  - datasets (Array): An array of datasets (each dataset is an object with a data array).
- options (Object): Optional settings for the chart.
  - color (String): Color for the line (default is 'blue').

**Methods:**

- draw(): Draws the line chart.

### PieChart

**Constructor:**

new Chartly.PieChart(context, data, options)

**Parameters:**

- context (CanvasRenderingContext2D): The canvas context to draw the chart on.
- data (Object): The data for the chart.
  - datasets (Array): An array of datasets (each dataset is an object with a data array).
- options (Object): Optional settings for the chart.
  - colors (Array): Colors for the slices.

**Methods:**

- draw(): Draws the pie chart.

## Description

Chartly provides an easy-to-use interface for generating different types of charts. The library is designed with simplicity and performance in mind, making it suitable for both small and large-scale projects. By leveraging the Canvas API, Chartly offers a flexible solution for visualizing data without requiring additional dependencies.

## Contributing

We welcome contributions to Chartly! If you have suggestions, bug reports, or feature requests, please feel free to submit them through GitHub issues or pull requests. Your feedback and contributions are greatly appreciated!
