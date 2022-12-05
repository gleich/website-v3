export const Logo = (): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          svg {
            width: 150px;
            height: 150px;
          }

          .lines {
            animation: rotation 20s infinite linear;
            transform-origin: center;
          }

          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(359deg);
            }
          }
        `}
      </style>
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M101 148.25C101 123.547 119.957 103.272 144.117 101.178C143.894 101.726 143.681 102.281 143.477 102.842L131.278 136.359L101 148.901V148.25ZM144.887 103.355C145.169 102.579 145.47 101.815 145.788 101.063C146.603 101.021 147.424 101 148.25 101H186.307L164.857 122.45L133.158 135.58L144.887 103.355ZM187.807 99.4998H148.25C147.653 99.4998 147.059 99.5105 146.468 99.5317C156.698 77.5449 182.235 66.6657 205.448 75.1146L210.392 76.9144L187.807 99.4998ZM168.478 120.95L188.428 101H216.642L168.478 120.95ZM220.264 99.4998H189.928L211.948 77.4804L244.67 89.3904L220.264 99.4998ZM165.706 123.722L220.562 101H276.567L332.389 121.317L376.778 165.706L399.5 220.562V276.567L379.182 332.389L334.793 376.778L279.937 399.5H223.933L168.111 379.182L123.722 334.793L101 279.937V223.933L121.317 168.111L165.706 123.722ZM272.445 99.4998H224.183L246.756 90.1498L272.445 99.4998ZM329.879 118.808L280.952 101H312.071L329.879 118.808ZM310.571 99.4998H276.831L248.808 89.3001L285.269 74.1974L310.571 99.4998ZM333.214 120.022L314.192 101H349.975L362.229 130.582L333.214 120.022ZM349.354 99.4998H312.692L286.769 73.5761L287.37 73.3271C311.479 63.3408 339.119 74.7895 349.105 98.8986L349.354 99.4998ZM364.141 131.278L351.599 101H352.25C376.953 101 397.228 119.957 399.321 144.117C398.773 143.894 398.219 143.681 397.658 143.477L364.141 131.278ZM397.145 144.887C397.921 145.169 398.685 145.47 399.437 145.788C399.479 146.603 399.5 147.424 399.5 148.25V186.307L378.049 164.857L364.919 133.157L397.145 144.887ZM401 187.807V148.25C401 147.653 400.989 147.059 400.968 146.468C422.955 156.698 433.834 182.235 425.385 205.448L423.585 210.392L401 187.807ZM379.549 168.478L399.5 188.428V216.642L379.549 168.478ZM401 220.264V189.928L423.019 211.948L411.109 244.67L401 220.264ZM401 272.445V224.183L410.35 246.756L401 272.445ZM401 276.831L411.199 248.808L426.302 285.269L401 310.571V276.831ZM401 312.692L426.923 286.769L427.172 287.37C437.159 311.479 425.71 339.119 401.601 349.105L401 349.354V312.692ZM399.5 314.193V349.975L369.918 362.229L380.478 333.214L399.5 314.193ZM369.222 364.141L399.5 351.599V352.25C399.5 376.953 380.543 397.228 356.383 399.322C356.605 398.773 356.818 398.219 357.022 397.658L369.222 364.141ZM377.968 335.724L368.038 363.007L338.414 375.278L377.968 335.724ZM335.643 378.049L367.342 364.919L355.613 397.145C355.33 397.921 355.03 398.685 354.712 399.437C353.896 399.479 353.076 399.5 352.25 399.5H314.192L335.643 378.049ZM283.857 399.5L332.021 379.549L312.071 399.5H283.857ZM280.236 401H310.571L288.552 423.019L255.83 411.109L280.236 401ZM253.778 411.959L287.382 424.189L283.661 427.91C265.208 446.363 235.291 446.363 216.839 427.91L216.379 427.45L253.778 411.959ZM251.692 411.199L215.231 426.302L189.928 401H223.669L251.692 411.199ZM187.807 401L213.731 426.923L213.13 427.173C189.021 437.159 161.381 425.71 151.394 401.601L151.145 401H187.807ZM219.547 399.5H188.428L170.621 381.692L219.547 399.5ZM167.285 380.478L186.307 399.5H150.524L138.271 369.918L167.285 380.478ZM125.222 338.414L164.776 377.968L137.492 368.038L125.222 338.414ZM122.45 335.643L135.58 367.342L103.355 355.613C102.579 355.33 101.815 355.03 101.063 354.712C101.021 353.896 101 353.076 101 352.25V314.192L122.45 335.643ZM99.4998 352.25C99.4998 352.846 99.5105 353.44 99.5317 354.032C77.5449 343.801 66.6657 318.265 75.1146 295.052L76.9144 290.107L99.4998 312.692V352.25ZM99.4998 310.571L77.4805 288.552L89.3904 255.83L99.4998 280.236V310.571ZM88.5407 253.778L76.3101 287.382L72.5892 283.661C54.1369 265.208 54.1369 235.291 72.5892 216.839L73.0493 216.379L88.5407 253.778ZM99.4998 276.316L90.1498 253.743L99.4998 228.054V276.316ZM99.4998 223.669L89.3001 251.692L74.1974 215.231L99.4998 189.928V223.669ZM118.808 170.621L101 219.547V188.428L118.808 170.621ZM120.022 167.285L101 186.307V150.524L130.582 138.271L120.022 167.285ZM73.5761 213.731L73.327 213.13C63.3407 189.021 74.7895 161.381 98.8986 151.394L99.4998 151.145V187.807L73.5761 213.731ZM148.901 399.5H148.25C123.547 399.5 103.272 380.543 101.178 356.383C101.726 356.605 102.281 356.818 102.842 357.022L136.359 369.222L148.901 399.5ZM354.032 400.968C343.801 422.955 318.265 433.834 295.052 425.385L290.107 423.585L312.692 401H352.25C352.846 401 353.44 400.989 354.032 400.968ZM424.189 213.118L427.91 216.839C446.363 235.291 446.363 265.208 427.91 283.661L427.45 284.121L411.959 246.721L424.189 213.118ZM246.721 88.5407L213.118 76.3101L216.839 72.5892C235.291 54.1369 265.208 54.1369 283.661 72.5892L284.121 73.0493L246.721 88.5407ZM122.531 164.776L132.462 137.492L162.085 125.222L122.531 164.776ZM101 312.071V283.857L120.95 332.021L101 312.071ZM253.743 410.35L228.054 401H276.316L253.743 410.35ZM399.5 312.071L381.692 329.879L399.5 280.952V312.071ZM363.007 132.462L375.278 162.085L335.724 122.531L363.007 132.462Z"
          fill="#0F0F0F"
          stroke="white"
          strokeWidth="3.5"
          className="lines"
        />
        <path
          d="M198.676 238.08L200.609 238.595L200.613 238.58L200.617 238.565L198.676 238.08ZM202.708 225.984L200.94 225.05L200.908 225.11L200.881 225.172L202.708 225.984ZM221.14 221.52L219.758 222.965L219.775 222.981L219.792 222.997L221.14 221.52ZM225.172 229.728L223.191 230.003L223.869 234.883L226.785 230.912L225.172 229.728ZM255.844 221.376L254.698 223.014L254.716 223.027L254.735 223.04L255.844 221.376ZM260.884 231.024L258.896 231.236L259.471 236.647L262.537 232.151L260.884 231.024ZM293.14 221.808L291.916 223.389L291.932 223.402L291.949 223.414L293.14 221.808ZM288.82 265.44L286.949 264.735L286.935 264.771L286.923 264.808L288.82 265.44ZM302.788 262.416L304.706 262.984L304.718 262.943L304.729 262.901L302.788 262.416ZM303.508 260.4L304.923 261.814L304.923 261.814L303.508 260.4ZM306.82 264L308.753 264.515L306.82 264ZM304.804 269.616L306.639 270.413L306.645 270.399L306.651 270.385L304.804 269.616ZM301.348 276.096L303.013 277.205L303.024 277.188L303.036 277.17L301.348 276.096ZM296.02 281.424L297.147 283.076L297.155 283.071L297.163 283.066L296.02 281.424ZM281.044 280.272L279.535 281.584L279.551 281.603L279.567 281.621L281.044 280.272ZM280.468 262.848L282.337 263.56L282.347 263.534L282.357 263.508L280.468 262.848ZM261.892 237.072L260.165 236.064L260.162 236.07L261.892 237.072ZM258.292 247.44L260.222 247.966L260.224 247.959L260.226 247.951L258.292 247.44ZM257.14 252.192L259.086 252.655L259.088 252.645L259.091 252.635L257.14 252.192ZM255.988 256.8L254.059 256.274L254.053 256.294L254.048 256.315L255.988 256.8ZM250.228 279.84L252.095 280.558L252.139 280.444L252.169 280.325L250.228 279.84ZM242.02 282.432L243.526 281.115L242.02 282.432ZM241.444 277.824L243.342 278.456L243.366 278.384L243.385 278.309L241.444 277.824ZM250.804 240.384L252.745 240.869L252.752 240.841L252.758 240.813L250.804 240.384ZM225.172 237.072L223.445 236.064L223.442 236.07L225.172 237.072ZM221.572 247.44L219.639 246.929L219.619 247.005L219.605 247.082L221.572 247.44ZM220.42 252.192L222.343 252.741L222.347 252.73L222.35 252.718L220.42 252.192ZM219.268 256.8L221.209 257.285L221.225 257.222L221.236 257.158L219.268 256.8ZM213.508 279.84L215.375 280.558L215.419 280.444L215.449 280.325L213.508 279.84ZM205.3 282.432L206.806 281.115L205.3 282.432ZM204.724 277.824L206.622 278.456L206.646 278.384L206.665 278.309L204.724 277.824ZM215.524 234.624L213.584 234.139L215.524 234.624ZM207.316 225.84L205.552 224.899L205.539 224.922L205.528 224.946L207.316 225.84ZM202.996 238.656L201.058 238.163L201.056 238.171L202.996 238.656ZM201.988 241.536L200.388 240.336L200.355 240.38L200.324 240.427L201.988 241.536ZM200.1 240.528C200.1 240.594 200.097 240.642 200.095 240.662C200.093 240.685 200.091 240.699 200.091 240.7C200.09 240.702 200.093 240.684 200.101 240.641C200.118 240.555 200.146 240.421 200.191 240.23C200.281 239.85 200.419 239.308 200.609 238.595L196.744 237.565C196.55 238.292 196.4 238.878 196.298 239.314C196.247 239.531 196.203 239.727 196.172 239.893C196.151 240.003 196.1 240.266 196.1 240.528H200.1ZM200.617 238.565C200.986 237.088 201.548 235.165 202.309 232.786L198.5 231.566C197.725 233.987 197.135 236 196.736 237.595L200.617 238.565ZM202.309 232.786C203.062 230.433 203.805 228.441 204.536 226.796L200.881 225.172C200.076 226.983 199.283 229.119 198.5 231.566L202.309 232.786ZM204.477 226.918C206.963 222.213 209.859 220.352 213.076 220.352V216.352C207.846 216.352 203.83 219.579 200.94 225.05L204.477 226.918ZM213.076 220.352C215.75 220.352 217.937 221.224 219.758 222.965L222.523 220.075C219.928 217.592 216.738 216.352 213.076 216.352V220.352ZM219.792 222.997C221.599 224.647 222.764 226.928 223.191 230.003L227.153 229.453C226.621 225.616 225.097 222.425 222.489 220.043L219.792 222.997ZM226.785 230.912C232.042 223.751 238.345 220.352 245.764 220.352V216.352C236.864 216.352 229.439 220.537 223.56 228.544L226.785 230.912ZM245.764 220.352C249.234 220.352 252.185 221.256 254.698 223.014L256.991 219.738C253.744 217.464 249.975 216.352 245.764 216.352V220.352ZM254.735 223.04C256.977 224.535 258.458 227.118 258.896 231.236L262.873 230.812C262.351 225.906 260.472 222.057 256.954 219.712L254.735 223.04ZM262.537 232.151C268.003 224.134 274.634 220.352 282.484 220.352V216.352C273.055 216.352 265.286 221.018 259.232 229.897L262.537 232.151ZM282.484 220.352C286.215 220.352 289.325 221.383 291.916 223.389L294.365 220.227C291.004 217.625 287.01 216.352 282.484 216.352V220.352ZM291.949 223.414C294.207 225.09 295.604 228.174 295.604 233.328H299.604C299.604 227.538 298.026 222.942 294.332 220.202L291.949 223.414ZM295.604 233.328C295.604 235.983 294.93 239.916 293.479 245.22C292.038 250.491 289.864 256.992 286.949 264.735L290.692 266.145C293.632 258.336 295.851 251.709 297.338 246.276C298.815 240.876 299.604 236.529 299.604 233.328H295.604ZM286.923 264.808C285.206 269.96 284.228 273.854 284.228 276.24H288.228C288.228 274.594 288.979 271.288 290.718 266.072L286.923 264.808ZM284.228 276.24C284.228 277.828 284.52 279.385 285.427 280.581C286.414 281.881 287.861 282.416 289.396 282.416V278.416C288.82 278.416 288.683 278.255 288.614 278.163C288.465 277.967 288.228 277.436 288.228 276.24H284.228ZM289.396 282.416C292.941 282.416 295.929 280.405 298.381 277.11C300.817 273.836 302.902 269.078 304.706 262.984L300.871 261.848C299.123 267.754 297.2 271.996 295.172 274.722C293.159 277.427 291.228 278.416 289.396 278.416V282.416ZM304.729 262.901C304.866 262.353 304.98 261.968 305.068 261.721C305.112 261.596 305.139 261.539 305.144 261.528C305.146 261.524 305.135 261.548 305.108 261.589C305.084 261.626 305.024 261.712 304.923 261.814L302.094 258.986C301.82 259.26 301.654 259.564 301.567 259.74C301.464 259.945 301.377 260.164 301.301 260.375C301.149 260.8 300.999 261.327 300.848 261.931L304.729 262.901ZM304.923 261.814C304.817 261.919 304.722 261.975 304.673 262C304.625 262.024 304.608 262.025 304.642 262.016C304.674 262.008 304.738 261.995 304.841 261.985C304.944 261.975 305.075 261.968 305.236 261.968V257.968C304.708 257.968 304.172 258.011 303.671 258.136C303.183 258.258 302.586 258.494 302.094 258.986L304.923 261.814ZM305.236 261.968C305.492 261.968 305.655 261.99 305.748 262.01C305.841 262.031 305.821 262.041 305.747 261.992C305.66 261.934 305.55 261.827 305.473 261.672C305.399 261.526 305.396 261.419 305.396 261.408H309.396C309.396 260.345 308.95 259.32 307.966 258.664C307.125 258.103 306.116 257.968 305.236 257.968V261.968ZM305.396 261.408C305.396 261.307 305.408 261.281 305.388 261.403C305.372 261.499 305.344 261.641 305.3 261.838C305.213 262.231 305.077 262.776 304.888 263.485L308.753 264.515C308.948 263.784 309.1 263.177 309.205 262.706C309.292 262.315 309.396 261.81 309.396 261.408H305.396ZM304.888 263.485C304.537 264.8 303.903 266.578 302.958 268.847L306.651 270.385C307.625 268.046 308.336 266.08 308.753 264.515L304.888 263.485ZM302.97 268.819C302.054 270.927 300.951 272.995 299.661 275.022L303.036 277.17C304.434 274.973 305.635 272.721 306.639 270.413L302.97 268.819ZM299.684 274.987C298.494 276.772 296.903 278.374 294.878 279.782L297.163 283.066C299.554 281.402 301.515 279.452 303.013 277.205L299.684 274.987ZM294.894 279.772C293.105 280.991 291.192 281.584 289.108 281.584V285.584C292.017 285.584 294.712 284.737 297.147 283.076L294.894 279.772ZM289.108 281.584C286.233 281.584 284.109 280.663 282.521 278.923L279.567 281.621C282.011 284.297 285.264 285.584 289.108 285.584V281.584ZM282.554 278.96C280.987 277.158 280.164 274.905 280.164 272.064H276.164C276.164 275.751 277.262 278.97 279.535 281.584L282.554 278.96ZM280.164 272.064C280.164 270.337 280.817 267.551 282.337 263.56L278.599 262.136C277.048 266.209 276.164 269.567 276.164 272.064H280.164ZM282.357 263.508C285.15 255.513 287.256 248.822 288.667 243.448C290.066 238.116 290.82 233.935 290.82 231.024H286.82C286.82 233.393 286.183 237.156 284.798 242.432C283.425 247.666 281.355 254.247 278.58 262.188L282.357 263.508ZM290.82 231.024C290.82 227.685 290.25 224.825 288.805 222.752C287.269 220.548 284.95 219.52 282.196 219.52V223.52C283.859 223.52 284.852 224.076 285.524 225.04C286.287 226.135 286.82 228.027 286.82 231.024H290.82ZM282.196 219.52C273.638 219.52 266.343 225.473 260.165 236.064L263.62 238.08C269.538 227.935 275.779 223.52 282.196 223.52V219.52ZM260.162 236.07C258.956 238.153 257.7 241.85 256.359 246.929L260.226 247.951C261.572 242.854 262.717 239.639 263.623 238.074L260.162 236.07ZM256.363 246.914C256.063 248.012 255.672 249.63 255.19 251.749L259.091 252.635C259.569 250.53 259.946 248.98 260.222 247.966L256.363 246.914ZM255.195 251.729C254.716 253.739 254.338 255.25 254.059 256.274L257.918 257.326C258.215 256.238 258.605 254.677 259.086 252.655L255.195 251.729ZM254.048 256.315L248.288 279.355L252.169 280.325L257.929 257.285L254.048 256.315ZM248.362 279.122C247.986 280.1 247.519 280.681 247.041 281.027C246.574 281.364 245.946 281.584 245.044 281.584V285.584C246.639 285.584 248.123 285.18 249.383 284.269C250.634 283.367 251.511 282.076 252.095 280.558L248.362 279.122ZM245.044 281.584C244.083 281.584 243.706 281.322 243.526 281.115L240.515 283.749C241.678 285.078 243.318 285.584 245.044 285.584V281.584ZM243.526 281.115C243.151 280.687 243.012 280.283 243.012 279.84H239.012C239.012 281.317 239.546 282.641 240.515 283.749L243.526 281.115ZM243.012 279.84C243.012 279.69 243.072 279.265 243.342 278.456L239.547 277.192C239.241 278.111 239.012 279.03 239.012 279.84H243.012ZM243.385 278.309L252.745 240.869L248.864 239.899L239.504 277.339L243.385 278.309ZM252.758 240.813C253.634 236.824 254.1 233.541 254.1 231.024H250.1C250.1 233.115 249.703 236.072 248.851 239.955L252.758 240.813ZM254.1 231.024C254.1 227.685 253.53 224.825 252.085 222.752C250.549 220.548 248.23 219.52 245.476 219.52V223.52C247.139 223.52 248.132 224.076 248.804 225.04C249.567 226.135 250.1 228.027 250.1 231.024H254.1ZM245.476 219.52C236.918 219.52 229.623 225.473 223.445 236.064L226.9 238.08C232.818 227.935 239.059 223.52 245.476 223.52V219.52ZM223.442 236.07C222.236 238.153 220.98 241.85 219.639 246.929L223.506 247.951C224.852 242.854 225.997 239.639 226.903 238.074L223.442 236.07ZM219.605 247.082C219.429 248.049 219.064 249.565 218.491 251.666L222.35 252.718C222.929 250.595 223.332 248.943 223.54 247.798L219.605 247.082ZM218.497 251.643C217.917 253.674 217.511 255.287 217.301 256.442L221.236 257.158C221.41 256.201 221.772 254.742 222.343 252.741L218.497 251.643ZM217.328 256.315L211.568 279.355L215.449 280.325L221.209 257.285L217.328 256.315ZM211.642 279.122C211.266 280.1 210.799 280.681 210.321 281.027C209.854 281.364 209.226 281.584 208.324 281.584V285.584C209.919 285.584 211.403 285.18 212.663 284.269C213.914 283.367 214.791 282.076 215.375 280.558L211.642 279.122ZM208.324 281.584C207.363 281.584 206.986 281.322 206.806 281.115L203.795 283.749C204.958 285.078 206.598 285.584 208.324 285.584V281.584ZM206.806 281.115C206.431 280.687 206.292 280.283 206.292 279.84H202.292C202.292 281.317 202.826 282.641 203.795 283.749L206.806 281.115ZM206.292 279.84C206.292 279.69 206.352 279.265 206.622 278.456L202.827 277.192C202.521 278.111 202.292 279.03 202.292 279.84H206.292ZM206.665 278.309L217.465 235.109L213.584 234.139L202.784 277.339L206.665 278.309ZM217.465 235.109C218.167 232.301 218.532 229.687 218.532 227.28H214.532C214.532 229.289 214.226 231.571 213.584 234.139L217.465 235.109ZM218.532 227.28C218.532 225.207 218.207 223.307 217.273 221.87C216.243 220.284 214.641 219.52 212.788 219.52V223.52C213.432 223.52 213.702 223.716 213.92 224.05C214.234 224.533 214.532 225.513 214.532 227.28H218.532ZM212.788 219.52C209.584 219.52 207.229 221.754 205.552 224.899L209.081 226.781C210.476 224.166 211.769 223.52 212.788 223.52V219.52ZM205.528 224.946C203.992 228.018 202.51 232.453 201.058 238.163L204.935 239.149C206.363 233.531 207.761 229.422 209.105 226.734L205.528 224.946ZM201.056 238.171C200.872 238.908 200.709 239.467 200.569 239.867C200.41 240.32 200.336 240.406 200.388 240.336L203.588 242.736C203.929 242.282 204.167 241.696 204.344 241.189C204.54 240.629 204.737 239.94 204.937 239.141L201.056 238.171ZM200.324 240.427C200.492 240.175 200.686 240.041 200.792 239.982C200.895 239.924 200.954 239.913 200.927 239.92C200.905 239.925 200.841 239.939 200.722 239.95C200.605 239.961 200.452 239.968 200.26 239.968V243.968C200.817 243.968 201.384 243.929 201.898 243.8C202.35 243.687 203.141 243.413 203.653 242.645L200.324 240.427ZM200.26 239.968C200.005 239.968 199.842 239.946 199.749 239.926C199.656 239.905 199.676 239.895 199.75 239.944C199.837 240.002 199.947 240.109 200.024 240.264C200.097 240.41 200.1 240.517 200.1 240.528H196.1C196.1 241.591 196.547 242.616 197.531 243.272C198.372 243.833 199.381 243.968 200.26 243.968V239.968Z"
          fill="white"
        />
      </svg>
    </>
  )
}
