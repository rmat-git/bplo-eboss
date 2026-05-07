import { MdArrowOutward, } from 'react-icons/md';

const RequirementCard = ({ title, stepNumber, items = [], buttonLabel, buttonAction, onButtonClick }) => {
  // Ensure items is always an array
  const itemsList = Array.isArray(items) ? items : [];

  return (
    <div className="requirement-card fade-in visible">
      <div className="requirement-card__header">
        <div className="requirement-card__header-left">
          <span className="requirement-card__step-tag">Step {stepNumber}</span>
          <span className="requirement-card__title">{title}</span>
        </div>
      </div>
      <div className="requirement-card__content">
        <div className="requirement-card__divider" />
        <ul className="requirement-card__list">
          {itemsList.map((item, i) => {
            // Handle string items (simple text)
            if (typeof item === 'string') {
              return (
                <li key={i} className="requirement-card__list-item">
                  <span>{item}</span>
                </li>
              );
            }

            // Handle heading/action items (top-level › with indented link below)
            if (item && item.heading && item.action && item.link) {
              return (
                <li key={i} className="requirement-card__list-item--heading">
                  <div className="requirement-card__heading">
                    {item.heading}
                  </div>
                  <div className="requirement-card__action">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="requirement-card__action-link"
                    >
                      {item.action}
                      <MdArrowOutward className="requirement-card__action-icon" />
                    </a>
                  </div>
                </li>
              );
            }

            // Handle label items with sub-items
            if (item && item.label) {
              return (
                <li key={i} className="requirement-card__list-item">
                  <span>
                    <div className="requirement-card__item-label">{item.label}</div>
                    {Array.isArray(item.sub) && item.sub.length > 0 && (
                      <ul className="requirement-card__sub-list">
                        {item.sub.map((s, j) => (
                          <li key={j} className="requirement-card__sub-item">
                            {typeof s === 'string' ? (
                              s
                            ) : s.action && s.link ? (
                              // Handle action items (with link)
                              <>
                                <div className="requirement-card__sub-heading">{s.label}</div>
                                <a
                                  href={s.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="requirement-card__sub-action-link"
                                >
                                  {s.action}
                                  <MdArrowOutward className="requirement-card__sub-action-icon" />
                                </a>
                              </>
                            ) : (
                              // Handle simple text items
                              <>
                                {s.label}
                                {s.link && (
                                  <a
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="requirement-card__sub-link"
                                  >
                                    {' '}
                                    ↗
                                  </a>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </span>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>

      {/* Button for Step 2 */}
      {buttonLabel && buttonAction && (
        <div className="requirement-card__footer">
          <button
            className="requirement-card__button"
            onClick={() => onButtonClick?.(buttonAction)}
            aria-label={buttonLabel}
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
};

export default RequirementCard;