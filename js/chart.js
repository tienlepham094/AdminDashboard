const ctx = document.getElementById('orderChart').getContext('2d')
//Global Options
Chart.defaults.fontFamily= 'Nunito'

const orderChart= new Chart (ctx,{
    type:'line',
    data:{
        labels:["10","","","","","","30","","","","","", "50","","", "","","","70"],
        datasets:[{
            label:'Orders',
            data: [200, 480, 700, 600, 620, 350, 380, 350, 850, "600", "650", "350", "590", "350", "620", "500", "990", "780", "650"],
            borderColor: [
                '#4747A1'
            ],
            borderWidth: 2,
            fill: false,
            tension:0.4,
            pointRadius:0,
        },
        {
            label: "Downloads",
            data: [400, 450, 410, 500, 480, 600, 450, 550, 460, "560", "450", "700", "450", "640", "550", "650", "400", "850", "800"],
            borderColor: [
                '#F09397'
            ],
            borderWidth: 2,
            fill: false,
            tension:0.4,
            pointRadius:0,
        }
        ]
    },
    options:{
        legend:{
            display:false,
        },
        scales:{
            yAxes: [{
                display: true,
                ticks: {
                    display: true,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 200,
                    min: 200,
                    max: 1200,
                    padding: 18,
                    fontColor:"#6C7383"
                },
                gridLines: {
                    display: true,
                    color:"#f2f2f2",
                    drawBorder: false
                }
            }],
            xAxes: [{
                display: true,
                ticks: {
                    display: true,
                    padding: 10,
                    fontColor:"#6C7383"
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#eeeeee'
                }
            }],
        },
        layout:{
            padding:{
                left:10
            },
            fontColor:"#6C7383",
        },
        
    },
    responsive:true,
})
//sales chart
const ctx2= document.getElementById('salesChart')
const salesChart= new Chart(ctx2,{
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: 'Offline Sales',
            data: [480, 230, 470, 210, 330],
            backgroundColor: '#98BDFF',
        },
        {
            label: 'Online Sales',
            data: [400, 340, 550, 480, 170],
            backgroundColor: '#4B49AC',
        }
    ]
    },
    responsive: true,
    options: {
        cornerRadius: 5,
        maintainAspectRatio: false,
        legend: {
            display:false,
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 50,
                bottom: 50
            }
        },
        scales:{
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    drawBorder: false,
                    color: "#F2F2F2"
                },
                ticks: {
                    display: true,
                    min: 0,
                    max: 560,
                    callback: function(value, index, values) {
                        return  value + '$' ;
                    },
                    fontColor:"#6C7383"
                }
            }],
            xAxes: [{
                stacked: false,
                ticks: {
                    beginAtZero: true,
                    fontColor: "#6C7383"
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: false
                },
            }]
        },
        
    },
})
//donut sales chart
const ctx3= document.getElementById('salesDonutChart')
const donutChart= new Chart(ctx3,{
    type:'doughnut',
    data:{
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [60, 70, 70],
            backgroundColor: [
                "#4B49AC","#FFC100", "#248AFD",
            ],
            borderColor: "rgba(0,0,0,0)"
        }
        ]

    },
    options:{
        maintainAspectRatio: false,
        responsive:true,
        legend:{
                display:false,
        },

        elements: {
            center: {
                text: '78',
              color: '#1f1f1f', // Default is #000000
              fontStyle: 'sans-serif', // Default is Arial
              sidePadding: 20, // Default is 20 (as a percentage)
              minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
          }
    },


});
//counter plugin block
Chart.pluginService.register({
    beforeDraw: function(chart) {
      if (chart.config.options.elements.center) {
        // Get ctx from string
        var ctx = chart.chart.ctx;
  
        // Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'sans-serif';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var maxFontSize = centerConfig.maxFontSize || 50;
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
        // Start with a base font of 30px
        ctx.font = "20px " + fontStyle;
  
        // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
  
        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);
  
        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
        var minFontSize = centerConfig.minFontSize;
        var lineHeight = centerConfig.lineHeight || 25;
        var wrapText = false;
  
        if (minFontSize === undefined) {
          minFontSize = 20;
        }
  
        if (minFontSize && fontSizeToUse < minFontSize) {
          fontSizeToUse = minFontSize;
          wrapText = true;
        }
  
        // Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse + "px " + fontStyle;
        ctx.fillStyle = color;
  
        if (!wrapText) {
          ctx.fillText(txt, centerX, centerY);
          return;
        }
  
        var words = txt.split(' ');
        var line = '';
        var lines = [];
  
        // Break words up into multiple lines if necessary
        for (var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > elementWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
          } else {
            line = testLine;
          }
        }
  
        // Move the center up depending on line height and number of lines
        centerY -= (lines.length / 2) * lineHeight;
  
        for (var n = 0; n < lines.length; n++) {
          ctx.fillText(lines[n], centerX, centerY);
          centerY += lineHeight;
        }
        //Draw text in center
        ctx.fillText(line, centerX, centerY);
      }
    }
  });