import { datadogLogs } from '@datadog/browser-logs';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { monthlyInstallments as getMonthlyInstallments } from 'app/pages/frames/http/monthlyInstallmentsService';

export const useMonthlyInstallments = () => {
  const { setAppError, setIsLoading, setMonthlyInstallmentsOptions } = usePaymentFormStore();

  const getAvailableMonthlyInstallments = async (chequestRequesId: string, bin: string): Promise<any> => {
    try {
      setIsLoading(true);

      const monthlyInstallmentsResponse = await getMonthlyInstallments({ id: chequestRequesId, bin });
      setMonthlyInstallmentsOptions(monthlyInstallmentsResponse);
      return monthlyInstallmentsResponse;
    } catch (e: any) {
      datadogLogs.logger.error('monthly_installments_error', { error: e });
      setAppError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { getAvailableMonthlyInstallments };
};
