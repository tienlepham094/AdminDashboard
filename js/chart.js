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
        plugins:{
            legend:{
                display:false,
            },
        },
        scales:{
            y: {
                max: 1200,
                min: 200,
                ticks:{
                    stepSize: 200,
                },
                grid:{
                    drawBorder: false,
                },
            },
            x:{
                grid: {
                    display: false,
                }
            }
        },
        layout:{
            padding:{
                left:10
            },
            fontColor:"#6C7383",
        },
        responsive:true,
        
    }
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
            borderRadius: 5,
        },
        {
            label: 'Online Sales',
            data: [400, 340, 550, 480, 170],
            backgroundColor: '#4B49AC',
            borderRadius: 5,
        }
      ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {  
            legend: {
                display:false,
            },
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
            y:{
                max: 560,
                min: 0,
                ticks:{
                    stepSize:100,
                    callback: function(value){
                        return "$"+ value ;
                    }
                },
                grid:{
                    drawBorder: false,
                },
            },
            x:{
                grid:{
                    display:false
                },
                
            }
        },
        
    },
})
//donut sales chart
const ctx3= document.getElementById('salesDonutChart')
const counter={
    id:'counter',
    beforeDraw(chart, args,options){
        const {ctx, chartArea:{top, right, bottom, left,width,height}}=chart;
        ctx.save();
        ctx.fillStyle='#1f1f1f';
        ctx.font='50px sans-serif'
        ctx.textAlign='center'
        ctx.fillText('76', width / 2, top + (height / 2) + 20)
    }
}
const donutChart= new Chart(ctx3,{
    type:'doughnut',
    data:{
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [60, 70, 70],
            backgroundColor: [
                "#4B49AC","#FFC100", "#248AFD",
            ],
            borderColor: "rgba(0,0,0,0)",
            cutout:'80%'
        }
        ]

    },
    options:{
        maintainAspectRatio: false,
        responsive:true,
        legend:{
                display:false,
        },
        plugins:{
            legend:{
                display:false
            },
        }
    },
    plugins: [counter],

});
