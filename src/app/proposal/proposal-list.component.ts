import { Component } from '@angular/core';
import { Proposal } from './proposal.model';
@Component({
  moduleId: module.id,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal('http://www.google.com', 1, 'Lalo', 'RoR', 150, 120, 15,
    'eduardo_benji@hotmail.com');
  proposalTwo: Proposal = new Proposal('http://www.google.com', 99, 'ABC company', 'RoR', 150, 120, 15,
    'eduardo_benji@hotmail.com');
  proposalThree: Proposal = new Proposal('http://www.google.com', 300, 'Great other company', 'RoR', 150, 120, 15,
    'eduardo_benji@hotmail.com');
  proposals: Proposal[ ] = [ this.proposalOne, this.proposalTwo, this.proposalThree ];
}
