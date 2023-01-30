import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {initStateType, loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const isLoading = useSelector<AppStoreType, initStateType>(state => state.loading)
    const dispatch = useDispatch()
    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        dispatch(loadingAC(true))
        const doLoading = () => dispatch(loadingAC(false))
        setTimeout(doLoading, 1500)
        // setTimeout
    }
    console.log(typeof isLoading)
    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>

                {isLoading  ? (<div id={'hw10-loading'}>
                                <Loader/>
                              </div>)
                            : (<button id={'hw10-button-start-loading'}
                                        onClick={setLoading}>
                                Set loading...
                               </button>)}
            </div>
        </div>
    )
}

export default HW10
