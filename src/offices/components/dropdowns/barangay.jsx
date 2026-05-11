import React, { useState, useRef, useEffect } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { BARANGAYS } from '../../../data/barangay';

// ─── BarangayDropdown ─────────────────────────────────────────────────────────
// Floating dropdown that appears when triggered
// Positioned at top right, aligned with header
// ──────────────────────────────────────────────────────────────────────────────

const BarangayDropdown = ({ isOpen, onClose, triggerRef, onSelectBarangay }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBarangay, setSelectedBarangay] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Filter barangays based on search term
  const filteredBarangays = BARANGAYS.filter(barangay =>
    barangay.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target) &&
        triggerRef?.current &&
        !triggerRef.current.contains(e.target)
      ) {
        onClose();
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose, triggerRef]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

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
          onClose();
          setSearchTerm('');
          setHighlightedIndex(-1);
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, highlightedIndex, filteredBarangays, onClose]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('.barangay-dropdown__item');
      if (items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex]);

  const handleSelectBarangay = (barangay) => {
    setSelectedBarangay(barangay);
    onClose();
    setSearchTerm('');
    setHighlightedIndex(-1);
    // Call parent callback with selected barangay
    if (onSelectBarangay) {
      onSelectBarangay(barangay);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="barangay-dropdown" ref={dropdownRef}>
      {/* Search Input */}
      <input
        ref={inputRef}
        type="text"
        className="barangay-dropdown__search"
        placeholder="Search barangay..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setHighlightedIndex(-1);
        }}
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
              onClick={() => handleSelectBarangay(barangay)}
              role="option"
              aria-selected={barangay === selectedBarangay}
            >
              <span className="barangay-dropdown__item-text">
                {barangay}
              </span>
              {barangay === selectedBarangay && (
                <svg className="barangay-dropdown__checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  );
};

export default BarangayDropdown;