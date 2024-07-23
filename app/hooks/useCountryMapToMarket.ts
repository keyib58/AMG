// hooks/useCountryMapToMarket.ts
const countryMarketMap: { [key: string]: string } = {
    Singapore: 'South East',
    Malaysia: 'South East',
    Thailand: 'South East',
    // add more mappings as needed
  };
  
  export function useCountryMapToMarket(country: string): string {
    return countryMarketMap[country] || 'Other';
  }
  