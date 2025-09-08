import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { CommonModule } from '@angular/common';
import { LoadApis } from '../service/load-apis';
import { AssignmentApis } from '../service/assignment-apis';

@Component({
  selector: 'app-manage-loads',
  imports: [CommonModule],
  templateUrl: './manage-loads.html',
  styleUrl: './manage-loads.scss'
})
export class ManageLoads {

  loads : any;
  constructor(private loadApis : LoadApis, private assignmentApis : AssignmentApis){
   
    this.loadApis.getLoadDetailsForStatus("UnAssigned").subscribe(
      (response) => {
        if(response != null){
          this.loads = response;
        }
        else{
          alert('No UnAssigned loads found.')
        }
      }
    )
  }


  assignLoad=(load:any)=>{
    let assignObject= {
      loadId : load.loadId,
      loadWeight: String(load.loadWeight),
      loadPickupHubspotPincode : String(load.loadPickupHubspotPincode),
      loadDropHubspotPincode : String(load.loadDropHubspotPincode)

    }
    this.assignmentApis.assignLoadsToRoute(assignObject).subscribe(
      (response)=>{
        if(response)
        {
          alert(response.message);
        }
      }
    )
  }

}
