# R10

React Native App design to exhibit cutting edge tech, but on a reasonably small scale.

![Alt Text](https://github.com/NCMoseley/R10/blob/master/js/assets/images/AboutScreen.gif)
![Alt Text](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Schedule.gif)
![Alt Text](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Session.gif)

## Setup

Download repo then in root run:

npm install

then run:

react-native run-ios

![Alt Text](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Session2.gif)
![Alt Text](https://github.com/NCMoseley/R10/blob/master/js/assets/images/Faves.gif)

## Dev Setup

in root:

react-native run-ios --simulator="iPhone SE"

for remote debugger:
open "rndebugger://set-debugger-loc?host=localhost&port=8081"

In Android Studio:

start device simulation first in AVD manager, then:

react-native run-android

## Technology used:

React native, expo/ex-navigation for stacknavigation,
tab navigation(iOS), and drawer navigation(android), react-native-vector-icons,
react-linear-gradient, realm database coupled with redux for persistant state

## References

Thank you to Lindsey Woo for constant support and code design inspiration:

https://github.com/science-girl/R10

Thank you to Colin for support and inspiration:

https://github.com/colinmj/R10

## Android Screen Caps

![Alt Text](https://github.com/NCMoseley/R10/blob/master/js/assets/images/androidabout.gif)
![Alt Text](https://github.com/NCMoseley/R10/blob/master/js/assets/images/androidsession.gif)
