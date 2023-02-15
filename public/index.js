async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
   

    const API_KEY = '6a29e68398f84ab68e742e61032201ad';


    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=${API_KEY}`);
    const result = await response.json();
    console.log(result);

   
    const { GME, MSFT, DIS, BNTX} = result;
    const stocks = [GME, MSFT, DIS, BNTX];
    
    
    
    // Bonus Note: 
    // Another way to write the above lines would to refactor it as:
    //    const {GME, MSFT, DIS, BTNX} = result 
    // This is an example of "destructuring" an object
    // "Destructuring" creates new variables from an object or an array
 
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
        }
    });
}        