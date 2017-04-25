import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent }  from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { FreelanceRouting } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsService } from './documents/documents.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

@NgModule({
  imports: [
    BrowserModule,
    FreelanceRouting,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  providers: [ DocumentsService ],
  // Which component you want to start:
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
