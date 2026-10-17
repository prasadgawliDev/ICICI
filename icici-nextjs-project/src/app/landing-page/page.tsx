import type { Metadata } from "next";
import LandingPage from "../../components/landing-page";

export const metadata: Metadata = {
  title: "Banking, made simpler",
  description:
    "A simpler way to manage everyday banking, track your spending, and plan ahead.",
};

export default function LandingPageRoute() {
  return <LandingPage />;
}
