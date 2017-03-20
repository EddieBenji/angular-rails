import { Component } from '@angular/core';
import { Document } from './documents.model';
@Component({
  moduleId: module.id,
  selector: 'app-documents',
  templateUrl: './documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = 'Document dashboard';
  documents: Document[] = [
    {
      title: 'my first doc',
      description: 'description',
      file_url: 'google.com',
      updated_at: 'yesterday',
      image_url: 'google.com'
    },
    {
      title: 'my second doc',
      description: 'second description',
      file_url: 'gmail.com',
      updated_at: 'today',
      image_url: 'gmail.com'
    },
    {
      title: 'my last doc',
      description: 'second description',
      file_url: 'gmail.com',
      updated_at: 'today',
      image_url: 'gmail.com'
    }
  ];
}
