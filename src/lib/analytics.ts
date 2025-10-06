/**
 * Lightweight client-side analytics utility
 * Tracks button clicks, form submissions, and key user interactions
 */

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isEnabled: boolean;

  constructor() {
    // Only enable in production or when explicitly enabled
    this.isEnabled = process.env.NODE_ENV === 'production' || 
                     typeof window !== 'undefined' && 
                     window.location.search.includes('analytics=true');
  }

  /**
   * Track a custom event
   */
  track(event: AnalyticsEvent) {
    if (!this.isEnabled || typeof window === 'undefined') return;

    // Send to Google Analytics 4 (if available)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(event);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  /**
   * Track button clicks
   */
  trackButtonClick(buttonText: string, location: string) {
    this.track({
      action: 'click',
      category: 'button',
      label: `${buttonText} - ${location}`,
    });
  }

  /**
   * Track form submissions
   */
  trackFormSubmit(formName: string, success: boolean = true) {
    this.track({
      action: 'submit',
      category: 'form',
      label: `${formName} - ${success ? 'success' : 'error'}`,
    });
  }

  /**
   * Track page views
   */
  trackPageView(pageName: string) {
    this.track({
      action: 'view',
      category: 'page',
      label: pageName,
    });
  }

  /**
   * Track lead generation events
   */
  trackLeadGenerated(source: string, budget?: string) {
    this.track({
      action: 'lead_generated',
      category: 'conversion',
      label: source,
      value: budget ? parseInt(budget.replace(/[^0-9]/g, '')) : undefined,
    });
  }

  /**
   * Send to custom analytics endpoint
   */
  private async sendToCustomEndpoint(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
    } catch (error) {
      // Silently fail - analytics should not break the user experience
      console.warn('Analytics tracking failed:', error);
    }
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Helper hooks for React components
export function useAnalytics() {
  return analytics;
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
