export interface ZohoDeskCreateTicketReqBody {
  subject: string;
  departmentId: number;
  contact: {
    email: string;
    lastName: string;
  };
  email: string;
  description: string;
}
