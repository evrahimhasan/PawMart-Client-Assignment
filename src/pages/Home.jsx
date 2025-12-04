import { Link } from 'react-router';
import MeetExperts from '../components/PetHeroes';
import Banner from '../components/Banner';
import WhyAdopt from '../components/WhyAdopt';
import RecentListing from './RecentListing';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className="space-y-12">
                
                <RecentListing></RecentListing>

                <WhyAdopt></WhyAdopt>

                <MeetExperts></MeetExperts>

            </div>
        </>
    );
};

export default Home;