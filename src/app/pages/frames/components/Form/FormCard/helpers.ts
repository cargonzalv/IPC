import { TFunction } from 'i18next';
import { IOptionType } from 'app/components/Select/interface';

import { tRootCardForm } from './constants';
import { IMonthlyInstallment } from './interfaces';

export const isMonthlyInstallmentsSelectDisabled = (monthlyInstallmentsOptions: IOptionType[]): boolean =>
  monthlyInstallmentsOptions.length === 1;

export const parseMonthlyInstallmentsToOptionTypes = (
  monthlyInstallments: IMonthlyInstallment[],
  t: TFunction,
): IOptionType[] =>
  monthlyInstallments.map(({ monthlyInstallments: installments, monthlyFee }: IMonthlyInstallment) => ({
    value: installments,
    label: t(`${tRootCardForm}.monthsWithoutInterest.optionLabel`, {
      installments,
      monthlyFee,
    }),
  }));
