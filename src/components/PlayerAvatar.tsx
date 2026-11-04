import React, { useState, useEffect } from 'react';

interface PlayerAvatarProps {
  name?: string;
  role?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  customSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Module-level image URL cache
const imageCache: Record<string, string> = {};

// Helper to preload next player image
export const preloadPlayerImage = (name: string) => {
  if (!name || typeof name !== 'string' || imageCache[name]) return;

  const fetchUrl = (queryName: string, fallbackName?: string) => {
    try {
      fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(queryName)}&prop=pageimages&format=json&pithumbsize=300&origin=*`)
        .then(res => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then(data => {
          const pages = data?.query?.pages;
          if (pages) {
            const pageId = Object.keys(pages)[0];
            const thumbnail = pages[pageId]?.thumbnail?.source;
            if (thumbnail) {
              imageCache[name] = thumbnail;
              // Preload in memory if running in browser
              if (typeof window !== 'undefined' && typeof window.Image !== 'undefined') {
                const img = new window.Image();
                img.src = thumbnail;
              }
              return;
            }
          }
          if (fallbackName) {
            fetchUrl(fallbackName);
          } else {
            imageCache[name] = 'NONE';
          }
        })
        .catch(() => {
          if (fallbackName) {
            fetchUrl(fallbackName);
          } else {
            imageCache[name] = 'NONE';
          }
        });
    } catch (e) {
      if (fallbackName) {
        fetchUrl(fallbackName);
      } else {
        imageCache[name] = 'NONE';
      }
    }
  };

  fetchUrl(name, name + ' (footballer)');
};

export const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ name = '', role = '', size = 'md', customSrc, className = '', style = {} }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(customSrc || null);
  const [loading, setLoading] = useState<boolean>(!customSrc);

  useEffect(() => {
    if (customSrc) {
      setImageSrc(customSrc);
      setLoading(false);
      return;
    }

    if (!name || typeof name !== 'string') {
      setImageSrc(null);
      setLoading(false);
      return;
    }

    // Check cache first
    if (imageCache[name]) {
      if (imageCache[name] === 'NONE') {
        setImageSrc(null);
        setLoading(false);
      } else {
        setImageSrc(imageCache[name]);
        setLoading(false);
      }
      return;
    }

    // Trigger fetch
    setLoading(true);
    let active = true;

    const fetchUrl = (queryName: string, fallbackName?: string) => {
      try {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(queryName)}&prop=pageimages&format=json&pithumbsize=300&origin=*`)
          .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
          })
          .then(data => {
            if (!active) return;
            const pages = data?.query?.pages;
            if (pages) {
              const pageId = Object.keys(pages)[0];
              const thumbnail = pages[pageId]?.thumbnail?.source;
              if (thumbnail) {
                imageCache[name] = thumbnail;
                setImageSrc(thumbnail);
                setLoading(false);
                return;
              }
            }
            if (fallbackName) {
              fetchUrl(fallbackName);
            } else {
              imageCache[name] = 'NONE';
              setImageSrc(null);
              setLoading(false);
            }
          })
          .catch(() => {
            if (!active) return;
            if (fallbackName) {
              fetchUrl(fallbackName);
            } else {
              imageCache[name] = 'NONE';
              setImageSrc(null);
              setLoading(false);
            }
          });
      } catch (e) {
        if (!active) return;
        if (fallbackName) {
          fetchUrl(fallbackName);
        } else {
          imageCache[name] = 'NONE';
          setImageSrc(null);
          setLoading(false);
        }
      }
    };

    fetchUrl(name, name + ' (footballer)');

    return () => {
      active = false;
    };
  }, [name, customSrc]);

  const getInitials = (fullName: string) => {
    if (!fullName || typeof fullName !== 'string') return '??';
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      const first = parts[0][0] || '';
      const last = parts[parts.length - 1][0] || '';
      return (first + last).toUpperCase() || '??';
    }
    return fullName.substring(0, 2).toUpperCase() || '??';
  };

  const initials = getInitials(name);

  // Elegant gradient color based on role
  const getRoleGradient = (playerRole: string) => {
    const r = playerRole.toUpperCase();
    if (['CB', 'LB', 'RB', 'LWB', 'RWB'].includes(r)) {
      return 'linear-gradient(135deg, #7c3aed, #4f46e5)'; // purple-indigo (defenders)
    } else if (['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(r)) {
      return 'linear-gradient(135deg, #0284c7, #0369a1)'; // sky blue (midfielders)
    } else if (r === 'GK') {
      return 'linear-gradient(135deg, #0d9488, #0f766e)'; // teal (gk)
    } else {
      return 'linear-gradient(135deg, #ea580c, #b45309)'; // orange-amber (attackers)
    }
  };

  const gradient = getRoleGradient(role);

  const sizePx = {
    sm: { width: '48px', height: '48px', fontSize: '14px' },
    md: { width: '96px', height: '96px', fontSize: '24px' },
    lg: { width: '128px', height: '128px', fontSize: '36px' },
    xl: { width: '100%', height: '100%', fontSize: '48px' }
  };

  return (
    <div
      className={`player-avatar ${className}`}
      style={{
        background: imageSrc ? '#0b0f19' : gradient,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        color: '#ffffff',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        overflow: 'hidden',
        position: 'relative',
        ...sizePx[size],
        ...style
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
            transition: 'opacity 0.2s ease-in-out',
            opacity: loading ? 0 : 1
          }}
          onLoad={() => setLoading(false)}
          onError={() => {
            if (!customSrc) {
              imageCache[name] = 'NONE';
            }
            setImageSrc(null);
            setLoading(false);
          }}
        />
      ) : (
        <span style={{ letterSpacing: '2px' }}>{initials}</span>
      )}
      
      {/* Loading overlay spinner */}
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(7, 9, 14, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px'
        }}>
          <div style={{
            width: size === 'sm' ? '12px' : '24px',
            height: size === 'sm' ? '12px' : '24px',
            border: '2px solid rgba(255,255,255,0.1)',
            borderTopColor: 'var(--accent-gold)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      )}
    </div>
  );
};
