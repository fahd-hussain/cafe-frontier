import ReviewSection from '@/components/ReviewSection';
import BackgroundSpices from '@/components/BackgroundSpices';
import Footer from '@/components/Footer';

const Reviews = () => {
    return (
        <div className="min-h-screen bg-background relative">
            <BackgroundSpices />
            <div className="relative z-10">
                <div className="pt-20">
                    <ReviewSection />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Reviews;
