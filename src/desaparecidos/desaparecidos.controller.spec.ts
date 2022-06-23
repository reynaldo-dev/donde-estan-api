import { Test, TestingModule } from '@nestjs/testing';
import { DesaparecidosController } from './desaparecidos.controller';

describe('DesaparecidosController', () => {
  let controller: DesaparecidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesaparecidosController],
    }).compile();

    controller = module.get<DesaparecidosController>(DesaparecidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
