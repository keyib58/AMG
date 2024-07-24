function LoadingDots({ className } = { className: '' }) {
    return (
      <div className={`loading ${className}`}>
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <style jsx>{`
          .loading {
            display: inline-flex;
            align-items: center;
          }
  
          .loading span {
            animation-name: blink;
            animation-duration: 1.4s;
            animation-iteration-count: infinite;
            animation-fill-mode: both;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
            margin: 0 4px;
            background-color: rgb(202, 202, 202);
          }
  
          .loading span:nth-of-type(2) {
            animation-delay: 0.2s;
          }
  
          .loading span:nth-of-type(3) {
            animation-delay: 0.4s;
          }
  
          @keyframes blink {
            0% {
              opacity: 0.2;
            }
            20% {
              opacity: 1;
            }
            100% {
              opacity: 0.2;
            }
          }
        `}</style>
      </div>
    );
  }
  
  export default LoadingDots;
  