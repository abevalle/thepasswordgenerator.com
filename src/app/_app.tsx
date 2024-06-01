import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>The Password Generator - Secure & Random Passwords</title>
        <meta name="description" content="Generate secure, random passwords with The Password Generator. Enhance your online security with strong, unique passwords." />
        <meta name="keywords" content="password generator, passwords, security, strong passwords, random passwords, online security" />
        <meta name="author" content="The Password Generator Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thepasswordgenerator.com" />
        <meta property="og:title" content="The Password Generator - Secure & Random Passwords" />
        <meta property="og:description" content="Generate secure, random passwords with The Password Generator. Enhance your online security with strong, unique passwords." />
        <meta property="og:site_name" content="The Password Generator" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thepasswordgenerator.com" />
        <meta property="twitter:title" content="The Password Generator - Secure & Random Passwords" />
        <meta property="twitter:description" content="Generate secure, random passwords with The Password Generator. Enhance your online security with strong, unique passwords." />
        
        <link rel="canonical" href="https://thepasswordgenerator.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
