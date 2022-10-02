import Skeleton from "react-loading-skeleton"
import styles from "../../styles/IndivPokeSkeleton.module.scss"

export default function IndivPokeSkeleton() {
  return (
    <div className={styles.indivCardContainer}>
      <Skeleton width={120} height={25}/>
      <Skeleton circle width={200} height={200}/>
      <div className={styles.statsContainer}>
        <Skeleton count={2} />
        <Skeleton count={2} />
        <Skeleton count={2} />
        <Skeleton count={2} />
        <Skeleton count={2} />
        <Skeleton count={2} />
      </div>
    </div>
  )
};