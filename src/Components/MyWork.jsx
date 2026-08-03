import React, { useState, useRef, useEffect } from 'react'
import './MyWork.css'
import mywork_data from '../data/mywork_data.js'
import RecentWorks from '/Images/RecentWorks.png'

const tabs = [
  { key: 'all', label: 'All Projects' },
  { key: 'video', label: 'Video Projects' },
  { key: 'graphic', label: 'Graphic Designs' },
  { key: 'logo', label: 'Logo Designs' },
  { key: 'myvideos', label: 'Videography' },
]

function MyWork() {
  const [activeTab, setActiveTab] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeImage, setActiveImage] = useState(null)
  const modalVideoRef = useRef(null)

  // Reset visible items count when changing tabs
  useEffect(() => {
    setVisibleCount(6)
  }, [activeTab])

  const filtered = activeTab === 'all'
    ? mywork_data.filter((w) => w.w_category !== 'myvideos')
    : activeTab === 'logo'
    ? mywork_data.filter((w) => w.w_category === 'logo' || w.w_category === 'client_logo')
    : mywork_data.filter((w) => w.w_category === activeTab)

  const displayedItems = filtered.slice(0, visibleCount)

  const logosOnly = mywork_data.filter((w) => w.w_category === 'logo')
  const clientLogosOnly = mywork_data.filter((w) => w.w_category === 'client_logo')

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setActiveVideo(null)
        setActiveImage(null)
      }
    }
    if (activeVideo || activeImage) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [activeVideo, activeImage])

  // Auto-play modal video when opened
  useEffect(() => {
    if (activeVideo && modalVideoRef.current) {
      modalVideoRef.current.play()
    }
  }, [activeVideo])

  const openVideoModal = (videoSrc) => {
    setActiveVideo(videoSrc)
  }

  const closeVideoModal = () => {
    setActiveVideo(null)
  }

  const openImageModal = (work) => {
    setActiveImage(work)
  }

  const closeImageModal = () => {
    setActiveImage(null)
  }

  const renderCard = (work, idx) => (
    <div
      className={`work-card ${work.w_video ? 'work-card--video' : 'work-card--image'}`}
      key={work.w_no}
      style={{ animationDelay: `${idx * 0.07}s` }}
      onClick={work.w_video ? () => openVideoModal(work.w_video) : () => openImageModal(work)}
    >
      <div className="work-card-img-wrap">
        {work.w_video ? (
          <>
            <video
              src={work.w_video}
              muted
              loop
              playsInline
              preload="metadata"
              className="work-card-video-thumb"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0 }}
            />
            <div className="work-card-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </>
        ) : (
          <img src={work.w_img} alt={work.w_name} />
        )}
        <div className="work-card-overlay">
          <span className="work-card-tag">{work.w_category === 'video' ? '🎬 Video' : work.w_category === 'myvideos' ? '🎥 My Content' : work.w_category === 'client_logo' ? '🌐 Live Client' : work.w_category === 'logo' ? '🏷️ Logo' : '🎨 Graphic'}</span>
        </div>
      </div>
      <div className="work-card-info">
        <h3>{work.w_name}</h3>
        <p>{work.w_desc}</p>
      </div>
    </div>
  )

  return (
    <div id='work' data-aos="fade" className='mywork'>
      {/* Section Title */}
      <div className="section-header">
        <span className="section-ghost-text">PORTFOLIO</span>
        <div className="section-tag-badge">
          <span className="section-tag-dot"></span> FEATURED PROJECTS
        </div>
        <h2 className="section-main-heading">
          My Recent <span>Works</span>
        </h2>
        <div className="section-accent-line">
          <span className="section-line-glow"></span>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="work-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`work-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {activeTab === tab.key && <span className="tab-indicator" />}
          </button>
        ))}
      </div>

      {/* Cards Grid / Subsections */}
      {activeTab === 'logo' ? (
        <div className="graphic-sections-wrapper flex flex-col gap-10 mt-10">
          <div className="graphic-subsection">
            <div className="subsection-header">
              <h2>Designed Logos</h2>
              <span className="subsection-line"></span>
            </div>
            <div className="work-cards-grid">
              {logosOnly.map((work, idx) => renderCard(work, idx))}
            </div>
          </div>

          <div className="graphic-subsection mt-6">
            <div className="subsection-header">
              <h2>Live Client Websites (Logos in Action)</h2>
              <span className="subsection-line"></span>
            </div>
            <div className="work-cards-grid">
              {clientLogosOnly.map((work, idx) => renderCard(work, idx))}
            </div>
          </div>
        </div>
      ) : (
        <div className="work-cards-grid">
          {displayedItems.map((work, idx) => renderCard(work, idx))}
        </div>
      )}

      {/* Dynamic Show More / Show Less Button */}
      {activeTab !== 'logo' && filtered.length > 6 && (
        <div className="mywork-showmore flex flex-col items-center">
          {visibleCount < filtered.length ? (
            <button
              onClick={() => setVisibleCount(filtered.length)}
              className="showmore"
            >
              Show More ({filtered.length - visibleCount} More Projects) <i className="fa-solid fa-chevron-down"></i>
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(6)}
              className="showmore"
            >
              Show Less <i className="fa-solid fa-chevron-up"></i>
            </button>
          )}
        </div>
      )}

      {/* ===== Video Modal ===== */}
      {activeVideo && (
        <div className="video-modal-backdrop" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <video
              ref={modalVideoRef}
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="video-modal-player"
            />
          </div>
        </div>
      )}

      {/* ===== Image Modal ===== */}
      {activeImage && (
        <div className="video-modal-backdrop" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeImageModal} aria-label="Close image preview">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src={activeImage.w_img} alt={activeImage.w_name} className="image-modal-img" />
            <div className="image-modal-caption">
              <h3>{activeImage.w_name}</h3>
              <p>{activeImage.w_desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyWork