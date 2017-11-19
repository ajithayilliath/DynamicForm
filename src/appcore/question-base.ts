export class QuestionBase<T>{
    value: T;
    key: string;
    label: string;
    required: boolean;
    disallow: boolean;
    order: number;
    controlType: string;
    dataBinding: string;
  
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        disallow?: boolean,
        order?: number,
        controlType?: string,
        dataBinding?:string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.disallow = !!options.disallow;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.dataBinding = options.dataBinding || '';
    }
  }