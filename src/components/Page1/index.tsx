import LineCharts from "./components/LineCharts";
import styles from './index.module.less';

function Page1() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexBox}>
          <LineCharts id={'line1'} width={600} height={400} />
          <LineCharts id={'line2'} width={600} height={400} />
        </div>
      </div>
    </>
  )
}
export default Page1;