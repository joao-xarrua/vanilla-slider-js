import { Slidenav } from "./slide.js";

const slide = new Slidenav(".slide", ".slide-wrapper");

slide.init();
slide.changeSlide(0);
slide.addArrow(".prev", ".next");
slide.addControl();
