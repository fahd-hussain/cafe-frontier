import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { supabase, type Review } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const ReviewSection = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .eq('approved', true)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching reviews:', error);
        } else {
            setReviews(data || []);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || rating === 0 || !comment.trim()) {
            toast({
                title: 'Please fill all fields',
                description: 'Name, rating, and comment are required.',
                variant: 'destructive',
            });
            return;
        }

        setIsSubmitting(true);

        const { error } = await supabase.from('reviews').insert([
            {
                name: name.trim(),
                rating,
                comment: comment.trim(),
                approved: false,
            },
        ]);

        if (error) {
            toast({
                title: 'Error submitting review',
                description: 'Please try again later.',
                variant: 'destructive',
            });
        } else {
            toast({
                title: 'Review submitted!',
                description:
                    'Thank you for your feedback. Your review will be published after approval.',
            });
            setName('');
            setRating(0);
            setComment('');
        }

        setIsSubmitting(false);
    };

    const renderStars = (
        rating: number,
        interactive = false,
        onRatingChange?: (rating: number) => void,
    ) => {
        return (
            <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-6 h-6 ${
                            star <= rating
                                ? 'text-accent fill-accent'
                                : 'text-muted-foreground'
                        } ${interactive ? 'cursor-pointer hover:text-accent transition-colors' : ''}`}
                        onClick={
                            interactive && onRatingChange
                                ? () => onRatingChange(star)
                                : undefined
                        }
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
                            Share Your Experience
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We value your opinion! Let us know how your
                            experience was.
                        </p>
                    </div>

                    {/* Review Form */}
                    <Card className="mb-12 bg-card border-border shadow-card">
                        <CardHeader>
                            <h3 className="text-2xl font-semibold text-accent">
                                Leave a Review
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label
                                        htmlFor="name"
                                        className="text-foreground"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Your name"
                                        className="mt-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label className="text-foreground">
                                        Star Rating
                                    </Label>
                                    <div className="mt-2">
                                        {renderStars(rating, true, setRating)}
                                    </div>
                                </div>

                                <div>
                                    <Label
                                        htmlFor="comment"
                                        className="text-foreground"
                                    >
                                        Comments
                                    </Label>
                                    <Textarea
                                        id="comment"
                                        value={comment}
                                        onChange={(e) =>
                                            setComment(e.target.value)
                                        }
                                        placeholder="Tell us about your experience..."
                                        className="mt-2 min-h-[120px]"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    {isSubmitting
                                        ? 'Submitting...'
                                        : 'Submit Review'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Reviews Display */}
                    <div>
                        <h3 className="text-3xl font-semibold text-accent mb-8 text-center">
                            Customer Reviews
                        </h3>

                        {reviews.length === 0 ? (
                            <div className="text-center text-muted-foreground py-8">
                                <p>
                                    No reviews yet. Be the first to share your
                                    experience!
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {reviews.map((review) => (
                                    <Card
                                        key={review.id}
                                        className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-semibold text-foreground">
                                                    {review.name}
                                                </h4>
                                                {renderStars(review.rating)}
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                "{review.comment}"
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-4">
                                                {new Date(
                                                    review.created_at,
                                                ).toLocaleDateString()}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
