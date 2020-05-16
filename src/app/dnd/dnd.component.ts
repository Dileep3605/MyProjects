import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DNDComponent implements OnInit {
  componentLayout: any = [];
  componentLayoutData: any = [];
  currentTargetComponent: any;
  currentComponentId: any;
  dynamicComIdArray:any = [];
  todo1: any = [
    {
      column: 1,
      columnArray: [1],
      columnArrayColumn1: []
    },
    {
      column: 2,
      columnArray: [1, 2],
      columnArrayColumn1: [],
      columnArrayColumn2: []
    },
    {
      column: 3,
      columnArray: [1, 2, 3],
      columnArrayColumn1: [],
      columnArrayColumn2: [],
      columnArrayColumn3: []
    },
    {
      column: 4,
      columnArray: [1, 2, 3, 4],
      columnArrayColumn1: [],
      columnArrayColumn2: [],
      columnArrayColumn3: [],
      columnArrayColumn4: []
    }
  ]
  todo = [];
  typography: any = [];
  typography1: any = [
    {
      componentId: 5,
      columnArray: []
    },
    {
      componentId: 6,
      columnArray: []
    },
    {
      componentId: 7,
      columnArray: []
    },
    {
      componentId: 8,
      columnArray: []
    }
  ];
  done = [];


  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.revetBackArray();
  }

  revetBackArray() {
    setTimeout(() => {
      this.todo = this.todo1.slice();
      this.typography = this.typography1.slice()
    }, 0);
  }

  dropListEntered(event: CdkDragEnter) {
    debugger;
    console.log('dropListEntered Event',
      `> dropping '${event.item.data}' into '${event.container.id}'`);
    this.currentTargetComponent = event.container.id;
    this.currentComponentId = event.item.data;
  }


  drop(event: CdkDragDrop<string[]>) {
    debugger;


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        setTimeout(() => {
          debugger;
          let dynamicId = this.el.nativeElement.querySelectorAll('.getInnerContainerId');
          for(let i = 0;i<dynamicId.length;i++){
            this.dynamicComIdArray.push(dynamicId[i].getAttribute('id'));
          }
        }, 1000);
      
      if (this.currentComponentId == 5) {
        const addingDiv = this.el.nativeElement.querySelector('#' + this.currentTargetComponent)
        const div = this.renderer.createElement('textarea');
        this.renderer.addClass(div, 'form-control');
        this.renderer.setProperty(div, 'rows', 2);
        this.renderer.appendChild(addingDiv, div);
        this.renderer.listen(div, 'change', ($event) => {

        });

      }
    }

    console.log(this.componentLayout);
    this.revetBackArray();
  }




}
