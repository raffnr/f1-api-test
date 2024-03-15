const inputYear = document.getElementById('year');
const form = document.querySelector('form');


const host = "http://ergast.com"

const getTable = () => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();

        const param = new URLSearchParams();
        param.append("year", standingYeaar);
        param.append("driver", driverId);

        ajax.open("GET" , `${host}/api/f1/2008/driverStandings`);

        ajax.onload = () => {

        }


        ajax.send();
    });
}