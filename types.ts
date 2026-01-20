
export enum LoanStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DISBURSED = 'DISBURSED',
  COMPLETED = 'COMPLETED'
}

export interface LoanApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  hospitalId: string;
  treatmentType: string;
  estimatedCost: number;
  repaymentDuration: number; // in months
  status: LoanStatus;
  appliedAt: string;
  repaymentSchedule?: RepaymentInstallment[];
}

export interface RepaymentInstallment {
  dueDate: string;
  amount: number;
  status: 'UNPAID' | 'PAID';
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  specialty: string;
  image: string;
}
