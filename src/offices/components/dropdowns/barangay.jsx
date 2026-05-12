import React, { useState, useRef, useEffect } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { BARANGAYS } from '../../../data/barangay';

// ─── BarangayDropdown ─────────────────────────────────────────────────────────
// Floating dropdown with mobile/desktop optimizations
// Mobile: Modal-style centered positioning with backdrop
// Desktop: Absolute positioned floating dropdown
// ──────────────────────────────────────────────────────────────────────────────

const BarangayDropdown = ({ 
  isOpen, 
  onClose, 
  triggerRef, 
  onSelectBarangay,
  isMobile = false,
}) => {
  // ─── STATE ──────────────────────────────────────────────────────────
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBarangay, setSelectedBarangay] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const backdropRef = useRef(null);

  // ─── COMPUTED ───────────────────────────────────────────────────────
  const filteredBarangays = BARANGAYS.filter(barangay =>
    barangay.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ─── EFFECTS: OUTSIDE CLICK ─────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      const clickedOutside = (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        triggerRef?.current && !triggerRef.current.contains(e.target)
      );

      if (clickedOutside) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // ─── EFFECTS: BACKDROP CLICK (MOBILE) ───────────────────────────────
  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const handleBackdropClick = (e) => {
      if (backdropRef.current === e.target) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleBackdropClick);
    return () => document.removeEventListener('mousedown', handleBackdropClick);
  }, [isOpen, isMobile]);

  // ─── EFFECTS: FOCUS MANAGEMENT ──────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      // Delay focus to ensure input is rendered
      const focusTimer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      
      return () => clearTimeout(focusTimer);
    }
  }, [isOpen]);

  // ─── EFFECTS: KEYBOARD NAVIGATION ───────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev < filteredBarangays.length - 1 ? prev + 1 : prev
          );
          break;

        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1));
          break;

        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            handleSelectBarangay(filteredBarangays[highlightedIndex]);
          }
          break;

        case 'Escape':
          e.preventDefault();
          closeDropdown();
          break;

        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredBarangays]);

  // ─── EFFECTS: SCROLL INTO VIEW ──────────────────────────────────────
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('.barangay-dropdown__item');
      if (items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex]);

  // ─── HANDLERS ───────────────────────────────────────────────────────
  const closeDropdown = () => {
    onClose();
    setSearchTerm('');
    setHighlightedIndex(-1);
  };

  const handleSelectBarangay = (barangay) => {
    setSelectedBarangay(barangay);
    closeDropdown();
    
    // Call parent callback with selected barangay
    if (onSelectBarangay) {
      onSelectBarangay(barangay);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setHighlightedIndex(-1); // Reset highlight on search
  };

  const handleItemClick = (barangay) => {
    handleSelectBarangay(barangay);
  };

  // ─── RENDER ─────────────────────────────────────────────────────────
  if (!isOpen) return null;

  const dropdownClassName = isMobile 
    ? 'barangay-dropdown barangay-dropdown--mobile'
    : 'barangay-dropdown barangay-dropdown--desktop';

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobile && (
        <div 
          className="barangay-dropdown__backdrop"
          ref={backdropRef}
        />
      )}

      {/* Dropdown Container */}
      <div className={dropdownClassName} ref={dropdownRef}>
        {/* Search Input */}
        <input
          ref={inputRef}
          type="text"
          className="barangay-dropdown__search"
          placeholder="Search barangay..."
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search barangays"
        />

        {/* Items List */}
        {filteredBarangays.length > 0 ? (
          <ul
            className="barangay-dropdown__list"
            ref={listRef}
            role="listbox"
          >
            {filteredBarangays.map((barangay, index) => (
              <li
                key={barangay}
                className={`barangay-dropdown__item${
                  barangay === selectedBarangay
                    ? ' barangay-dropdown__item--selected'
                    : ''
                }${
                  index === highlightedIndex
                    ? ' barangay-dropdown__item--highlighted'
                    : ''
                }`}
                onClick={() => handleItemClick(barangay)}
                role="option"
                aria-selected={barangay === selectedBarangay}
              >
                <span className="barangay-dropdown__item-text">
                  {barangay}
                </span>
                {barangay === selectedBarangay && (
                  <svg 
                    className="barangay-dropdown__checkmark" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="barangay-dropdown__empty">
            No barangays found matching "{searchTerm}"
          </div>
        )}
      </div>
    </>
  );
};

export default BarangayDropdown;