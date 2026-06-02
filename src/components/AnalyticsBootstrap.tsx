'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

/**
 * Mounts once at the root of the app and wires up site-wide click
 * delegation for tel: and mailto: links. Renders nothing.
 *
 * GA4 events fired:
 *   - phone_call   (every tel: link click)
 *   - email_click  (every mailto: link click)
 *
 * See src/lib/analytics.ts → initLinkTracking() for the listener.
 */
export function AnalyticsBootstrap() {
  useEffect(() => {
    analytics.initLinkTracking();
  }, []);
  return null;
}
