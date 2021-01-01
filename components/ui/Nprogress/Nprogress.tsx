import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'

export default function Progress() {
  const router = useRouter()

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const start = () => {
      timeout = setTimeout(NProgress.start, 100)
    }

    const done = () => {
      clearTimeout(timeout)
      NProgress.done()
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', done)
    router.events.on('routeChangeError', done)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', done)
      router.events.off('routeChangeError', done)
    }
  }, [])

  return (
    <style jsx global>
      {`
        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          position: fixed;
          background: #0070f3;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #0070f3, 0 0 5px #0070f3;
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
  )
}
