import { ReactNode } from "react";
import backgroundSvg from '../../background.svg'

export const Background = ({ children }: { children: ReactNode }) => {
    return (
        <div 
        style={{
            backgroundImage: `url(${backgroundSvg})`,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto"
        }}
          >
              {children}
              </ div>
    )
}