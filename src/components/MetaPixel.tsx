'use client';

import Script from 'next/script';

/**
 * Meta (Facebook) Pixel installer.
 *
 * Env-gated — if NEXT_PUBLIC_META_PIXEL_ID isn't set in Vercel, this
 * component renders nothing and no script tags are emitted. Safe to leave
 * mounted in production while we wait for the Pixel ID from the TOFA
 * Facebook Business Manager.
 *
 * To enable:
 *   1. In Facebook Business Manager → Events Manager → Data Sources →
 *      add a new "Web" Pixel. Copy the numeric Pixel ID.
 *   2. Add NEXT_PUBLIC_META_PIXEL_ID="<id>" to Vercel project env vars
 *      (Production + Preview).
 *   3. Redeploy. Pixel fires `PageView` automatically on every route.
 *
 * Lead event: the contact form already calls window.fbq('track', 'Lead')
 * via src/components/marketing/HomeContactForm.tsx — wire-up will activate
 * automatically once the Pixel ID is set.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function MetaPixel() {
  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
