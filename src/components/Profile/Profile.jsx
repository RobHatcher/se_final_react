import React from 'react';
import './Profile.css';  // You'll need to create this CSS file

function Profile() {
  // You can add state here later for user data and saved articles
  
  return (
    <div className="profile">
      <section className="profile__header">
        <h1 className="profile__title">Profile</h1>
        <div className="profile__info">
          <h2 className="profile__name">Username</h2>
          <p className="profile__email">user@example.com</p>
        </div>
      </section>

      <section className="profile__saved-articles">
        <h2 className="profile__section-title">Saved Articles</h2>
        <div className="profile__articles-list">
          {/* This is where your saved articles will go */}
          <p className="profile__no-articles">No saved articles yet</p>
        </div>
      </section>
    </div>
  );
}

export default Profile;