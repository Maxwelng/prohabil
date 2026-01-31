import { SERVICES_DATA } from '@/utils/constants/services';

export function useServicesViewModel() {
  return {
    services: SERVICES_DATA,
  };
}