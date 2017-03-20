import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html'
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(private route: ActivatedRoute) {
    // Empty
  }

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        // By writting '+', it'll transform the string from params['id'] to a number
        this.id = +params[ 'id' ];
      }
    );
  }
}
