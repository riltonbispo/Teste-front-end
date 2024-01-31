import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../utils/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;