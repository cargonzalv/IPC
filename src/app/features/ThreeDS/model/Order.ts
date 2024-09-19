import { Charge } from './Charge';

export interface Order {
  id: string;
  reference: string;
  status: string;
  urlRedirect: string;
  cardSaved: string;
  charge: Charge;
  metaData: { [key: string]: any };
  nextAction?: NextAction | null;
  // attrs only in front
  requireChallenge?: boolean;
  threeDSResult?: string;
}

interface NextAction {
  type?: string;
  redirectToUrl: RedirectToUrl;
}

interface RedirectToUrl {
  returnUrl?: string;
  url: string;
}
