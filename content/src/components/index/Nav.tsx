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

          h1 {
            font-size: 2.5rem;
          }
        `}
      </style>
      <div>
        <nav>
          <Logo />
          <div className="sep" />
          <div>
            <h1>Matt Gleich</h1>
          </div>
        </nav>
      </div>
    </>
  )
}
