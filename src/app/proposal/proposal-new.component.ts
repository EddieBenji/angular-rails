import { Component } from '@angular/core';
import { Proposal } from './proposal.model';
@Component({
  moduleId: module.id,
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html'
})

export class ProposalNewComponent {
  proposal = new Proposal;
}
