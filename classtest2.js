class Clock {
    constructor({ template }) {
        this.template = template; //this 가 없으면 지역변수
    }
    render() {
        let date = new Date();
        let hour = date.getHours();
        if (hour < 10) hour = '0' + hour;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let second = date.getSeconds();
        if (second < 10) second = '0' + second;
        let output = this.template.replace('h', hour).replace('m', mins).replace('s', second);
        console.log(output);
        // let year = date.getFullYear();
        // if (year < 10) year = '0' + year;
        // let month = date.getMonth() + 1; //0부터 시작해서
        // if (month < 10) month = '0' + month;
        // let day = date.getDate();
        // if (day < 10) day = '0' + day;
        // let output = this.template.replace('y', year).replace('m', month).replace('d', day);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({ template: 'h-m-s' });
clock.start();
setTimeout(() => clock.stop(), 10000); // 10초 후에 스탑