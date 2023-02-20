

// cloud_pct: 96
// feels_like: 5
// humidity: 54
// max_temp: 6
// min_temp: 6
// sunrise: 1674094298
// sunset: 1674130999
// temp: 6
// wind_degrees: 55
// wind_speed: 2.4 





let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
}
fahrenheit.oninput = function () {
    let c = ((parseFloat(
        fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(
        fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}
kelvin.oninput = function () {
    let f = (parseFloat(
        kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(c.toFixed(2));
}




// for distance measurement

let kilometer = document.getElementById('kilometer');
let mile = document.getElementById('mile');
let nauticalmile = document.getElementById('nauticalmile');
kilometer.oninput = function () {
    let m = (parseFloat(kilometer.value)*0.62137);
    mile.value = parseFloat(m.toFixed(2));

    let nm = (parseFloat(kilometer.value)*0.539957);
    nauticalmile.value = parseFloat(nm.toFixed(2));
}
mile.oninput = function () {
    let km = (parseFloat(mile.value)/0.62137);
    kilometer.value = parseFloat(km.toFixed(2));

    let nm = (parseFloat( mile.value)*0.868976 );
    nauticalmile.value = parseFloat(nm.toFixed(2));
}
nauticalmile.oninput = function () {
    let m = (parseFloat( nauticalmile.value)/0.868976);
    mile.value = parseFloat(m.toFixed(2));

    let km = (parseFloat(nauticalmile.value)/0.539957);
    kilometer.value = parseFloat(km.toFixed(2));
} 



// power calculation

let watt = document.getElementById('watt');
let db = document.getElementById('db');
let dbm = document.getElementById('dbm');
watt.oninput = function () {
    let db1 = (parseFloat(10*Math.log10(watt.value)/1));
    db.value = parseFloat(db1.toFixed(2));

    let dbm1 = (parseFloat(10*Math.log10(1000*watt.value/1)));
    dbm.value = parseFloat(dbm1.toFixed(2));
}
db.oninput = function () {
    let watt1 = (parseFloat(1*10**(db.value/10)));
    watt.value = parseFloat(watt1.toFixed(2));

    let dbm1 = (parseFloat( db.value )+30 );
    dbm.value = parseFloat(dbm1.toFixed(2));
}
dbm.oninput = function () {
    let watt1 = (parseFloat(1*10**((dbm.value-30)/10) ));
    watt.value = parseFloat(watt1.toFixed(2));

    let db1 = (parseFloat(dbm.value)-30);
    db.value = parseFloat(db1.toFixed(2));
}
