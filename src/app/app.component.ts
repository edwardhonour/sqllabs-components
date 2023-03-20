import { Component, Input, OnChanges, DoCheck } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck {
  title = 'sqllabs-components';

  constructor(private _dataService: DataService) { }

  formData: any = {};

  ngOnChanges() {

  }

  doNothing(m: any) {

  }

  ngDoCheck() {
    console.log('Parent Check');
    if (this.formData?.submit=='Y') {
     this._dataService.dataSubject.subscribe(d => {
        this.formData={};
        this.formData=d;
        console.log('app')
        console.log(this.formData)
        this.formData.submit='N';
     })
    }
  }

  loopBack(data: any) {

  }

}
