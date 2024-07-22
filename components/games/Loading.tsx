export function LoadingDots({ className }: { className: string }) {
    return (
        <div className={`loading-dots ${className}`}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <style jsx>{`
          .loading-dots {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dot {
            height: 8px;
            width: 8px;
            margin: 0 2px;
            background-color: black;
            border-radius: 50%;
            display: inline-block;
            animation: loading-dots 1s infinite ease-in-out;
          }
          @keyframes loading-dots {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}</style>
        </div>
    );
}
