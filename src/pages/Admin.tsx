import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Check, X, Eye } from 'lucide-react';
import { supabase, type Review } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import BackgroundSpices from '@/components/BackgroundSpices';

const Admin = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        fetchAllReviews();
    }, []);

    const fetchAllReviews = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching reviews:', error);
            toast({
                title: 'Error',
                description: 'Failed to fetch reviews.',
                variant: 'destructive',
            });
        } else {
            setReviews(data || []);
        }
        setLoading(false);
    };

    const approveReview = async (id: string) => {
        const { error } = await supabase
            .from('reviews')
            .update({ approved: true })
            .eq('id', id);

        if (error) {
            toast({
                title: 'Error',
                description: 'Failed to approve review.',
                variant: 'destructive',
            });
        } else {
            toast({
                title: 'Success',
                description: 'Review approved successfully.',
            });
            fetchAllReviews();
        }
    };

    const deleteReview = async (id: string) => {
        const { error } = await supabase.from('reviews').delete().eq('id', id);

        if (error) {
            toast({
                title: 'Error',
                description: 'Failed to delete review.',
                variant: 'destructive',
            });
        } else {
            toast({
                title: 'Success',
                description: 'Review deleted successfully.',
            });
            fetchAllReviews();
        }
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-4 h-4 ${
                            star <= rating
                                ? 'text-accent fill-accent'
                                : 'text-muted-foreground'
                        }`}
                    />
                ))}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background relative flex items-center justify-center">
                <BackgroundSpices />
                <div className="relative z-10 text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading reviews...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background relative">
            <BackgroundSpices />
            <div className="relative z-10 p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">
                            Review Management
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Manage customer reviews and feedback
                        </p>
                    </div>

                    <div className="mb-6">
                        <div className="flex gap-4 text-sm">
                            <span className="text-foreground">
                                Total Reviews: <strong>{reviews.length}</strong>
                            </span>
                            <span className="text-green-500">
                                Approved:{' '}
                                <strong>
                                    {reviews.filter((r) => r.approved).length}
                                </strong>
                            </span>
                            <span className="text-yellow-500">
                                Pending:{' '}
                                <strong>
                                    {reviews.filter((r) => !r.approved).length}
                                </strong>
                            </span>
                        </div>
                    </div>

                    {reviews.length === 0 ? (
                        <Card className="bg-card border-border">
                            <CardContent className="p-8 text-center">
                                <Eye className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground">
                                    No reviews yet.
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-6">
                            {reviews.map((review) => (
                                <Card
                                    key={review.id}
                                    className="bg-card border-border shadow-card"
                                >
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <CardTitle className="text-foreground">
                                                    {review.name}
                                                </CardTitle>
                                                {renderStars(review.rating)}
                                                <Badge
                                                    variant={
                                                        review.approved
                                                            ? 'default'
                                                            : 'secondary'
                                                    }
                                                    className={
                                                        review.approved
                                                            ? 'bg-green-500 text-white'
                                                            : 'bg-yellow-500 text-black'
                                                    }
                                                >
                                                    {review.approved
                                                        ? 'Approved'
                                                        : 'Pending'}
                                                </Badge>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {new Date(
                                                    review.created_at,
                                                ).toLocaleString()}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground mb-4 leading-relaxed">
                                            "{review.comment}"
                                        </p>
                                        <div className="flex gap-2">
                                            {!review.approved && (
                                                <Button
                                                    onClick={() =>
                                                        approveReview(review.id)
                                                    }
                                                    className="bg-green-600 hover:bg-green-700 text-white"
                                                    size="sm"
                                                >
                                                    <Check className="w-4 h-4 mr-2" />
                                                    Approve
                                                </Button>
                                            )}
                                            <Button
                                                onClick={() =>
                                                    deleteReview(review.id)
                                                }
                                                variant="destructive"
                                                size="sm"
                                            >
                                                <X className="w-4 h-4 mr-2" />
                                                Delete
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
