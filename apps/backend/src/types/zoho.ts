export interface ZohoDeskCreateTicketReqBody {
  subject: string;
  departmentId: string;
  contact: {
    email: string;
    lastName: string;
  };
  email: string;
  description: string;
}
