/*
 * LightningChart JS Example that showcases a Customer Satisfaction graph using a LineSeries and DateTime-Axis.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    AxisTickStrategies,
    DataPatterns
} = lcjs

// Create a XY Chart.
const dateOrigin = new Date(2008, 0, 1)
const chart = lightningChart().ChartXY({
    defaultAxisXTickStrategy: AxisTickStrategies.DateTime(dateOrigin)
})
    .setTitle('Customer Satisfaction')

chart.setPadding({ right: '5' })

// Add a progressive line series.
// Using the DataPatterns object to select the horizontalProgressive pattern for the line series.
const lineSeries = chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })
    .setName('Customer Satisfaction')

// Generate some points using for each month
const dataFrequency = 30 * 24 * 60 * 60 * 1000

// Setup view nicely.
chart.getDefaultAxisY()
    .setScrollStrategy(undefined)
    .setInterval(0, 100)
    .setTitle('Satisfaction %')

// Data for the plotting
const satisfactionData = [
    { x: 0, y: 0 },
    { x: 1, y: 8 },
    { x: 2, y: 12 },
    { x: 3, y: 18 },
    { x: 4, y: 22 },
    { x: 5, y: 32 },
    { x: 6, y: 40 },
    { x: 7, y: 48 },
    { x: 8, y: 50 },
    { x: 9, y: 54 },
    { x: 10, y: 59 },
    { x: 11, y: 65 },
    { x: 12, y: 70 },
    { x: 13, y: 68 },
    { x: 14, y: 70 },
    { x: 15, y: 69 },
    { x: 16, y: 66 },
    { x: 17, y: 65.4 },
    { x: 18, y: 64 },
    { x: 19, y: 65 },
    { x: 20, y: 63.5 },
    { x: 21, y: 62 },
    { x: 22, y: 61.2 },
    { x: 23, y: 63 },
    { x: 24, y: 61 },
    { x: 25, y: 62 },
    { x: 26, y: 62 },
    { x: 27, y: 60 },
    { x: 28, y: 57.8 },
    { x: 29, y: 58 },
    { x: 30, y: 61 },
    { x: 31, y: 59 },
    { x: 32, y: 63 },
    { x: 33, y: 61 },
    { x: 34, y: 61.8 },
    { x: 35, y: 62 },
    { x: 36, y: 59.9 },
    { x: 37, y: 58 },
    { x: 38, y: 60 },
    { x: 39, y: 63 },
    { x: 40, y: 59.5 },
    { x: 41, y: 62.5 },
    { x: 42, y: 59.7 },
    { x: 43, y: 57 },
    { x: 44, y: 61 },
    { x: 45, y: 59 },
    { x: 46, y: 61 },
    { x: 47, y: 65 },
    { x: 48, y: 62 },
    { x: 49, y: 60 },
    { x: 50, y: 58 },
    { x: 51, y: 59 },
    { x: 52, y: 61 },
    { x: 53, y: 64 },
    { x: 54, y: 65.5 },
    { x: 55, y: 67 },
    { x: 56, y: 68 },
    { x: 57, y: 69 },
    { x: 58, y: 68 },
    { x: 59, y: 69.5 },
    { x: 60, y: 69.9 },
    { x: 61, y: 68.5 },
    { x: 62, y: 67 },
    { x: 63, y: 65 },
    { x: 64, y: 63 },
    { x: 65, y: 60 },
    { x: 66, y: 61.6 },
    { x: 67, y: 62 },
    { x: 68, y: 61 },
    { x: 69, y: 60 },
    { x: 70, y: 63.3 },
    { x: 71, y: 62.7 },
    { x: 72, y: 64.3 },
    { x: 73, y: 63 },
    { x: 74, y: 61.2 },
    { x: 75, y: 60 },
    { x: 76, y: 61 },
    { x: 77, y: 64 },
    { x: 78, y: 61.9 },
    { x: 79, y: 61 },
    { x: 80, y: 58 },
    { x: 81, y: 59 },
    { x: 82, y: 60.5 },
    { x: 83, y: 61 },
    { x: 84, y: 63 },
    { x: 85, y: 64.5 },
    { x: 86, y: 65 },
    { x: 87, y: 66.2 },
    { x: 88, y: 64.9 },
    { x: 89, y: 63 },
    { x: 90, y: 62 },
    { x: 91, y: 63 },
    { x: 92, y: 61.8 },
    { x: 93, y: 62 },
    { x: 94, y: 63 },
    { x: 95, y: 64.2 },
    { x: 96, y: 63 },
    { x: 97, y: 61 },
    { x: 98, y: 59.7 },
    { x: 99, y: 61 },
    { x: 100, y: 58 },
    { x: 101, y: 59 },
    { x: 102, y: 58 },
    { x: 103, y: 58 },
    { x: 104, y: 57.5 },
    { x: 105, y: 59.2 },
    { x: 106, y: 60 },
    { x: 107, y: 61.9 },
    { x: 108, y: 63 },
    { x: 109, y: 64.1 },
    { x: 110, y: 65.9 },
    { x: 111, y: 64 },
    { x: 112, y: 65 },
    { x: 113, y: 62 },
    { x: 114, y: 60 },
    { x: 115, y: 58 },
    { x: 116, y: 57 },
    { x: 117, y: 58.2 },
    { x: 118, y: 58.6 },
    { x: 119, y: 59.3 },
    { x: 120, y: 61 }
]

// Adding points to the series
lineSeries.add(satisfactionData.map((point) => ({ x: point.x * dataFrequency, y: point.y })))

// Show the customized result table for each point
lineSeries.setResultTableFormatter((builder, series, xValue, yValue) => {
    return builder
        .addRow('Customer Satisfaction')
        .addRow(series.axisX.formatValue(xValue))
        .addRow(yValue.toFixed(2) + "%")
})
