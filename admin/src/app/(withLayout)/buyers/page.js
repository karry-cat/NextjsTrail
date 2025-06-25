import BuyersScreen from "@/screens/buyers";
import {getBuyers} from "@/actions/BuyerActions";

export default async function BuyersPage() {
  const buyers = await getBuyers();
  return (
      <BuyersScreen buyers={buyers} />
  );
}