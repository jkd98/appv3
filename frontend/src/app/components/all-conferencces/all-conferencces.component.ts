import { Component, OnInit, Signal, computed, signal } from '@angular/core';
import { ConferenceService } from '../../services/conference.service';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-all-conferencces',
  templateUrl: './all-conferencces.component.html',
  styleUrl: './all-conferencces.component.css'
})
export class AllConferenccesComponent implements OnInit{
  //----------
  dataConfs = signal(new Array());
  public confs:Array<any>;
  public dateConf='';
  //public dataConfs = computed(()=> this.confs());
  //----------
  constructor(
    private conferenceService:ConferenceService,
    private statisticsServices:StatisticsService
  ){
    this.confs = new Array();
  }
  //-----------
  async ngOnInit(){
    const conf = await this.conferenceService.listConfersAdm()
    this.confs=conf;
    console.log(this.confs);
  }

  async changeDate(){
    console.log(this.dateConf);
    this.confs = await this.conferenceService.confersDate(this.dateConf);
    console.log(this.confs);
  }

  async changeDateSold(){
    console.log(this.dateConf);
    this.confs = await this.statisticsServices.getSoldOut(this.dateConf);
    console.log(this.confs);
  }

}
