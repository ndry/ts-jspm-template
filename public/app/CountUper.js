export class CountUper {
    constructor(el, counter = 0) {
        this.el = el;
        this.counter = counter;
    }
    tick() {
        this.el.textContent = (++this.counter).toString();
    }
}
//# sourceMappingURL=CountUper.js.map