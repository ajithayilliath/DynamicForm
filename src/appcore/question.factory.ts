import { LabelQuestion } from './question-label';
import { RuleService } from './rules.service';
import { CheckboxQuestion } from './question-checkbox';
import { RadioQuestion } from './question-radio';
import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionFactory {
  rules;
  constructor(public service: RuleService) {
    this.rules = service.getRules();    
  }
  getQuestions(group) {
    let questions: QuestionBase<any>[] = [];    
    this.rules.forEach(meta => {
      if(meta.group === group){
        questions.push(BuildQuestion(meta));
      }
    });
    function BuildQuestion(meta){
      switch(meta.type){
          case 'text':
          return new TextboxQuestion(meta);
          case 'dropdown':
          return new DropdownQuestion(meta); 
          case 'radio':
          return new RadioQuestion(meta); 
          case 'checkbox':
          return new CheckboxQuestion(meta); 
          case 'label':
          return new LabelQuestion(meta); 
      }
    }
    return questions.sort((a, b) => a.order - b.order);
  }
}
