import { Injectable } from '@angular/core';

@Injectable()

export class ModelService{
    getModel(){
        return window["travModel"];
    }
}
