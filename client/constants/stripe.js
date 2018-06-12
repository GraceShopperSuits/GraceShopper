const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'sk_test_BTN8iRTC8AvGzH9QXPnYjzRS'
    : 'pk_test_HWld5WnOMiogEDaG7uaDooeZ'

export default STRIPE_PUBLISHABLE
