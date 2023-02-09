async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
 

    const API_KEY = '6a29e68398f84ab68e742e61032201ad';

    async function main() {
    try {
        const response = await fetch(`https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        } catch (error) {
        console.error(error);
        }
    }
   
}

main();