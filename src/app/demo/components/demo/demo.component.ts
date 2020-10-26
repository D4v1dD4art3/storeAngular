import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
})
export class DemoComponent implements OnInit {
  title = "";
  power: 0;
  exp: 0;
  showElement = true;
  items = ["David", "Moises", "Jonathan"];
  addItems(name: string) {
    this.items.push(name);
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  ngOnInit() {}
}
