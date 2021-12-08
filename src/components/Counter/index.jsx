import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.showCounter)

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  }
  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={() => dispatch({ type: 'incrementBy5', payload: 5 })}>
          Increment by 5
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter