var boost = new RadialGauge({
  renderTo: "vehicle-boost",
  width: 300,
  height: 300,
  units: "Boost (PSI)",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  valueBox: false,
  maxValue: 40,
  majorTicks: ["0", "10", "20", "30", "40"],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
    {
      from: 30,
      to: 40,
      color: "rgba(255, 5, 5, 1)"
    }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var coolant = new RadialGauge({
  renderTo: "vehicle-coolant",
  width: 300,
  height: 300,
  units: "Coolant (°F)",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  valueBox: false,
  maxValue: 250,
  majorTicks: [
    "0",
    "25",
    "50",
    "75",
    "100",
    "125",
    "150",
    "175",
    "200",
    "225",
    "250"
  ],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
    {
      from: 225,
      to: 250,
      color: "rgba(255, 5, 5, 1)5)"
    }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var revs = new RadialGauge({
  renderTo: "vehicle-revs",
  width: 300,
  height: 300,
  units: "RPM x1000",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  valueBox: false,
  maxValue: 8,
  majorTicks: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
    {
      from: 7.2,
      to: 8,
      color: "rgba(255, 5, 5, 1)5)"
    }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var speed = new RadialGauge({
  renderTo: "vehicle-speed",
  width: 300,
  height: 300,
  units: "Speed (MPH)",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  valueBox: false,
  maxValue: 220,
  majorTicks: [
    "0",
    "20",
    "40",
    "60",
    "80",
    "100",
    "120",
    "140",
    "160",
    "180",
    "200",
    "220"
  ],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
    {
      from: 160,
      to: 220,
      color: "rgba(255, 5, 5, 1)5)"
    }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var voltage = new RadialGauge({
  renderTo: "vehicle-voltage",
  width: 300,
  height: 300,
  units: "Battery (Volts)",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  valueBox: false,
  maxValue: 20,
  majorTicks: ["0", "5", "10", "15", "20"],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
    {
      from: 160,
      to: 220,
      color: "rgba(255, 5, 5, 0)5)"
    }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var pressure = new RadialGauge({
  renderTo: "vehicle-pressure",
  width: 300,
  height: 300,
  units: "Oil (PSI)",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  valueBox: false,
  maxValue: 220,
  majorTicks: [
    "0",
    "20",
    "40",
    "60",
    "80",
    "100",
    "120",
    "140",
    "160",
    "180",
    "200",
    "220"
  ],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
    {
      from: 160,
      to: 220,
      color: "rgba(255, 5, 5, 1)5)"
    }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();
