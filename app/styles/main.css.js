module.exports = {
  body: {
    fontFamily: '-apple-system, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    textAlign: 'center'
  },

  darkMode: {
    body: {
      backgroundColor: 'black',
      color: 'white'
    },

    btn: {
      backgroundColor: 'white',
      color: 'black'
    }
  },

  lightMode: {
    body: {
      backgroundColor: 'white',
      color: 'black'
    },

    btn: {
      backgroundColor: 'black',
      color: 'white'
    }
  },

  btn: {
    background: 'inherit',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '1em',
    letterSpacing: '0.025em',
    outline: 'none',
    padding: '1.25em 2em'
  },

  scramble: {
    letterSpacing: '0.05em',
    strong: {
      letterSpacing: '0'
    }
  },

  p: { lineHeight: '2em' },

  td: { textAlign: 'left' },

  scrambleContainer: {
    fontSize: '.875em',
    padding: '2.5em 0 0',
    width: '100%'
  },

  statBox: {
    margin: '0 auto',
    width: '400px'
  },

  timestamp: {
    fontSize: '15em',
    fontWeight: '300',
    padding: '.25em 0 .3em'
  }
}
