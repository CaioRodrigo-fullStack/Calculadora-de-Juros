export interface ISimpleIeterestParms {
  principal: number; //Capital inicial
  rate: number; //Taxa de juros
  time: number; //Tempo em anos, mese, ou tempo determinado dependendo da taxa
}

export interface ICompoutInterstParms extends ISimpleIeterestParms {
  compoutndigFrequency?: number; // Número de vezes que o juro é capitalizado por período de tempo (opcional, padrão anual)
}

export interface IInterestResult {
  interest: number; //juros calculado
  totalAmont: number; // montante te final (Capital + juros)
  calculationType: 'simple' | 'compound';
  parameters: ISimpleIeterestParms | ICompoutInterstParms;
}
