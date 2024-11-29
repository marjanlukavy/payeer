import { create } from "zustand";

interface PaymentStore {
  blockedBalance: string;
  activeBalance: string;
  username: string;
  depositAmount: string;
  currency: string;
  paymentType: string;
  customPaymentType: string;
  walletNumber: string;
  walletNumberBK: string;
  redText1: string;
  redText2: string;
  outputSystem: string;
  commentField: string;
  customCommentField: string;
  commentFieldPayment: string;
  paymentStatus: string;
  hideRedText1: boolean;
  rotateIcon: number;
  systemEnter: string;
  icon: string;
  setIcon: (value: string) => void;
  setBlockedBalance: (value: string) => void;
  setSystemEnter: (value: string) => void;
  setCommentFieldPayment: (value: string) => void;
  setActiveBalance: (value: string) => void;
  setUsername: (value: string) => void;
  setDepositAmount: (value: string) => void;
  setCurrency: (value: string) => void;
  setPaymentType: (value: string) => void;
  setCustomPaymentType: (value: string) => void;
  setWalletNumber: (value: string) => void;
  setWalletNumberBK: (value: string) => void;
  setRedText1: (value: string) => void;
  setRedText2: (value: string) => void;
  setOutputSystem: (value: string) => void;
  setCommentField: (value: string) => void;
  setCustomCommentField: (value: string) => void;
  setPaymentStatus: (value: string) => void;
  setHideRedText1: (value: boolean) => void;
  setRotateIcon: (value: number) => void;
}

const usePaymentStore = create<PaymentStore>((set) => ({
  blockedBalance: "0",
  activeBalance: "0",
  systemEnter: "Payeer",
  icon: "Payeer",
  username: "-",
  depositAmount: "",
  currency: "USD",
  paymentType: "Deposit payment",
  customPaymentType: "Deposit payment",
  walletNumber: "",
  walletNumberBK: "-",
  rotateIcon: 0,
  redText1:
    "Closing this web page or not sending the exact amount of Payeer will lead to a failing transaction",
  redText2: "The withdrawal is made to the",
  outputSystem: "Payeer",
  commentField: "Comment to payment:",
  customCommentField: "Comment to payment:",
  commentFieldPayment: "-",
  paymentStatus: "Waiting for payment",
  hideRedText1: false,
  setIcon: (value) => set({ icon: value }),
  setRotateIcon: (value) => set({ rotateIcon: value }),
  setCommentFieldPayment: (value) => set({ commentFieldPayment: value }),
  setSystemEnter: (value) => set({ systemEnter: value }),
  setBlockedBalance: (value) => set({ blockedBalance: value }),
  setWalletNumberBK: (value) => set({ walletNumberBK: value }),
  setActiveBalance: (value) => set({ activeBalance: value }),
  setUsername: (value) => set({ username: value }),
  setDepositAmount: (value) => set({ depositAmount: value }),
  setCurrency: (value) => set({ currency: value }),
  setPaymentType: (value) =>
    set({ paymentType: value, customPaymentType: value }),
  setCustomPaymentType: (value) => set({ customPaymentType: value }),
  setWalletNumber: (value) => set({ walletNumber: value }),
  setRedText1: (value) => set({ redText1: value }),
  setRedText2: (value) => set({ redText2: value }),
  setOutputSystem: (value) => set({ outputSystem: value }),
  setCommentField: (value) =>
    set({ commentField: value, customCommentField: value }),
  setCustomCommentField: (value) => set({ customCommentField: value }),
  setPaymentStatus: (value) => set({ paymentStatus: value }),
  setHideRedText1: (value) => set({ hideRedText1: value }),
}));

export default usePaymentStore;
