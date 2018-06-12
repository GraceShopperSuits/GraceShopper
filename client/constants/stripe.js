const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_test_HWld5WnOMiogEDaG7uaDooeZ'
    : 'pk_test_HWld5WnOMiogEDaG7uaDooeZ'

export default STRIPE_PUBLISHABLE
