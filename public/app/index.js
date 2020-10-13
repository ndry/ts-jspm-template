import { CountUper } from "./CountUper.js";
import rxjs from "rxjs";
const countUper = new CountUper(document.getElementById("content"));
const subject = new rxjs.Subject();
subject.subscribe(() => countUper.tick());
setInterval(() => subject.next(undefined), 300);
//# sourceMappingURL=index.js.map