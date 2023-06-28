import { TestBed } from '@angular/core/testing';

import { ModalMsgService } from './modal-msg.service';

describe('ModalMsgService', () => {
  let service: ModalMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
