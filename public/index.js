async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
   
    const { GME, MSFT, DIS, BNTX } = mockData;
    const stocks = [GME, MSFT, DIS, BNTX];
    


    const API_KEY = '6a29e68398f84ab68e742e61032201ad';


    try {
        const response = await fetch(`https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        } catch (error) {
        console.error(error);
        }
    }
   

    
    let GME = result.GME
    let MSFT = result.MSFT
    let DIS = result.DIS
    let BTNX = result.BTNX  

    
    // Bonus Note: 
    // Another way to write the above lines would to refactor it as:
    //    const {GME, MSFT, DIS, BTNX} = result 
    // This is an example of "destructuring" an object
    // "Destructuring" creates new variables from an object or an array
    

main();