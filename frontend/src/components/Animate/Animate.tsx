import React from "react"
import styles from "./Animate.module.css"

export const Animate = <P extends object>(BaseComponent: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => {
    const [isAnimating, setIsAnimating] = React.useState(false)

    return (
      <div
        id="AnimatedComponent"
        className={`${isAnimating ? styles.tadaAnimation : ""}`}
        onMouseEnter={() => {
          console.log("mouseEnter")
          setIsAnimating(true)
        }}
        onMouseLeave={() => {
          console.log("mouseLeave")
          setIsAnimating(false)
        }}
      >
        <BaseComponent {...props} />
      </div>
    )
  }

  WrappedComponent.displayName = `Animate(${BaseComponent.displayName || BaseComponent.name || "Component"})`
  return WrappedComponent
}
