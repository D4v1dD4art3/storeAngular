import {Component, OnInit} from "@angular/core";
import {
  faCoffee,
  faEnvelopeOpen,
  faUnlock,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  faArrowAltCircleDown = faArrowAltCircleDown;
  faCoffee = faCoffee;
  faUnlock = faUnlock;
  faEnvelopeOpen = faEnvelopeOpen;
  constructor() {}

  ngOnInit(): void {}
}
