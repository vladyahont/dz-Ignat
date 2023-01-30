import s from './Loader.module.css'
import loaderSVG from './1000_F_462285175_HR3BqLsNeKAjtpMOOSI0IGpAs1HO25QP.jpg'
export const Loader = () => <div className={s.loader}>
    <img className={s.loader} src={loaderSVG} alt={''}/>
</div>
