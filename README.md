```
[https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

> brew install node

> brew install watchman

> sudo gem install cocoapods

> brew install rbenv

> open ~/.zshrc
eval "$(/usr/local/Homebrew/bin/brew shellenv)"
eval "$(/usr/local/bin/rbenv init - zsh)"

> source ~/.zshrc

> rbenv install 2.7.5

> rbenv global 2.7.5

> ruby -v

// check install bundle

// install Xcode

// npm install -g react-devtools

```

# react-native init project
```
> npx react-native init ThienLearning

> cd ThienLearning

> yarn install // clone dependency

> npx pod-install ios

> yarn start // metro

> yarn ios

```

# react navigation
## Getting started

```
> yarn add @react-navigation/native

> yarn add react-native-screens react-native-safe-area-context

> npx pod-install ios
```

## Hello React Navigation
```
> yarn add @react-navigation/native-stack

> npx pod-install ios

* ISSUE: Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider error with @react-navigation/stack
    run: npm dedupe or yarn install

* ISSUE: requireNativeComponent: "RNSScreenStackHeaderConfig" was not found in the UIManager
    Remove the app from the simulator.
    run npx react-native run-ios
    And enjoy life)
```