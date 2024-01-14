import { Metadata } from 'next'
import Banner from './components/banner';
 
export const metadata: Metadata = {
  title: 'Thrashtech',
}
 
export default function Home() {
  return (
    <Banner />
  );
}