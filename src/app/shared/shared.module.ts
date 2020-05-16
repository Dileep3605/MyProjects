import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './Services/shared.service';
import { RemotingClientService } from './Services/remoting-client.service';

@NgModule({
  declarations: [],
  imports: [
    
  ],
  providers: [SharedService, RemotingClientService],
  exports:[CommonModule,ReactiveFormsModule, FormsModule, HttpClientModule]
})
export class SharedModule { }
