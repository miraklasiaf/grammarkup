export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

export interface EventArgs {
  /** Typically the object that was interacted with (e.g. 'Video') */
  category: string
  /** The type of interaction (e.g. 'play') */
  action: string
  /** Useful for categorizing events (e.g. 'Fall Campaign') */
  label?: string
  /** A numeric value associated with the event (e.g. 42) */
  value?: number
  /** Specifies that a hit be considered non-interactive. */
  nonInteraction?: boolean
  /**
   * This specifies the transport mechanism with which hits will be sent.
   * The options are 'beacon', 'xhr', or 'image'. By default, analytics.js
   * will try to figure out the best method based on the hit size and browser
   * capabilities. If you specify 'beacon' and the user's browser does not support
   * the `navigator.sendBeacon` method, it will fall back to 'image' or 'xhr'
   * depending on hit size.
   */
  transport?: 'beacon' | 'xhr' | 'image'
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'pageview', url)
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, nonInteraction, transport }: EventArgs) => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', {
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
      nonInteraction,
      transport
    })
  }
}

export const GAScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
                var gaProperty='${GA_TRACKING_ID}',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);
                function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}
                if(!(parseInt(navigator.doNotTrack) === 1 || parseInt(window.doNotTrack) === 1 || parseInt(navigator.msDoNotTrack) === 1 || navigator.doNotTrack === "yes")) {
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                }
                if (typeof ga === "function") {
                  ga('create', '${GA_TRACKING_ID}', 'auto', {});
                  ga('set', 'anonymizeIp', true);
                }
              `
    }}
  />
)
