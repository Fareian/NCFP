import React from "react";
import Image from "next/image";

const ChristianWelcome = () => {
  return (
    <section className="christian-welcome">
      <div className="flex flex-1 flex-col gap-6">
        <div className="welcome-header">
          <h1 className="text-4xl font-bold text-white mb-2">
            ✨ Welcome to New Creation Publication and Fellowship
          </h1>
          <p className="text-xl text-light-100 mb-6">
            Free Christian Books & Articles to Strengthen Your Faith
          </p>
        </div>

        <div className="welcome-content">
          <p className="text-lg text-light-100 mb-6 leading-relaxed">
            At <span className="font-semibold text-primary">New Creation</span>, we believe in the transforming power of God's Word. Whether you're seeking to grow in your personal walk with Christ, deepen your understanding of Scripture, or find solid biblical resources for ministry, you're in the right place.
          </p>

          <div className="resources-section">
            <p className="text-lg text-light-100 mb-4">
              We offer free access to a growing collection of:
            </p>
            
            <div className="resources-grid">
              <div className="resource-item">
                <span className="text-2xl">📖</span>
                <span className="text-lg font-semibold text-white">Christian Books</span>
              </div>
              
              <div className="resource-item">
                <span className="text-2xl">📝</span>
                <span className="text-lg font-semibold text-white">Bible-based Articles</span>
              </div>
              
              <div className="resource-item">
                <span className="text-2xl">🔍</span>
                <span className="text-lg font-semibold text-white">Topical Studies</span>
              </div>
              
              <div className="resource-item">
                <span className="text-2xl">📚</span>
                <span className="text-lg font-semibold text-white">Sermons and Devotionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center">
        <div className="welcome-illustration">
          <div className="text-8xl mb-4">🙏</div>
          <div className="text-center">
            <p className="text-xl text-light-100">Start Your Journey</p>
            <p className="text-lg text-primary">Explore Our Collection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristianWelcome; 