# Date-time axis

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.

### Description

This example shows creation of a DateTime Axis, for rendering XY-series where either/both of X/Y dimensions can present *time*. This doesn't affect the input of data - format remains as *{x: number, y: number}* - however, DateTime-axes format their values from number to a date and time. This affects axis labels, markers and cursors.

A DateTime-*Axis* is created by specifying its *TickStrategy*. Here's how it looks when creating a new *Axis*:

```javascript
const bottomAxisDateTime = chart.addAxisX(false, AxisTickStrategies.DateTime())
```

If you want to specify the *TickStrategy* of a default *Axis*, you must do it when constructing the *ChartXY* using *ChartXYOptions* interface:
```javascript
const chart = lightningChart().ChartXY({
    // ChartXYOptions
    defaultAxisXTickStrategy: AxisTickStrategies.DateTime()
})
```

The above mentioned examples will provide an Axis that will format its scale values to their DateTime-representations. This conversion relies on a reference date, further referred to as *origin-date*. This *origin-date* specifies the DateTime value that is equal to *zero* as a numeric representation. Incremental values will result in progressive DateTimes by milliseconds. For example, given *origin-date* is equal to the **1st of January 2002, 2PM**, a numeric value of **7,200,000** would be translated to **1st of January 2002 4PM**.

As such, the *origin-date* must be able to be specified to whichever DateTime is desired. It is done by passing a *javascript Date object* to the function that creates the *DateTime TickStrategy*:

```javascript
// Define the origin-date. (y, m [0-11], d [1-31], h [0-23])
const originDate = new Date(2002, 0, 1, 13)
// Create DateTime AxisTickStrategy with specified originDate.
const dateTimeTickStrategy = AxisTickStrategies.DateTime(originDate)
```

If this *TickStrategy* would be supplied to an *X-Axis*, it would effectively mean that its scale would start from 1st of January 2002 14PM, so a *XY-point* with coordinates `{ x: 0, y: 0 }` would be formated as `{ x: 1.1.2002 14:00, y: 0 }`.


It is worth mentioning that big *DateTime*-intervals can produce severe precision problems (eq. when zooming in). The only way to battle this is by reducing the distance of timestamps from the active *origin-date*.

### API links

* Axis tick strategies: [AxisTickStrategies][]
* XY cartesian chart: [ChartXY][]
* Progressive line series: [ProgressiveLineSeries][]


### Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

© Arction Ltd 2009-2019. All rights reserved.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://www.arction.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://www.arction.com/support-services/

[AxisTickStrategies]: https://www.arction.com/lightningchart-js-api-documentation/v1.1.0/globals.html#axistickstrategies
[ChartXY]: https://www.arction.com/lightningchart-js-api-documentation/v1.1.0/classes/chartxy.html
[ProgressiveLineSeries]: https://www.arction.com/lightningchart-js-api-documentation/v1.1.0/classes/progressivelineseries.html