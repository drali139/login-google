import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ali.login',
  appName: 'login',
  webDir: 'www',
  plugins: {
    GoogleAuth:{
      scopes:["profile","email"],
      serverClientId:"793884728909-uic587pfcjv7uvpkk2aa5qs0samphk2s.apps.googleusercontent.com",
      forceCodeForRefreshToken:true
    }
     // This enables mixed content on Android
  }
};

export default config;