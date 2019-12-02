function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Interval() {
    let element = document.getElementById("status");
    let exp = element.options[element.selectedIndex].value;
    if (exp === '0') {
        time = 5000;
        stat = stat;
    }

    document.getElementById('name').innerHTML = stat['name'];
    document.getElementById('food').innerHTML = stat['food'];
    document.getElementById('happiness').innerHTML = stat['happiness'];
    document.getElementById('clean').innerHTML = stat['clean'];

    let count = 1,
        interval = setInterval(function () {
            count++;
            if (count === 200)  {
                reload(interval);
            }
            document.getElementById('score').innerHTML = String(count);
        }, 1000);

    let new_interval = setInterval(function () {
        stat.food -= 5;
        stat.clean -= 5;
        stat.happiness -= 5;


        if (stat.food < 0 || stat.clean < 0  || stat.happiness < 0) {
            reload(new_interval);
            return alert('LOL');
        }
        document.getElementById('food').innerHTML = stat['food'];
        document.getElementById('happiness').innerHTML = stat['happiness'];
        document.getElementById('clean').innerHTML = stat['clean'];
        document.getElementById('timeLife').innerHTML = String(count);
    }, time);
}

function wash() {
    stat.clean += 40;
    stat.happiness -= 20;
    if (stat.clean >100 || stat.happiness < 0 || stat.food > 100){
        return alert('LOL');
    }
    updater();
}

function play() {
    stat.food -= 10;
    stat.happiness += 15;
    if (stat.food > 100 || stat.happiness > 100 || stat.clean >100){
        return alert('LOL');
    }
    updater();
}


function eat() {
    stat.food += 30;
    stat.clean -= 20;
    if (stat.food > 100 || stat.happiness > 100 || stat.clean >100){
        return alert('LOL');
    }
    updater();
}

function happinesApdater() {
    if (stat.food < 0) {
        stat.food = 0;
    }
}
happinesApdater();

function updaterInfo() {
    document.getElementById('food').innerHTML = stat['food'];
    document.getElementById('happiness').innerHTML = stat['happiness'];
    document.getElementById('clean').innerHTML = stat['clean'];

}

function updater() {
    happinesApdater();
    updaterInfo();
}