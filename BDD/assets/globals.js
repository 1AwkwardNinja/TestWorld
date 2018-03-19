// Browser and Viewport
global.VIEWPORT = process.env['chimp.viewport'];
global.BROWSER = process.env['chimp.browser'];

// Time
global.MAX_TIMEOUT = 30000; // 30 seconds
global.UI_ANIMATION_TIMEOUT = 500;

// Routes
global.ROUTES = {
  ROOT: 'file:///Users/grant/repos/testWorld/index.html',
  NAV: {
    CONTENT: '/edit',
    MEDIA: '/#',
    NAVIGATION: '/menu',
    SCHEMAS: '/schema',
    USERS: '/users'
  }
};
