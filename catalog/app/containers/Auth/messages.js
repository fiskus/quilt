import { defineMessages } from 'react-intl'

const scope = 'app.containers.Auth'

export default defineMessages({
  notificationAuthLost: {
    id: `${scope}.notificationAuthLost`,
    defaultMessage: 'Authentication lost. Sign in again.',
  },

  // Wrapper
  wrapperFailureHeading: {
    id: `${scope}.Wrapper.Failure.heading`,
    defaultMessage: 'Authentication error',
  },
  wrapperFailureDescription: {
    id: `${scope}.Wrapper.Failure.description`,
    defaultMessage: 'Something went wrong. Try again.',
  },
  wrapperFailureRetry: {
    id: `${scope}.Wrapper.Failure.retry`,
    defaultMessage: 'Retry',
  },
  wrapperWorking: {
    id: `${scope}.Wrapper.working`,
    defaultMessage: 'Authenticating...',
  },

  // SSO
  ssoGoogleUse: {
    id: `${scope}.SSO.Google.use`,
    defaultMessage: 'Use Google Account',
  },
  ssoGoogleError: {
    id: `${scope}.SSO.Google.error`,
    defaultMessage: 'Unable to sign in with Google. {details}',
  },
  ssoGoogleErrorUnexpected: {
    id: `${scope}.SSO.Google.errorUnexpected`,
    defaultMessage: 'Unable to sign in with Google. Try again later or contact support.',
  },
  ssoGoogleNotFound: {
    id: `${scope}.SSO.Google.notFound`,
    defaultMessage:
      'No Quilt user linked to this Google account. Notify your Quilt administrator.',
  },
  ssoOktaUse: {
    id: `${scope}.SSO.Okta.use`,
    defaultMessage: 'Use Okta Account',
  },
  ssoOktaError: {
    id: `${scope}.SSO.Okta.error`,
    defaultMessage: 'Unable to sign in with Okta. {details}',
  },
  ssoOktaErrorUnexpected: {
    id: `${scope}.SSO.Okta.errorUnexpected`,
    defaultMessage: 'Unable to sign in with Okta. Try again later or contact support.',
  },
  ssoOktaNotFound: {
    id: `${scope}.SSO.Okta.notFound`,
    defaultMessage:
      'No Quilt user linked to this Okta account. Notify your Quilt administrator.',
  },
  ssoOneLoginUse: {
    id: `${scope}.SSO.OneLogin.use`,
    defaultMessage: 'Use OneLogin Account',
  },
  ssoOneLoginError: {
    id: `${scope}.SSO.OneLogin.error`,
    defaultMessage: 'Unable to sign in with OneLogin. {details}',
  },
  ssoOneLoginErrorUnexpected: {
    id: `${scope}.SSO.OneLogin.errorUnexpected`,
    defaultMessage:
      'Unable to sign in with OneLogin. Try again later or contact support.',
  },
  ssoOneLoginNotFound: {
    id: `${scope}.SSO.OneLogin.notFound`,
    defaultMessage:
      'No Quilt user linked to this OneLogin account. Notify your Quilt administrator.',
  },
  ssoSignUpHeading: {
    id: `${scope}.SSO.SignUp.heading`,
    defaultMessage: 'Complete sign-up',
  },
  ssoSignUpCancel: {
    id: `${scope}.SSO.SignUp.cancel`,
    defaultMessage: 'Cancel',
  },
  ssoSignUpErrorEmailDomain: {
    id: `${scope}.SSO.SignUp.errorEmailDomain`,
    defaultMessage: 'Email domain is not allowed',
  },
  ssoSignUpSignInError: {
    id: `${scope}.SSO.SignUp.signInError`,
    defaultMessage: "Couldn't sign in automatically",
  },

  // SignUp
  signUpHeading: {
    id: `${scope}.SignUp.heading`,
    defaultMessage: 'Sign up',
  },
  signUpSignInHint: {
    id: `${scope}.SignUp.signInHint`,
    defaultMessage: 'signing in',
  },
  signUpUsernameLabel: {
    id: `${scope}.SignUp.usernameLabel`,
    defaultMessage: 'Username',
  },
  signUpUsernameRequired: {
    id: `${scope}.SignUp.usernameRequired`,
    defaultMessage: 'Enter a username',
  },
  signUpUsernameTaken: {
    id: `${scope}.SignUp.usernameTaken`,
    defaultMessage: 'Username taken, try {link}',
  },
  signUpUsernameInvalid: {
    id: `${scope}.SignUp.usernameInvalid`,
    // TODO: specify username requirements
    defaultMessage: 'Username invalid',
  },
  signUpEmailLabel: {
    id: `${scope}.SignUp.emailLabel`,
    defaultMessage: 'Email',
  },
  signUpEmailRequired: {
    id: `${scope}.SignUp.emailRequired`,
    defaultMessage: 'Enter your email',
  },
  signUpEmailTaken: {
    id: `${scope}.SignUp.emailTaken`,
    defaultMessage: 'Email taken, try {link}',
  },
  signUpEmailInvalid: {
    id: `${scope}.SignUp.emailInvalid`,
    defaultMessage: 'Enter a valid email address',
  },
  signUpPassLabel: {
    id: `${scope}.SignUp.passLabel`,
    defaultMessage: 'Password',
  },
  signUpPassRequired: {
    id: `${scope}.SignUp.passRequired`,
    defaultMessage: 'Enter a password',
  },
  signUpPassInvalid: {
    id: `${scope}.SignUp.passInvalid`,
    defaultMessage: 'Password must be at least 8 characters long',
  },
  signUpPassCheckLabel: {
    id: `${scope}.SignUp.passCheckLabel`,
    defaultMessage: 'Verify password',
  },
  signUpPassCheckRequired: {
    id: `${scope}.SignUp.passCheckRequired`,
    defaultMessage: 'Enter the password again',
  },
  signUpPassCheckMatch: {
    id: `${scope}.SignUp.passCheckMatch`,
    defaultMessage: 'Passwords must match',
  },
  signUpErrorUnexpected: {
    id: `${scope}.SignUp.errorUnexpected`,
    defaultMessage: 'Something went wrong. Try again later.',
  },
  signUpErrorSMTP: {
    id: `${scope}.SignUp.errorSMTP`,
    defaultMessage: 'SMTP error: contact your administrator',
  },
  signUpSubmit: {
    id: `${scope}.SignUp.submit`,
    defaultMessage: 'Sign up',
  },
  signUpSuccess: {
    id: `${scope}.SignUp.success`,
    defaultMessage:
      'You have signed up for Quilt. Check your email for further instructions.',
  },
  signUpHintSignIn: {
    id: `${scope}.SignUp.hintSignIn`,
    defaultMessage: 'Already have an account? {link}.',
  },
  signUpHintSignInLink: {
    id: `${scope}.SignUp.hintSignInLink`,
    defaultMessage: 'Sign in',
  },

  // SignIn
  signInHeading: {
    id: `${scope}.SignIn.heading`,
    defaultMessage: 'Sign in',
  },
  signInUsernameLabel: {
    id: `${scope}.SignIn.usernameLabel`,
    defaultMessage: 'Username or email',
  },
  signInUsernameRequired: {
    id: `${scope}.SignIn.usernameRequired`,
    defaultMessage: 'Enter your username or email',
  },
  signInPassLabel: {
    id: `${scope}.SignIn.passLabel`,
    defaultMessage: 'Password',
  },
  signInPassRequired: {
    id: `${scope}.SignIn.passRequired`,
    defaultMessage: 'Enter your password',
  },
  signInSubmit: {
    id: `${scope}.SignIn.submit`,
    defaultMessage: 'Sign in',
  },
  signInErrorInvalidCredentials: {
    id: `${scope}.SignIn.errorInvalidCredentials`,
    defaultMessage: 'Invalid credentials',
  },
  signInErrorUnexpected: {
    id: `${scope}.SignIn.errorUnexpected`,
    defaultMessage: 'Something went wrong. Try again later.',
  },
  signInHintSignUp: {
    id: `${scope}.SignIn.hintSignUp`,
    defaultMessage: "Don't have an account? {link}.",
  },
  signInHintSignUpLink: {
    id: `${scope}.SignIn.hintSignUpLink`,
    defaultMessage: 'Sign up',
  },
  signInHintReset: {
    id: `${scope}.SignIn.hintReset`,
    defaultMessage: 'Did you forget your password? {link}.',
  },
  signInHintResetLink: {
    id: `${scope}.SignIn.hintResetLink`,
    defaultMessage: 'Reset it',
  },

  // SignOut
  signOutWaiting: {
    id: `${scope}.SignOut.waiting`,
    defaultMessage: 'Signing out',
  },

  // PassReset
  passResetHeading: {
    id: `${scope}.PassReset.heading`,
    defaultMessage: 'Reset Password',
  },
  passResetEmailLabel: {
    id: `${scope}.PassReset.emailLabel`,
    defaultMessage: 'Email',
  },
  passResetEmailRequired: {
    id: `${scope}.PassReset.emailRequired`,
    defaultMessage: 'Enter your email',
  },
  passResetSubmit: {
    id: `${scope}.PassReset.submit`,
    defaultMessage: 'Reset',
  },
  passResetSuccess: {
    id: `${scope}.PassReset.success`,
    defaultMessage:
      'You have requested a password reset. Check your email for further instructions.',
  },
  passResetErrorUnexpected: {
    id: `${scope}.PassReset.errorUnexpected`,
    defaultMessage: 'Something went wrong. Try again later.',
  },
  passResetErrorSMTP: {
    id: `${scope}.PassReset.errorSMTP`,
    defaultMessage: 'SMTP error: contact your administrator',
  },
  passResetHintSignUp: {
    id: `${scope}.PassReset.hintSignUp`,
    defaultMessage: "Don't have an account? {link}.",
  },
  passResetHintSignUpLink: {
    id: `${scope}.PassReset.hintSignUpLink`,
    defaultMessage: 'Sign up',
  },

  // PassChange
  passChangeHeading: {
    id: `${scope}.PassChange.heading`,
    defaultMessage: 'Change Password',
  },
  passChangePassLabel: {
    id: `${scope}.PassChange.passLabel`,
    defaultMessage: 'New password',
  },
  passChangePassRequired: {
    id: `${scope}.PassChange.passRequired`,
    defaultMessage: 'Enter a password',
  },
  passChangePassInvalid: {
    id: `${scope}.PassChange.passInvalid`,
    defaultMessage: 'Password must be at least 8 characters long',
  },
  passChangePassCheckLabel: {
    id: `${scope}.PassChange.passCheckLabel`,
    defaultMessage: 'Re-enter your new password',
  },
  passChangePassCheckRequired: {
    id: `${scope}.PassChange.passCheckRequired`,
    defaultMessage: 'Enter the password again',
  },
  passChangePassCheckMatch: {
    id: `${scope}.PassChange.passCheckMatch`,
    defaultMessage: 'Passwords must match',
  },
  passChangeSubmit: {
    id: `${scope}.PassChange.submit`,
    defaultMessage: 'Change Password',
  },
  passChangeErrorInvalid: {
    id: `${scope}.PassChange.errorInvalid`,
    defaultMessage: 'This reset link is invalid. Try {link} again.',
  },
  passChangeErrorInvalidLink: {
    id: `${scope}.PassChange.errorInvalidLink`,
    defaultMessage: 'resetting password',
  },
  passChangeErrorUnexpected: {
    id: `${scope}.PassChange.errorUnexpected`,
    defaultMessage: 'Something went wrong. Try again later.',
  },
  passChangeSuccess: {
    id: `${scope}.PassChange.success`,
    defaultMessage: 'Your password has been changed.',
  },
  passChangeSuccessCTA: {
    id: `${scope}.PassChange.success`,
    defaultMessage: 'Now you can {link} using your new password.',
  },
  passChangeSuccessCTALink: {
    id: `${scope}.PassChange.successCTALink`,
    defaultMessage: 'sign in',
  },

  // Code
  codeHeading: {
    id: `${scope}.Code.heading`,
    defaultMessage: 'Code',
  },
  codeError: {
    id: `${scope}.Code.error`,
    defaultMessage: 'Something went wrong. Try again later.',
  },
  codeWorking: {
    id: `${scope}.Code.working`,
    defaultMessage: 'Getting the code',
  },
  codeCopy: {
    id: `${scope}.Code.copy`,
    defaultMessage: 'Copy to clipboard',
  },

  // Activation Error
  activationErrorHeading: {
    id: `${scope}.ActivationError.heading`,
    defaultMessage: 'Activation Error',
  },
  activationErrorMessage: {
    id: `${scope}.ActivationError.message`,
    defaultMessage: `Something went wrong during account activation.
      We're here to help. Email us at {email}.`,
  },
})
