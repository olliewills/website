// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Ollie Williams',

  // Default port that prototype runs on
  port: '31283',

  // Enable or disable password protection on production
  useAuth: 'false',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'false',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'true',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'false',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'This website uses cookies to store some information. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
