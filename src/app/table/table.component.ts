import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyService } from '../formly.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  // fields:any[]=[]
  // field:any={fieldGroup:[{}]}
  trailField:FormlyFieldConfig[]=[];
  form = new FormGroup({
    id:new FormControl(),
    repairRequestId:new FormControl(),
    productId:new FormControl(),
    orderId:new FormControl(),
    productData:new FormControl(),
    userId:new FormControl(),
    status:new FormControl()
  });
  model = {};
  isNumber = isNaN;
  tableDialog=false;
  tableEdit:any;
  rowCount:any;
  tables:any[]=[]
  cols :any[]=[]
  fields:FormlyFieldConfig[]=[
    {
      fieldGroup: [
        {
          key: 'id',
          type: 'input',
          templateOptions: {
            label: 'Id',
          },
        },
        {
          key: 'repairRequestId',
          type: 'input',
          templateOptions: {
            label: 'RepairRequestId',
          },
        },
        {
          key: 'productId',
          type: 'input',
          templateOptions: {
            label: 'ProductId',
          },
        },
        {
          key: 'productData',
          type: 'input',
          templateOptions: {
            label: 'ProductData',
          },
        },
        {
          key: 'userId',
          type: 'input',
          templateOptions: {
            label: 'UserId',
          },
        },
        {
          key: 'status',
          type: 'input',
          templateOptions: {
            label: 'Status',
            placeholder:'status'
          },
        },
      ],
    },
  ];
  // additional=
  //   {"id":9,
  //   "repairRequestId":"2",
  //   "productId":1,
  //   "orderId":"232",
  //   "productData":{"product":"new"},
  //   "userId":2,
  //   "status":"dispatch",
  //   "createdAt":"2023-01-23T05:02:33.605Z",
  //   "updatedAt":"2023-01-23T05:02:33.605Z"}
  constructor(private http: HttpClient, private formlyService:FormlyService){}

  ngOnInit(){
    this.http.get('https://run.mocky.io/v3/bc8bf533-a4ac-4710-8b86-11c6466d9c4a').subscribe((res:any)=>{
      console.log("res data: ",res[0].data[0]);
      
      Object.keys(res[0].data[0]).forEach((ele:any)=>{
        console.log("ele: ",ele);
        this.cols.push({'field':ele})
      })
      this.tables=res[0].data;
      this.rowCount=res[0].count;
      // this.tables.push(this.additional);
      console.log("cols: ",this.cols);
    //   console.log(this.rowCount);)
      // for(let i=1;i<this.cols.length;i++){
      // this.field.fieldGroup.push({
      //   key:this.cols[i].field ,
      //       type: 'input',
      //       templateOptions: {
      //         label: this.cols[i].field,
      //       },
      // })
      // console.log("important: ",this.field);

    // }

    var ress=this.formlyService.basicMap(this.cols);
    console.log("fghjk: ",ress);
    this.trailField = [
      {
        fieldGroup: ress,
      },
    ];
    console.log("oiuytf: ",this.trailField);
    
    })
    console.log("ooooo: ",this.form);
    
    
  }


  editField(table:any,id:any){
    this.tableEdit={...table};
    // console.log(this.tableEdit[this.cols[4].field].product);
    console.log("editzzz: ",this.tables);

    //fetching the table values by id
// for(let i=0;i<this.tables.length;i++){
//   if(this.tables[i].productId==id){
//     console.log("found: ",this.tables[i]);
//     // this.tableEdit=this.tables[i]
//   }
// }
    
    
    this.tableDialog=true
console.log(this.cols[0].field);

for(let i=0;i<this.cols.length;i++){
    this.form.patchValue({
      [this.cols[i].field]:this.tableEdit[this.cols[i].field],
      // repairRequestId:this.tableEdit.repairRequestId,
      // productId:this.tableEdit.productId,
      // orderId:this.tableEdit.orderId,
      // productData:this.tableEdit.productData,
      // userId:this.tableEdit.userId,
      // status:this.tableEdit.status
    })
  }

  }

  saveProduct(){

  }

  hideDialog(){
    this.tableDialog=false
  }

  addNew() {
    this.tableEdit = {};
    this.tableDialog = true;
    console.log("visible: ", this.tableDialog);
  }

  onSubmit(model:any){
    console.log("submit: ",model);
    
  }

}













// [
//     {"id":4,
//     "repairRequestId":"2",
//     "productId":1,
//     "orderId":"232",
//     "productData":{"product":"new"},
//     "userId":2,
//     "status":"dispatch",
//     "createdAt":"2023-01-23T05:02:33.605Z",
//     "updatedAt":"2023-01-23T05:02:33.605Z"},
//     {
//       "id":3,
//     "repairRequestId":"1",
//     "productId":1,
//     "orderId":"12",
//     "productData":{"product":"new"},
//     "userId":1,
//     "status":"pending",
//     "createdAt":"2023-01-23T05:01:17.599Z",
//     "updatedAt":"2023-01-23T05:53:08.500Z"
//   },
//     {
//       "id":5,
//       "repairRequestId":"3",
//       "productId":1,
//       "orderId":"1234",
//       "productData":{"product":" updated"},
//       "userId":2,
//       "status":"delivered",
//       "createdAt":"2023-01-23T05:03:13.216Z",
//       "updatedAt":"2023-01-23T06:52:53.513Z"
//     }
//   ];