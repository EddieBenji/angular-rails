import { Component } from '@angular/core';
import { Proposal } from './proposal.model';
import { ProposalService } from './proposal.service';
import { Observable } from 'rxjs/Observable';
@Component({
  moduleId: module.id,
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: [ './proposal-new.component.css' ]
})

export class ProposalNewComponent {
  proposal = new Proposal;
  submitted: boolean = false;

  constructor(private proposalService: ProposalService) {
    // Empty
  }

  public createProposal() {
    this.submitted = true;
    this.proposalService.createProposal(this.proposal)
      .subscribe(data => {
          console.log(data);
          return true;
        },
        error => {
          console.log(error);
          return Observable.throw(error);
        }
      );
  }
}
