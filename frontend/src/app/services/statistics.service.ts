import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/clienteAxios';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  //
  constructor() { }
  //
  //----------
  async getSoldOut(date:string){
    try {
      const {data} = await clienteAxios.get(`/statist/out/?date=${date}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error Angular")
    }

  }
}
