import Image from 'next/image'
import { Logo } from './Logo'

export const Nav = (): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          nav {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--background);
            color: var(--foreground);
          }

          .sep {
            width: 1px;
            height: 50px;
            background-color: var(--foreground);
            margin-right: 20px;
          }

          .nameAndSocials {
            display: flex;
            flex-direction: column;
            margin-left: 5px;
          }

          .socials {
            display: flex;
            gap: 10px;
          }

          h1 {
            font-size: 3rem;
            margin: 0;
            padding: 0;
          }

          a {
            color: var(--foreground);
          }

          a:hover svg {
            animation: hoverRotate 0.5s;
          }

          #strava-icon {
            stroke: var(--foreground);
            fill: var(--foreground);
          }

          @keyframes hoverRotate {
            from {
              transform: rotate(20deg);
            }

            to {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
      <div>
        <nav>
          <Logo />
          <div className="nameAndSocials">
            <h1>Matt Gleich</h1>
            <div className="socials">
              <a
                href="https://twitter.com/matt_gleich"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mattglei.ch/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://github.com/gleich"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.strava.com/athletes/30124266"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                  id="strava-icon"
                >
                  <title>Strava icon</title>
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
