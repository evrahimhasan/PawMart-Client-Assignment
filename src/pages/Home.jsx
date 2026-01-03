import { Link } from 'react-router';
import MeetExperts from '../components/PetHeroes';
import Banner from '../components/Banner';
import WhyAdopt from '../components/WhyAdopt';
import RecentListing from './RecentListing';
import Categories from '../components/Categories';
import Statistics from '../components/Statistics';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className="space-y-12">
                
                <RecentListing></RecentListing>

                <WhyAdopt></WhyAdopt>

                <MeetExperts></MeetExperts>

                <Categories></Categories>

                <Statistics></Statistics>

                <HowItWorks></HowItWorks>

                <FAQ></FAQ>

            </div>
        </>
    );
};

export default Home;