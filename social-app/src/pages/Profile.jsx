import { useState } from 'react';
import { MapPin, Calendar, Link as LinkIcon, Edit } from 'lucide-react';
import Header from '../components/Header';
import Post from '../components/Post';
import { dummyPosts } from '../data/posts';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const userPosts = dummyPosts.slice(0, 3); // Show only first 3 posts as user's posts

  const userProfile = {
    name: 'David Rodriguez',
    username: 'david_fit',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=300&fit=crop',
    bio: 'Fitness enthusiast 💪 | Software Developer 💻 | Coffee lover ☕ | Sharing my journey to inspire others',
    location: 'San Francisco, CA',
    website: 'davidfitness.com',
    joinDate: 'March 2021',
    following: 342,
    followers: 1205,
    posts: 89
  };

  const tabs = [
    { id: 'posts', label: 'Posts', count: userProfile.posts },
    { id: 'media', label: 'Media', count: 24 },
    { id: 'likes', label: 'Likes', count: 156 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="h-48 sm:h-64 relative">
            <img
              src={userProfile.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-4 right-4 btn-secondary">
              <Edit className="w-4 h-4 mr-2" />
              Edit Cover
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6 -mt-16 sm:-mt-20">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Details */}
              <div className="flex-1 mt-4 sm:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                    <p className="text-gray-500">@{userProfile.username}</p>
                  </div>
                  <div className="flex space-x-3 mt-4 sm:mt-0">
                    <button className="btn-secondary">Message</button>
                    <button className="btn-primary">Edit Profile</button>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-800 mt-4 leading-relaxed">{userProfile.bio}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="w-4 h-4" />
                    <a href={`https://${userProfile.website}`} className="text-primary-600 hover:text-primary-500">
                      {userProfile.website}
                    </a>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {userProfile.joinDate}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex space-x-6 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{userProfile.following}</div>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{userProfile.followers}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{userProfile.posts}</div>
                    <div className="text-sm text-gray-600">Posts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-100">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'posts' && (
              <div className="space-y-6">
                {userPosts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
                <div className="text-center">
                  <button className="btn-secondary">Load more posts</button>
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {userPosts.filter(post => post.image).map((post) => (
                  <div key={post.id} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt="Media"
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'likes' && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <p className="text-lg font-medium mb-2">Liked posts will appear here</p>
                  <p className="text-sm">When you like posts, they'll show up in this tab.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;