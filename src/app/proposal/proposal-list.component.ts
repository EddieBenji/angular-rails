import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal.model';
import { ProposalService } from './proposal.service';
import { Observable } from 'rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: [ './proposal-list.component.css' ]
})

export class ProposalListComponent implements OnInit {
  proposals: Proposal[ ] = [];
  errorMessage: string;

  constructor(private proposalService: ProposalService) {
    // Empty
  }

  setProposals() {
    this.proposalService.getProposals()
      .subscribe(
        (props: Proposal[]) => this.proposals = props,
        error => this.errorMessage = error
      );
  }

  ngOnInit(): void {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.setProposals());
  }

}
