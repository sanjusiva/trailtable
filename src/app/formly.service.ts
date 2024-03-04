import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormlyService {

 finalForm:FormlyFieldConfig[]=[]
  constructor(private http: HttpClient) { }

  public basicMap(formField: any) {
    let cfg: any[] = [];
    console.log("field: ", formField);

      // const mapCfg = {
      //   type: 'input',
      //   key: field,
      //   props: {
      //     label: field
      //   },

      // };

      // cfg.push(mapCfg);
      // console.log("map: ",mapCfg);
      // console.log("cfg: ",cfg);

      formField.forEach((ele:any)=>{
        console.log("service ele: ",ele.field);
        const mapCfg={
          type:'input',
          key:ele.field,
          props:{
            label:ele.field
          },
        }
        cfg.push(mapCfg)
        // console.log(cfg);
        for(let i=0;i<=9;i++){

        }
      })
      
    return cfg;
  }
  


    // console.log("here",this.model.country);

  }

