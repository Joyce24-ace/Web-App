// Status Distribution Pie Chart
const statusCtx = document.getElementById('statusChart').getContext('2d');
new Chart(statusCtx, {
    type: 'pie',
    data: {
        labels: ['Students', 'OSY', 'Working'],
        datasets: [{
            data: [44.4, 33.3, 22.2], // Values from your design
            backgroundColor: ['#003399', '#CC0000', '#660099']
        }]
    }
});

// Age Distribution Bar Chart
const ageCtx = document.getElementById('ageChart').getContext('2d');
new Chart(ageCtx, {
    type: 'bar',
    data: {
        labels: ['15-18', '19-21', '22-24', '25-30'],
        datasets: [{
            label: 'Youth Count',
            data: [6, 8, 2, 2], // Estimates based on your chart height
            backgroundColor: '#33CCFF'
        }]
    }
});