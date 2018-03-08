# R10

React Native App design to exhibit cutting edge tech, but on a reasonably small scale.

## Examples of App running on IOS.

![R10](https://github.com/NCMoseley/R10/blob/master/js/assets/images/AboutScreen.gif)
![R10](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Schedule.gif)
![R10](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Session.gif)
![R10](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Session2.gif)
![R10](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Faves.gif)

## Examples of App running on Android

![R10](https://github.com/NCMoseley/R10/blob/master/js/assets/images/androidabout.gif)
![R10](https://github.com/NCMoseley/R10/blob/master/js/assets/images/androidsession.gif)

## Setup

Make sure you have xcode, Android SDK, and npm or yarn.

**Download repo then,**

In root run:

```
  npm install
```

or

```
  yarn install
```

Then run:

```
  react-native run-ios
```

## Dev Setup

In root run:

```
  react-native run-ios --simulator="iPhone SE"
```

For remote debugger:

```
  open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

In Android Studio, start device simulation first in AVD manager, then:

```
  react-native run-android
```

## Technology used:

```
  React native
  Redux
  Expo/ex-navigation and stacknavigation
  Tab navigation(iOS)
  Drawer navigation(android)
  Realm database
```

## References

Thank you to Lindsey Woo for constant support and code design inspiration:

```
  https://github.com/science-girl/R10
```

Thank you to Colin for support and inspiration:

```
  https://github.com/colinmj/R10
```
