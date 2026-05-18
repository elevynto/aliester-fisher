import { BOOKING_URL } from "../../constants/urls";

export function CallButton({ label = "Book a 30-min call" }: { label?: string }) {
  return (
    <a className="btn" href={BOOKING_URL}>
      {label}
    </a>
  );
}
