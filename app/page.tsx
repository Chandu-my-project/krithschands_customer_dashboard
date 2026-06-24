
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/dashboard'); // Instantly pushes the user to your main view
}