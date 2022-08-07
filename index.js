/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import App from './src/navigators';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://0ae68d10ba8c4833ba80858fdeede285@o1350147.ingest.sentry.io/6629897',
  maxBreadcrumbs: 50,
  debug: true, // for dev-mode only
  release: 'friday-app@' + process.env.npm_package_version,
  tracesSampleRate: 1,
});

App();
