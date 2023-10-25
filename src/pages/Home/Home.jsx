import React from 'react'
import SectionHero from '../../component/SectionHero/SectionHero';
import SafeSolution from '../../component/SafeSolution/SafeSolution';
import WhyChoose from '../../component/WhyChoose/WhyChoose';
import Introduce from '../../component/Introduce/Introduce';
import Evalute from '../../component/Evalute/Evalute';
import AddProductForm from '../../component/AddProductForm/AddProductForm';
const Home = () => {
    return (
        <>
        
            <SectionHero />
            <WhyChoose/>
            <SafeSolution/>
            <Introduce/>
            <Evalute/>
            
        </ >
    )
}

export default Home
