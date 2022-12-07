import { Nav } from 'components/index/Nav'
import { NextPage } from 'next'

const Index: NextPage = () => (
  <>
    <style jsx>{`
      main {
        display: flex;
        padding: 0;
      }

      .nav {
        position: absolute;
        top: 0px;
        left: 0px;
      }

      .main {
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
      }
    `}</style>
    <main>
      <div className="nav">
        <Nav />
      </div>
      <div className="main">
        <p>Coding</p>
      </div>
    </main>
  </>
)

export default Index
