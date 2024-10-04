import type { TurboselfAccount } from "@/stores/account/types";
import type { ReservationHistory } from "../shared/ReservationHistory";

export const getHistory = async (account: TurboselfAccount): Promise<ReservationHistory[]> => {
  const history = await account.authentication.session.getHistory();

  return (history ?? []).map((reservation) => ({
    timestamp: reservation.date.getTime(),
    amount: reservation.amount / 100,
    currency: account.authentication.session.establishment?.currencySymbol ?? "€"
  }));
};
