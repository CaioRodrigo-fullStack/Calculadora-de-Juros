import { ISimpleIeterestParms, IInterestResult } from '../Interface/Iinterest';

export class SimpleInterestService {
  calculate(params: ISimpleIeterestParms): IInterestResult {
    const { principal, rate, time } = params;
    if (principal < 0 || rate < 0 || time < 0) {
      throw new Error('Principal, taxa e tempo não podem ser negativos');
    }
    const interest = principal * rate * time;
    const totalAmount = principal + interest;

    return {
      interest,
      totalAmount,
      calculationType: 'simple',
      parameters: params,
    };
  }
}
