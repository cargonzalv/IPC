export interface IConektaErrorDetail {
  code: string;
  message: string;
  debug_message: string;
  param: string;
}

export interface IConektaError {
  object: string;
  type: string;
  log_id: string;
  details: IConektaErrorDetail[];
  url_redirect: string;
  data?: IConektaErrorDetail;
}
