const BOOKING_URL = "https://calendly.com/aliesterfisher/agentic-development-intro-call";

export function CallButton({ label = "Book a 30-min call" }: { label?: string }) {
  return (
    <a className="btn" href={BOOKING_URL}>
      {label}
    </a>
  );
}
