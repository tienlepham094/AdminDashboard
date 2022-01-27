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
        },
        {
            label: "Downloads",
            data: [400, 450, 410, 500, 480, 600, 450, 550, 460, "560", "450", "700", "450", "640", "550", "650", "400", "850", "800"],
            borderColor: [
                '#F09397'
            ],
            borderWidth: 2,
            fill: false,
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
                grid: {
                    display: true,
                }
            },
            x:{
                grid: {
                    display: false,
                }
            }
        },
        layout:{
            padding: 10,
            fontColor:"#6C7383",
        },
        responsive:true,

    }
})
