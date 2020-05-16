import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SharedService } from "./shared.service";
import { Project } from "../../models/projects.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RemotingClientService {
  constructor(private _http: HttpClient) {}

  getProjects(){
    const url = "assets/json/projects.json";
    return this._http
      .get<{ project: any }>(url)
      .pipe(
        map((projectsData) => {
          return {
            projectsData: projectsData.project.map((project) => {
              return {
                id: project.id == null ? this.uuidv4() : project.id,
                ProjectName: project.ProjectName,
                ProjectDesc: project.ProjectDesc,
                ProjectImages: project.ProjectImages,
              };
            }),
          };
        })
      );
  }
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
