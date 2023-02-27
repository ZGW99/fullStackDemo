import LineCharts from "./components/LineCharts";
import styles from './index.less';

function Page1() {

  return (
    <div className="container">
      <div className={styles.flexBox}>
        <LineCharts id={'line1'} width={400} height={400} />
        <LineCharts id={'line2'} width={400} height={400}  />
      </div>
    </div>
  )
}
export default Page1;