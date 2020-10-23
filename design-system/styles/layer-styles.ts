const layerStyles = {
  card: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: 8,
      borderRadius: 'xl',
      boxShadow: 'card',
      overflow: 'hidden'
    },
    sunken: {
      bg: 'sunken',
      p: [4, 8],
      borderRadius: 'xl'
    },
    interactive: {
      bg: 'elevated',
      color: 'text',
      p: [4, 8],
      borderRadius: 'xl',
      boxShadow: 'card',
      overflow: 'hidden',
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated'
      }
    },
    translucent: {
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      color: 'text',
      boxShadow: 'none',
      '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)'
      },
      '@media (prefers-reduced-transparency: reduce)': {
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }
    },
    translucentDark: {
      backgroundColor: 'rgba(0, 0, 0, 0.875)',
      color: 'white',
      boxShadow: 'none',
      '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
        backgroundColor: 'rgba(0, 0, 0, 0.625)',
        backdropFilter: 'saturate(180%) blur(16px)',
        WebkitBackdropFilter: 'saturate(180%) blur(16px)'
      },
      '@media (prefers-reduced-transparency: reduce)': {
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }
    }
  }
}

export default layerStyles
