import { Metadata } from 'next'
import { LegalClient } from './LegalClient'

export const metadata: Metadata = {
  title: "Legal",
  description: "Privacy Policy, Terms of Service, and Cookie Policy for Cloudy.",
};

export default function LegalPage() {
  return <LegalClient />
}
