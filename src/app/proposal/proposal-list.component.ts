import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal.model';
import { ProposalService } from './proposal.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: [ './proposal-list.component.css' ]
})

export class ProposalListComponent implements OnInit {
  proposals: Proposal[ ] = [];
  errorMessage: string;

  constructor(private proposalService: ProposalService, private router: Router) {
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

  public goToShow(proposal: Proposal): void {
    const link = [ '/proposal', proposal.id ];
    this.router.navigate(link);
  }
}
