import { Component, HostListener, ElementRef, OnInit } from "@angular/core";
import { Project } from "../models/projects.model";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
} from "@angular/animations";
import { RemotingClientService } from "../shared/Services/remoting-client.service";

declare const $: any;

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  title = "app";
  state = "hide";
  projects: Project[];
  projectDetails: Project;
  constructor(
    private elementRef: ElementRef,
    private remote: RemotingClientService
  ) {}

  ngOnInit() {
    let width = window.innerWidth;
    console.log(width);
    $(window).scroll(function () {
      $(".animated").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600 && width > 992) {
          $(this).addClass("slideInUp");
        }
      });
    });
    this.remote.getProjects().subscribe(
      (projectData: any) => {
        this.projects = projectData["projectsData"];
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
  scrollToSection(id: string) {
    debugger;
    const element = this.elementRef.nativeElement.querySelector(`#${id}`);
    const topPos = element.offsetTop;
    $("body, html").animate(
      {
        scrollTop: topPos - 120,
      },
      500
    );
  }
  showProjectDetails(project) {
    $("#productDetails").modal("show");
    this.projectDetails = project;
  }
}
