-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert reviews
CREATE POLICY "Anyone can submit reviews" ON reviews
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reading approved reviews
CREATE POLICY "Anyone can read approved reviews" ON reviews
  FOR SELECT USING (approved = true);

-- Create policy for admin operations (you can adjust this based on your auth setup)
CREATE POLICY "Admin can manage all reviews" ON reviews
  FOR ALL USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(approved);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);