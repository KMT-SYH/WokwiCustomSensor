export class CustomPart {
    constructor(io) {
        this.io = io;
        this.value = 25;

        setInterval(() => {
            this.value += (Math.random() - 0.5) * 0.5;
            this.io.output(2).value = this.value.toFixed(1);
        }, 1000);
    }
}
