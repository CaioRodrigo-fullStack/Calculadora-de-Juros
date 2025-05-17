import { Request, Response } from 'express';
import { SimpleInterestService } from '../Service/simpleInterestService';
import { CompoundInterestService } from '../Service/compoundInterestService';
import {
  ISimpleIeterestParms,
  ICompoutInterstParms,
  IInterestResult,
} from '../Interface/Iinterest';

export class InterestController {
  private simpleInterestService: SimpleInterestService;
  private compoundInterestService: CompoundInterestService;

  constructor() {
    this.simpleInterestService = new SimpleInterestService();
    this.compoundInterestService = new CompoundInterestService();
  }

  // Validação básica. Em um projeto real, usar bibliotecas como Joi ou Zod.
  private isValidSimpleInterestParams(body: any): body is ISimpleIeterestParms {
    return (
      typeof body.principal === 'number' &&
      typeof body.rate === 'number' &&
      typeof body.time === 'number'
    );
  }

  private isValidCompoundInterestParams(
    body: any
  ): body is ICompoutInterstParms {
    return (
      typeof body.principal === 'number' &&
      typeof body.rate === 'number' &&
      typeof body.time === 'number' &&
      (body.compoundingFrequency === undefined ||
        typeof body.compoundingFrequency === 'number')
    );
  }

  calculateSimpleInterest = (req: Request, res: Response): void => {
    try {
      const params: ISimpleIeterestParms = req.body;

      if (!this.isValidSimpleInterestParams(params)) {
        res.status(400).json({
          error: 'Parâmetros inválidos para cálculo de juros simples.',
        });
        return;
      }

      const result: IInterestResult =
        this.simpleInterestService.calculate(params);
      res.status(200).json(result);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error.message || 'Erro ao calcular juros simples.' });
    }
  };

  calculateCompoundInterest = (req: Request, res: Response): void => {
    try {
      const params: ICompoutInterstParms = req.body;

      if (!this.isValidCompoundInterestParams(params)) {
        res.status(400).json({
          error: 'Parâmetros inválidos para cálculo de juros compostos.',
        });
        return;
      }

      const result: IInterestResult =
        this.compoundInterestService.calculate(params);
      res.status(200).json(result);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error.message || 'Erro ao calcular juros compostos.' });
    }
  };
}
