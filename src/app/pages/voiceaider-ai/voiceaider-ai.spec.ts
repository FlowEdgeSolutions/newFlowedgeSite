import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceaiderAi } from './voiceaider-ai';

describe('VoiceaiderAi', () => {
  let component: VoiceaiderAi;
  let fixture: ComponentFixture<VoiceaiderAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceaiderAi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceaiderAi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
