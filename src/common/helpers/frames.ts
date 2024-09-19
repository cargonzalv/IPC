import { Response } from '@conekta/cronos/server';

export const allowAllParentAncestors = (res: Response) => {
  const headerName = 'Content-Security-Policy';
  const iFrameCsp = 'frame-ancestors';
  const csp = String(res.getHeader(headerName));
  const newCsp = csp
    .split(';')
    .map((policy) => {
      if (!policy.startsWith(iFrameCsp)) {
        return policy;
      }
      return `${iFrameCsp} 'self' *`;
    })
    .join(';');
  res.setHeader(headerName, newCsp);
};
