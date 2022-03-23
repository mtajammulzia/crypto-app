import { FC } from "react";

export interface AppType {
  subdomain: string;
  app: FC;
  main: boolean | undefined;
}

export interface User {
  id: number;
  username: string;
  address: string;
  email: string;
  phone: string;
}

export interface ProposalType {
  id: number;
  submittedBy?: number;
  cause: string;
  description: string;
  createdAt: number;
  openPeriod: number;
  votes: Array<VoteType>;
}

export interface HeaderType {
  address: string;
  ethBalance: number;
  petBalance: number;
}

export interface VoteType {
  voter: string;
  weight: number;
  vote: boolean;
}

export interface IProposal {
  cause: string;
  description: string;
}

export interface IProposalDisplay extends IProposal {
  id: number;
  createdAt: string;
  openPeriod: number;
  votes: Array<IVote>;
}

export interface IVote {
  voter: string;
  weight: number;
  vote: boolean;
}

export type OnClickHanlder = SimpleFunction | PromiseFunction;

export type SimpleFunction = () => void;

export type PromiseFunction = () => Promise<void>;
