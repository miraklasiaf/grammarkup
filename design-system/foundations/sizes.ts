export const space = {
  0: '0rem',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  4: '1rem', // 16px
  8: '2rem', // 32px
  16: '4rem', // 64px
  32: '8rem', // 128px
  64: '16rem', // 256px
  128: '32rem' // 512px
}

const layouting = {
  widePlus: '128rem', // 2048px
  wide: '96rem', // 1536
  layoutPlus: '75rem', // 1200
  layout: '64rem', // 1024
  copyUltra: '61.25rem', // 980
  copyPlus: '48rem', // 768
  copy: '42.5rem', // 680
  narrowPlus: '37.5rem', // 600
  narrow: '32rem' // 512px
}

const sizes = {
  ...space,
  ...layouting
}

export default sizes
