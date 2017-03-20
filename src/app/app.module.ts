import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomepageComponent }  from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { FreelanceRouting } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';

@NgModule({
  imports: [
    BrowserModule,
    FreelanceRouting,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent
  ],
  // Which component you want to start:
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
