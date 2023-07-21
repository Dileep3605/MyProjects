import { Component, HostListener, ElementRef, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

declare const $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(public el: ElementRef) {}
  themeColor = new FormControl("red");
  ngOnInit() {}
  goToContact() {}

  changeThemeColor(color: string) {
    console.log(color);
    const root = document.documentElement;

    // Update the value of the --primary-color variable
    root.style.setProperty("--theme-background", `${color}`);
  }
}
