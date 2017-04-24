import { Component } from '@angular/core';
import { Document } from './documents.model';
@Component({
  moduleId: module.id,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls:['./documents.component.css']
})

export class DocumentsComponent {
  pageTitle: string = 'Document dashboard';
  documents: Document[] = [
    {
      title: 'my first doc',
      description: 'description',
      file_url: 'google.com',
      updated_at: 'yesterday',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: 'my second doc',
      description: 'second description',
      file_url: 'gmail.com',
      updated_at: 'today',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: 'my last doc',
      description: 'second description',
      file_url: 'gmail.com',
      updated_at: 'today',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
    }
  ];
}
