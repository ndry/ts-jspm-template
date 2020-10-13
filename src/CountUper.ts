import { count } from "console";


export class CountUper {
    constructor(
        public el: HTMLElement,
        public counter = 0,
    ) {

    }
    
    tick() {
        this.el.textContent = (++this.counter).toString();
    }
}