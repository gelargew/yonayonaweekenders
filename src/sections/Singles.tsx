import React from 'react'
import BgText from '../components/BgText'


const SINGLES_DATA = [
    {
        title: 'Night Rider feat.荒井岳史(the band apart)',
        buy: 'https://jvcmusic.lnk.to/Night_Rider'
    },
    {
        title: 'Good bye',
        buy: 'https://jvcmusic.lnk.to/_Good_bye'
    },
    {
        title: 'いい夢/唄が歩く時',
        buy: 'https://tower.jp/item/5183085/%E3%81%84%E3%81%84%E5%A4%A2%EF%BC%9C%E6%95%B0%E9%87%8F%E9%99%90%E5%AE%9A%E7%9B%A4%EF%BC%9E'
    },
    {
        title: 'いい夢',
        buy: 'https://jvcmusic.lnk.to/IiYume'
    },
    {
        title: '君とdrive / 東京ミッドナイトクルージングクラブ',
        buy: 'https://tower.jp/item/5143526/%E5%90%9B%E3%81%A8drive'
    },
    {
        title: 'R.M.T.T',
        buy: 'https://lnk.to/RMTT'
    },
    {
        title: '君とdrive',
        buy: 'https://lnk.to/kimitodrive'
    },
    {
        title: '遊泳/夜のgroovin',
        buy: "https://tower.jp/item/5048889/%E9%81%8A%E6%B3%B3---%E5%A4%9C%E3%81%AEgroovin'"
    },
    {
        title: '東京ミッドナイトクルージングクラブ',
        buy: 'https://lnk.to/tokyomidnightcruisingclub'
    },
    {
        title: '遊泳',
        buy: 'https://lnk.to/yuuei'
    }
]

export default function Singles()  {


    return (
        <section id='singles'>
            <div className='bg-text-container'>
                <BgText text='SINGLES' inverse />
                <BgText text='SINGLES' />
                <BgText text='SINGLES' inverse />
            </div>
            <h2>SINGLES</h2>

        </section>
    )
}