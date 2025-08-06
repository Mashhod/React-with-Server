import { useState } from 'react';
import { Plus, Image, Smile } from 'lucide-react';
import Header from '../components/Header';
import Post from '../components/Post';
import { dummyPosts } from '../data/posts';

const Feed = () => {
  const [posts] = useState(dummyPosts);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      // In a real app, you'd add the post to your state/database
      console.log('New post:', newPost);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create Post */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <form onSubmit={handlePostSubmit}>
            <div className="flex items-start space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Your avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows="3"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Image className="w-5 h-5" />
                      <span className="text-sm">Photo</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Smile className="w-5 h-5" />
                      <span className="text-sm">Emoji</span>
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!newPost.trim()}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="btn-secondary">
            Load more posts
          </button>
        </div>
      </div>

      {/* Floating Action Button - Mobile */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors md:hidden flex items-center justify-center">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Feed;