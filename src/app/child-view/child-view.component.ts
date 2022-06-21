import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  public northwindEmployees: any = null;
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.financialService.getData('Box Office Revenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
