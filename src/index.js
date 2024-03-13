/*
 * LightningChart JS Example that showcases a Customer Satisfaction graph using a LineSeries and DateTime-Axis.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, Themes } = lcjs

// Create a XY Chart.
const chart = lightningChart().ChartXY({
    theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
}).setTitle('Customer Satisfaction')

// Use DateTime TickStrategy for this Axis
chart.getDefaultAxisX().setTickStrategy(
    AxisTickStrategies.DateTime
)

// Add a line series.
const lineSeries = chart.addLineSeries().setName('Customer Satisfaction')

// Setup view nicely.
chart.getDefaultAxisY()
    .setScrollStrategy(undefined)
    .setInterval({ start: 0, end: 100, stopAxisAfter: false })
    .setTitle('Satisfaction %')

// Data for the plotting
const satisfactionData = [
    { x: new Date(2008, 0, 1).getTime(), y: 0 },
    { x: new Date(2008, 1, 1).getTime(), y: 8 },
    { x: new Date(2008, 2, 1).getTime(), y: 12 },
    { x: new Date(2008, 3, 1).getTime(), y: 18 },
    { x: new Date(2008, 4, 1).getTime(), y: 22 },
    { x: new Date(2008, 5, 1).getTime(), y: 32 },
    { x: new Date(2008, 6, 1).getTime(), y: 40 },
    { x: new Date(2008, 7, 1).getTime(), y: 48 },
    { x: new Date(2008, 8, 1).getTime(), y: 50 },
    { x: new Date(2008, 9, 1).getTime(), y: 54 },
    { x: new Date(2008, 10, 1).getTime(), y: 59 },
    { x: new Date(2008, 11, 1).getTime(), y: 65 },
    { x: new Date(2009, 0, 1).getTime(), y: 70 },
    { x: new Date(2009, 1, 1).getTime(), y: 68 },
    { x: new Date(2009, 2, 1).getTime(), y: 70 },
    { x: new Date(2009, 3, 1).getTime(), y: 69 },
    { x: new Date(2009, 4, 1).getTime(), y: 66 },
    { x: new Date(2009, 5, 1).getTime(), y: 65.4 },
    { x: new Date(2009, 6, 1).getTime(), y: 64 },
    { x: new Date(2009, 7, 1).getTime(), y: 65 },
    { x: new Date(2009, 8, 1).getTime(), y: 63.5 },
    { x: new Date(2009, 9, 1).getTime(), y: 62 },
    { x: new Date(2009, 10, 1).getTime(), y: 61.2 },
    { x: new Date(2009, 11, 1).getTime(), y: 63 },
    { x: new Date(2010, 0, 1).getTime(), y: 61 },
    { x: new Date(2010, 1, 1).getTime(), y: 62 },
    { x: new Date(2010, 2, 1).getTime(), y: 62 },
    { x: new Date(2010, 3, 1).getTime(), y: 60 },
    { x: new Date(2010, 4, 1).getTime(), y: 57.8 },
    { x: new Date(2010, 5, 1).getTime(), y: 58 },
    { x: new Date(2010, 6, 1).getTime(), y: 61 },
    { x: new Date(2010, 7, 1).getTime(), y: 59 },
    { x: new Date(2010, 8, 1).getTime(), y: 63 },
    { x: new Date(2010, 9, 1).getTime(), y: 61 },
    { x: new Date(2010, 10, 1).getTime(), y: 61.8 },
    { x: new Date(2010, 11, 1).getTime(), y: 62 },
    { x: new Date(2011, 0, 1).getTime(), y: 59.9 },
    { x: new Date(2011, 1, 1).getTime(), y: 58 },
    { x: new Date(2011, 2, 1).getTime(), y: 60 },
    { x: new Date(2011, 3, 1).getTime(), y: 63 },
    { x: new Date(2011, 4, 1).getTime(), y: 59.5 },
    { x: new Date(2011, 5, 1).getTime(), y: 62.5 },
    { x: new Date(2011, 6, 1).getTime(), y: 59.7 },
    { x: new Date(2011, 7, 1).getTime(), y: 57 },
    { x: new Date(2011, 8, 1).getTime(), y: 61 },
    { x: new Date(2011, 9, 1).getTime(), y: 59 },
    { x: new Date(2011, 10, 1).getTime(), y: 61 },
    { x: new Date(2011, 11, 1).getTime(), y: 65 },
    { x: new Date(2012, 0, 1).getTime(), y: 62 },
    { x: new Date(2012, 1, 1).getTime(), y: 60 },
    { x: new Date(2012, 2, 1).getTime(), y: 58 },
    { x: new Date(2012, 3, 1).getTime(), y: 59 },
    { x: new Date(2012, 4, 1).getTime(), y: 61 },
    { x: new Date(2012, 5, 1).getTime(), y: 64 },
    { x: new Date(2012, 6, 1).getTime(), y: 65.5 },
    { x: new Date(2012, 7, 1).getTime(), y: 67 },
    { x: new Date(2012, 8, 1).getTime(), y: 68 },
    { x: new Date(2012, 9, 1).getTime(), y: 69 },
    { x: new Date(2012, 10, 1).getTime(), y: 68 },
    { x: new Date(2012, 11, 1).getTime(), y: 69.5 },
    { x: new Date(2013, 0, 1).getTime(), y: 69.9 },
    { x: new Date(2013, 1, 1).getTime(), y: 68.5 },
    { x: new Date(2013, 2, 1).getTime(), y: 67 },
    { x: new Date(2013, 3, 1).getTime(), y: 65 },
    { x: new Date(2013, 4, 1).getTime(), y: 63 },
    { x: new Date(2013, 5, 1).getTime(), y: 60 },
    { x: new Date(2013, 6, 1).getTime(), y: 61.6 },
    { x: new Date(2013, 7, 1).getTime(), y: 62 },
    { x: new Date(2013, 8, 1).getTime(), y: 61 },
    { x: new Date(2013, 9, 1).getTime(), y: 60 },
    { x: new Date(2013, 10, 1).getTime(), y: 63.3 },
    { x: new Date(2013, 11, 1).getTime(), y: 62.7 },
    { x: new Date(2014, 0, 1).getTime(), y: 64.3 },
    { x: new Date(2014, 1, 1).getTime(), y: 63 },
    { x: new Date(2014, 2, 1).getTime(), y: 61.2 },
    { x: new Date(2014, 3, 1).getTime(), y: 60 },
    { x: new Date(2014, 4, 1).getTime(), y: 61 },
    { x: new Date(2014, 5, 1).getTime(), y: 64 },
    { x: new Date(2014, 6, 1).getTime(), y: 61.9 },
    { x: new Date(2014, 7, 1).getTime(), y: 61 },
    { x: new Date(2014, 8, 1).getTime(), y: 58 },
    { x: new Date(2014, 9, 1).getTime(), y: 59 },
    { x: new Date(2014, 10, 1).getTime(), y: 60.5 },
    { x: new Date(2014, 11, 1).getTime(), y: 61 },
    { x: new Date(2015, 0, 1).getTime(), y: 63 },
    { x: new Date(2015, 1, 1).getTime(), y: 64.5 },
    { x: new Date(2015, 2, 1).getTime(), y: 65 },
    { x: new Date(2015, 3, 1).getTime(), y: 66.2 },
    { x: new Date(2015, 4, 1).getTime(), y: 64.9 },
    { x: new Date(2015, 5, 1).getTime(), y: 63 },
    { x: new Date(2015, 6, 1).getTime(), y: 62 },
    { x: new Date(2015, 7, 1).getTime(), y: 63 },
    { x: new Date(2015, 8, 1).getTime(), y: 61.8 },
    { x: new Date(2015, 9, 1).getTime(), y: 62 },
    { x: new Date(2015, 10, 1).getTime(), y: 63 },
    { x: new Date(2015, 11, 1).getTime(), y: 64.2 },
    { x: new Date(2016, 0, 1).getTime(), y: 63 },
    { x: new Date(2016, 1, 1).getTime(), y: 61 },
    { x: new Date(2016, 2, 1).getTime(), y: 59.7 },
    { x: new Date(2016, 3, 1).getTime(), y: 61 },
    { x: new Date(2016, 4, 1).getTime(), y: 58 },
    { x: new Date(2016, 5, 1).getTime(), y: 59 },
    { x: new Date(2016, 6, 1).getTime(), y: 58 },
    { x: new Date(2016, 7, 1).getTime(), y: 58 },
    { x: new Date(2016, 8, 1).getTime(), y: 57.5 },
    { x: new Date(2016, 9, 1).getTime(), y: 59.2 },
    { x: new Date(2016, 10, 1).getTime(), y: 60 },
    { x: new Date(2016, 11, 1).getTime(), y: 61.9 },
    { x: new Date(2017, 0, 1).getTime(), y: 63 },
    { x: new Date(2017, 1, 1).getTime(), y: 64.1 },
    { x: new Date(2017, 2, 1).getTime(), y: 65.9 },
    { x: new Date(2017, 3, 1).getTime(), y: 64 },
    { x: new Date(2017, 4, 1).getTime(), y: 65 },
    { x: new Date(2017, 5, 1).getTime(), y: 62 },
    { x: new Date(2017, 6, 1).getTime(), y: 60 },
    { x: new Date(2017, 7, 1).getTime(), y: 58 },
    { x: new Date(2017, 8, 1).getTime(), y: 57 },
    { x: new Date(2017, 9, 1).getTime(), y: 58.2 },
    { x: new Date(2017, 10, 1).getTime(), y: 58.6 },
    { x: new Date(2017, 11, 1).getTime(), y: 59.3 },
    { x: new Date(2018, 0, 1).getTime(), y: 61 },
]

// Adding points to the series
lineSeries.add(satisfactionData)

// Show the customized result table for each point
lineSeries.setCursorResultTableFormatter((builder, series, xValue, yValue) => {
    return builder
        .addRow('Customer Satisfaction')
        .addRow(series.axisX.formatValue(xValue))
        .addRow(yValue.toFixed(2) + '%')
})
