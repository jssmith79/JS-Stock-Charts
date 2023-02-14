async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    //You are using both the mockData and the data from the twelvedata API so I commented out the mock data part as the fetch command return data 
    //const { GME, MSFT, DIS, BNTX } = mockData;
    //const stocks = [GME, MSFT, DIS, BNTX];



    const API_KEY = '6a29e68398f84ab68e742e61032201ad';

    //defining the response and result variables within the try/catch block limit the scope for these variables so you either define them outside the block or remove the try/catch
    //try { 
    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=${API_KEY}`);
    const result = await response.json();
    console.log(result);
    // } catch (error) {
    // console.error(error);
    // }
    // }

    //I replaced this with the destructing assignment. Both are correct and should work fine but it is good to get used to the destructing syntax
    // let GME = result.GME
    // let MSFT = result.MSFT
    // let DIS = result.DIS
    // let BTNX = result.BTNX  

    const { GME, MSFT, DIS, BNTX } = result;
    const stocks = [GME, MSFT, DIS, BNTX]; //You refernce the stock variable in your chart but it did not exist so I added it
    

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
    
    //This is identical to the first chart. I guess you were trying to use the code for the second chart, I commented it out as it is a duplicate
    // new Chart(timeChartCanvas.getContext('2d'), {
    //     type: 'line',
    //     data: {
    //         labels: stocks[0].values.map(value => value.datetime),
    //         datasets: stocks.map(stock => ({
    //             label: stock.meta.symbol,
    //             data: stock.values.map(value => parseFloat(value.high)),
    //             backgroundColor: getColor(stock.meta.symbol),
    //             borderColor: getColor(stock.meta.symbol),
    //         }))
    //     }
    // });
}
