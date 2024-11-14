**Create APK With EAS Build** 

# 1. Install EAS CLI
First, if you haven't already, install the EAS CLI:
> npm install -g eas-cli 

# 2. Log In to Expo
Log into your Expo account in the terminal. If you don’t have an account, you can create one by running:


> eas login 

# 3. Configure EAS Build
Inside your project directory, initialize EAS:

> eas build:configure 
This will set up a configuration file (eas.json) in your project. Follow the prompts to configure your project.

# 4. Build the APK
Finally, build the APK by running:

> eas build --platform android --profile preview 
