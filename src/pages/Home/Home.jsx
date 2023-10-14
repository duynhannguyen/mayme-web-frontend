import React from 'react'
import SectionHero from '../../component/SectionHero/SectionHero';
import SafeSolution from '../../component/SafeSolution/SafeSolution';
import WhyChoose from '../../component/WhyChoose/WhyChoose';
import Introduce from '../../component/Introduce/Introduce';
import Evalute from '../../component/Evalute/Evalute';
const Home = () => {
    return (
        <>
            <SectionHero />
            <SafeSolution/>
            <WhyChoose/>
            <Introduce/>
            <Evalute/>
        </ >
    )
}

export default Home
