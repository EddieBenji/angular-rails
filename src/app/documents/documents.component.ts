import { Component, OnInit } from '@angular/core';
import { Document } from './documents.model';
import { DocumentsService } from './documents.service';
import { Observable } from 'rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: [ './documents.component.css' ]
})

export class DocumentsComponent implements OnInit {
  pageTitle: string = 'Document dashboard';
  documents: Document[];
  errorMessage: string;

  constructor(private documentService: DocumentsService) {
    // Empty
  }

  setDocuments() {
    this.documentService.getDocuments()
      .subscribe(
        (docs: Document[]) => this.documents = docs,
        error => this.errorMessage = error
      );
  }

  ngOnInit(): void {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.setDocuments());
  }
}
