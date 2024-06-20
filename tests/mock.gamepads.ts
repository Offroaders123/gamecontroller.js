const gamepads: [Gamepad, Gamepad, Gamepad] = [
  {
    axes: [0, 0, 0, 0],
    buttons: [
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 }
    ],
    connected: true,
    id: '17-button gamepad mockup (STANDARD Vendor: Alvaro Product: Montoro)',
    index: 0,
    mapping: 'standard',
    timestamp: 5200,
    vibrationActuator: {
      // @ts-expect-error - testing demo
      playEffect: (type, obj) => `${type} - ${obj.duration}`
    }
  },
  {
    axes: [1.0, 1.0],
    buttons: [
      { pressed: true, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: true, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 }
    ],
    connected: true,
    id: '10-button gamepad mockup (Vendor: Alvaro Product: Montoro10)',
    index: 1,
    mapping: '',
    timestamp: 5200,
    vibrationActuator: null
  },
  {
    axes: [],
    buttons: [],
    connected: true,
    id: 'No-button No-axe gamepad mockup (Vendor: Alvaro Product: Montoro10)',
    index: 2,
    mapping: '',
    timestamp: 5200,
    // @ts-expect-error - testing demo
    vibrationActuator: { playEffect: 'error' }
  }
];

const gamepadsFirefox: [Gamepad, Gamepad, Gamepad, Gamepad] = [
  {
    axes: [0, 0, 0, 0, 0],
    buttons: [
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 }
    ],
    connected: true,
    id: '17-button gamepad mockup (STANDARD Vendor: Alvaro Product: Montoro)',
    index: 0,
    mapping: 'standard',
    timestamp: 5200,
    hapticActuators: {
      // @ts-expect-error - testing demo
      pulse: (intensity, duration) => `vibrate at ${intensity} for ${duration}ms`
    }
  },
  {
    axes: [0, 0, 0],
    buttons: [
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 }
    ],
    connected: true,
    id: '10-button gamepad mockup (Vendor: Alvaro Product: Montoro10)',
    index: 1,
    mapping: '',
    timestamp: 5200,
    // @ts-expect-error - testing demo
    hapticActuators: null
  },
  {
    axes: [0, 0, 0],
    buttons: [
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 },
      { pressed: false, touched: false, value: 0 }
    ],
    connected: true,
    id: '10-button gamepad mockup (Vendor: Alvaro Product: Montoro10)',
    index: 2,
    mapping: '',
    timestamp: 5200,
    hapticActuators: [
      {
        // @ts-expect-error - testing demo
        pulse: (intensity, duration) => `vibrate at ${intensity} for ${duration}ms`
      },
      null
    ]
  },
  {
    axes: [0, 0, 0],
    buttons: [{ pressed: false, touched: false, value: 0 }],
    connected: true,
    id: '1-button gamepad mockup (Vendor: Alvaro Product: Montoro10)',
    index: 3,
    mapping: '',
    timestamp: 5200,
    hapticActuators: [
      {
        // @ts-expect-error - testing demo
        pulse: 'error'
      },
      null
    ]
  }
];

export { gamepads, gamepadsFirefox };
