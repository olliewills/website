// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  websiteName: 'Ollie Williams',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'false',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'false',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'This website uses cookies to help me make improvements. <a href="#">Find out more <span class="visuallyhidden">about the cookies used</span></a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
