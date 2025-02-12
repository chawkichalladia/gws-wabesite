export interface ReqParams {
  access?: string;
  refresh?: string;
}

export interface CreateTicketReqBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}
