import { ICompoutInterstParms, IInterestResult } from '../Interface/Iinterest';

export class CompoundInterestService {
  cauculate(params: ICompoutInterstParms): IInterestResult {
    const { principal, rate, time, compoundingFrequence = 1 } = params; //Padrão para anual se não for fornecido

    if (principal < 0 || rate < 0 || time < 0 || compoundingFrequence <= 0) {
      throw new Error(
        'Principal, taxa, tempo não pode ser um valor negativo e a frequência de capitalização deve ser positiva '
      );
    }

    // Formula: A=P(1+r/n)^(nt)
    // Juros = A-P
    const n = compoundingFrequence; // quantidade de vezes que o juro é capitalizado por periodo
    const t = time; //periodo de tempo
    const r = rate; //taxa de juros por periodo

    const totalAmount = principal * Math.pow(1 + r / n, n * t);
    const interest = totalAmount - principal;

    return {
      interest,
      totalAmount,
      calculationType: 'compound',
      parameters: params,
    };
  }
}
