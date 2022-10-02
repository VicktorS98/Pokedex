import Skeleton from "react-loading-skeleton"
import styles from "../../styles/PokeCardSkeletons.module.scss"

interface INumberOfRendered {
  numberOfRendered: number
}

// uses the number of rendered items to create an empty array with that quantity of elements to be rendered as skeletons
export default function PokeCardSkeletons({numberOfRendered}: INumberOfRendered) {
  return (
    <div className={styles.cardSkeletonsContainer}>
      {Array(numberOfRendered).fill(0).map((card, index) => 
      <div key={index}>
          <Skeleton circle width={130} height={130} />
          <Skeleton />
      </div>
      )}
    </div>
  )
};