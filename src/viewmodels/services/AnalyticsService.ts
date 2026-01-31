export class AnalyticsService {
  trackEvent(eventName: string, eventParams?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams);
    }
  }

  trackPageView(url: string) {
    this.trackEvent('page_view', {
      page_path: url,
    });
  }

  trackFormSubmit(formName: string) {
    this.trackEvent('form_submission', {
      form_name: formName,
    });
  }

  trackButtonClick(buttonName: string, location: string) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      location,
    });
  }
}

export const analyticsService = new AnalyticsService();