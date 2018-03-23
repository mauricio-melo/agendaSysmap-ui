import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromissoCadastroEquipeComponent } from './compromisso-cadastro-equipe.component';

describe('CompromissoCadastroEquipeComponent', () => {
  let component: CompromissoCadastroEquipeComponent;
  let fixture: ComponentFixture<CompromissoCadastroEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompromissoCadastroEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromissoCadastroEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
