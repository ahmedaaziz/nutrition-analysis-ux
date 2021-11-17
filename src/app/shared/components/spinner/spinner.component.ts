import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from "src/app/core/services/spinner/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  showSpinner:boolean = false;

  constructor(private spinnerService:SpinnerService,private cdRef:ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }
}
