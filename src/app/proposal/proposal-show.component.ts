import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProposalService } from './proposal.service';
import { Http, Response } from '@angular/http';
import { Proposal } from './proposal.model';
@Component({
  moduleId: module.id,
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styles: [ `
    .proposal-card {
      padding: 30px;
    }
  ` ]
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(private route: ActivatedRoute, private proposalService: ProposalService, private http: Http) {
    // Empty
  }

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    // this.routeId = this.route.params.subscribe(
    //   params => {
    //     // By writing '+', it'll transform the string from params['id'] to a number
    //     this.id = +params[ 'id' ];
    //   }
    // );
    let proposalRequest = this.route.params
      .flatMap((params: Params) =>
        this.proposalService.getProposal(+params[ 'id' ])
      );

    proposalRequest.subscribe((response: Response) =>
      this.proposal = response.json()
    );
  }
}
