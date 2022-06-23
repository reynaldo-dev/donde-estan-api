import { Test, TestingModule } from '@nestjs/testing';
import { DesaparecidosService } from './desaparecidos.service';

describe('DesaparecidosService', () => {
  let service: DesaparecidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesaparecidosService],
    }).compile();

    service = module.get<DesaparecidosService>(DesaparecidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
