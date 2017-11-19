import { ModelService } from './model.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from './question-base';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit  {
  model={};
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor(private ms: ModelService){
    
  }
  ngOnInit(){
     this.model = this.ms.getModel();
  }
  getModelData(){
    var leafNode = this.getLeafModelNode1(this.model,this.question.dataBinding);
    var leaf = this.getLeafName(this.question.dataBinding);
    return leafNode[leaf];
  }
  setModelData(val){
    var leafNode = this.getLeafModelNode1(this.model,this.question.dataBinding);
    var leaf = this.getLeafName(this.question.dataBinding);
    leafNode[leaf] = val;
  }
  getLeafModelNode(obj,path){
    path = path.split('_');
    var len = path.length;
    for(let i=0; i < len-1; i++){
      if(obj[path[i]]=== undefined){
        obj[path[i]] = {};
      };
      obj = obj[path[i]];
    }  
    return obj;
  }
  getLeafName(path){
    path = path.split('_');
    return path[path.length-1];
  }
  getLeafModelNode1(obj,path){
    path = path.split('_');
    var len = path.length;
    for(let i=0; i < len-1; i++){ 
      var node = path[i];
      if(node && node.match("@")){
        var attrs = node.split('=');
        obj[attrs[0]] = attrs[1] || '';
      }else{
          if(obj[node]=== undefined){
            obj[node] = {};
          };
          obj = obj[node];
      }
    }  
    return obj;
  }
}
