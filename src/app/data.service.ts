import { variable } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
  private vegetableNameSource = new BehaviorSubject<string>("");
  currentVegetableName = this.vegetableNameSource.asObservable();

  constructor() {}

  changeVegetableName(vegetable: any) {
    // add data to an observable
    this.currentVegetableName = vegetable;
  }
}
