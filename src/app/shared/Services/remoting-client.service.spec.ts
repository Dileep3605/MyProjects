import { TestBed } from '@angular/core/testing';

import { RemotingClientService } from './remoting-client.service';

describe('RemotingClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemotingClientService = TestBed.get(RemotingClientService);
    expect(service).toBeTruthy();
  });
});
