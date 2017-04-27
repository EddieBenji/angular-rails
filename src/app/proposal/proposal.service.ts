/**
 * Created by eduardocanche on 4/26/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal.model';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://0.0.0.0:3002/proposals';

  constructor(private http: Http) {
    // Empty
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText} || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  public getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
      .map((response: Response) => <Document[]>response.json())
      .catch(this.handleError);
  }

  public getProposal(id: number) {
    return this.http.get(this.proposalsUrl + '/' + id);
  }
}
