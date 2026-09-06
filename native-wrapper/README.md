# Optional Android and iOS Native Test Wrapper

The recommended client experience is the installable PWA in the `web` folder. This wrapper is optional and is provided when an APK, Android Studio project, Xcode project, or TestFlight build is required for device testing.

It loads the deployed ANJOORA HTTPS domain inside a Capacitor application. Replace the example domain at runtime with `ANJOORA_APP_URL`.

## 1. Install the tools

```bash
npm install
```

## 2. Generate the Android project

```bash
npm run add:android
npm run assets
```

Set the real domain and synchronize:

### macOS/Linux

```bash
ANJOORA_APP_URL=https://your-real-domain.com npm run sync:android
npm run open:android
```

### Windows PowerShell

```powershell
$env:ANJOORA_APP_URL="https://your-real-domain.com"
npm run sync:android
npm run open:android
```

Build and install the debug APK from Android Studio.

## 3. Generate the iOS project

iOS compilation requires macOS, Xcode and an Apple Developer signing team.

```bash
npm run add:ios
npm run assets
ANJOORA_APP_URL=https://your-real-domain.com npm run sync:ios
npm run open:ios
```

Select your signing team in Xcode, then run on a connected iPhone or create a TestFlight archive.

## Important production note

This remote-domain wrapper is intended for private testing. App Store or Play Store submission may require additional native functionality, privacy declarations, account/data controls and platform review compliance. The PWA does not require store approval.
