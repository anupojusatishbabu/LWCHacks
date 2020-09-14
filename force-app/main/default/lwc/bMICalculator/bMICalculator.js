import { LightningElement, track } from "lwc";
import {getBMI} from "c/bmi";
export default class BMICalculator extends LightningElement {
     cardTitle = "BMI Calculator";
     weight;
     height;
     @track bmi;
     onHeightChange(event) {
          this.height = event.target.value;
     }

     onWeightChange(event) {
          this.weight = event.target.value;
     }

     handleBMICalc(event) {
          this.cardTitle = "New BMI Calc";
          console.log("Weight :" + this.weight + " --- Height : " + this.height);
          this.bmi = getBMI(this.weight, this.height);
     }

     get bmiValue() {
          if (this.bmi === undefined) {
               return "";
          }
          return "Your BMI values : " + this.bmi;
     }
}
