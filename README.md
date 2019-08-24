<h2>React-native</h2>


<b>Installation steps :</b>
0. npm 
  //C:\Users\OM SAI\AppData\Roaming\npm
  Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
  npm install -g npm-windows-upgrade
  npm-windows-upgrade

1. Node
2. Git
3. Genemotion
4. Virtual Box
5. Yarn
6. Andriod Studio Code
7. Expo   => npm install expo-cli --global

npm --version
node --version
git --version
expo --version


//List commands when ervything is installed correctly

1. expo init <projectName>
2. expo start 


C:\Users\Admin\AppData\Local\Android\Sdk\platform-tools>


C:\Users\Admin\Downloads\platform-tools_r29.0.1-windows\platform-tools


ERROR
00:28
Couldn't start project on Android: could not install *smartsocket* listener: cannot bind to 127.0.0.1:5037: Only one usage of each socket address (protocol/network address/port) is normally permitted. (10048)
could not read ok from ADB Server
* failed to start daemon *
error: cannot connect to daemon



C:\Users\Admin\AppData\Local\Android\Sdk\platform-tools>adb start-server
adb server version (40) doesn't match this client (41); killing...
could not read ok from ADB Server
* failed to start daemon
error: cannot connect to daemon


adb start-server

adb kill-server

//to get list of all adb.exe placed over c drive.
where /r C:\ adb.exe



C:\Program Files\Genymobile\Genymotion\tools\adb.exe                         1.0.40

C:\Users\Admin\AppData\Local\Android\Sdk\platform-tools\adb.exe
version 1.0.41

C:\Users\Admin\AppData\Roaming\npm\node_modules\expo-cli\node_modules\@expo\xdl\binaries\windows\adb\adb.exe
version 1.0.36

C:\Users\Admin\Downloads\platform-tools_r29.0.1-windows\platform-tools\adb.exe
version 1.0.41


npm install react-native-elements --save




//Error
npm WARN deprecated joi@14.0.4: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated @babel/polyfill@7.4.4: � As of Babel 7.4.0, this
npm WARN deprecated package has been deprecated in favor of directly
npm WARN deprecated including core-js/stable (to polyfill ECMAScript
npm WARN deprecated features) and regenerator-runtime/runtime
npm WARN deprecated (needed to use transpiled generator functions):
npm WARN deprecated
npm WARN deprecated   > import "core-js/stable";
npm WARN deprecated   > import "regenerator-runtime/runtime";
npm WARN deprecated joi@11.4.0: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated hoek@4.2.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated topo@2.0.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated hoek@6.1.3: This module has moved and is now available at @hapi/hoek. Please update your dependencies as this version is no longer maintained an may contain bugs and security issues.
npm WARN deprecated topo@3.0.3: This module has moved and is now available at @hapi/topo. Please update your dependencies as this version is no longer maintained an may contain bugs and security issues.
C:\Users\OM SAI\AppData\Roaming\npm\expo-cli -> C:\Users\OM SAI\AppData\Roaming\npm\node_modules\expo-cli\bin\expo.js
C:\Users\OM SAI\AppData\Roaming\npm\expo -> C:\Users\OM SAI\AppData\Roaming\npm\node_modules\expo-cli\bin\expo.js
npm WARN ts-pnp@1.1.2 requires a peer of typescript@* but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-darwin-x64@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-darwin-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-darwin-x64@2.2.8: wanted {"os":"darwin","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-freebsd-ia32@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-freebsd-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-freebsd-ia32@2.2.8: wanted {"os":"freebsd","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-freebsd-x64@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-freebsd-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-freebsd-x64@2.2.8: wanted {"os":"freebsd","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-linux-arm64@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-linux-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-linux-arm64@2.2.8: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-linux-ia32@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-linux-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-linux-ia32@2.2.8: wanted {"os":"linux","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-sunos-x64@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-sunos-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-sunos-x64@2.2.8: wanted {"os":"sunos","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-darwin-ia32@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-darwin-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-darwin-ia32@2.2.8: wanted {"os":"darwin","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-win32-ia32@2.2.8-beta.1 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-win32-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-win32-ia32@2.2.8-beta.1: wanted {"os":"win32","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-linux-x64@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-linux-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-linux-x64@2.2.8: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-linux-arm@2.2.8 (node_modules\expo-cli\node_modules\@expo\ngrok-bin-linux-arm):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-linux-arm@2.2.8: wanted {"os":"linux","arch":"arm"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/traveling-fastlane-darwin@1.9.11 (node_modules\expo-cli\node_modules\@expo\traveling-fastlane-darwin):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/traveling-fastlane-darwin@1.9.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\expo-cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ expo-cli@3.0.10
updated 1 package in 232.052s









