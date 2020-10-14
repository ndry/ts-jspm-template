import {CountUper} from "./CountUper";
// import rxjs from "rxjs";

export default () => {
    const countUper = new CountUper(document.getElementById("content")!);
    // const subject = new rxjs.Subject();
    // subject.subscribe(() => countUper.tick());
    // setInterval(() => subject.next(undefined), 300);
    setInterval(() => countUper.tick(), 300);
}