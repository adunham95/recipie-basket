import { twMerge } from 'tailwind-merge';

/* eslint-disable-next-line */
export interface CardProps {
  cardTitle?: string;
  cardSubTitle?: string;
  children?: React.ReactNode;
  img?: string;
  imgAlt?: string;
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  bodyClassName?: string;
  containerClassName?: string;
  buttons?: Array<{
    id: string;
    children: React.ReactNode;
    ariaLabel: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    buttonType?: 'button' | 'submit' | 'reset';
  }>;
}

export function Card(props: CardProps) {
  const {
    cardTitle,
    cardSubTitle,
    children,
    img,
    imgAlt,
    className = '',
    titleClassName = '',
    subTitleClassName = '',
    bodyClassName = '',
    containerClassName = '',
    buttons = [],
  } = props;
  return (
    <div
      className={twMerge(
        `shadow shadow-theme-shadow sm:overflow-hidden sm:rounded-md`,
        containerClassName,
      )}
    >
      <div className={twMerge('bg-theme-surface text-theme-body', className)}>
        {img && imgAlt && (
          <img className="rounded-t w-full" src={img} alt={imgAlt} />
        )}
        <div className={twMerge('p-6', bodyClassName)}>
          {cardTitle && (
            <h2
              className={twMerge(
                'mb-1 text-lg font-medium leading-6 text-theme-text-heading',
                titleClassName,
              )}
            >
              {cardTitle}
            </h2>
          )}
          {cardSubTitle && (
            <p
              className={twMerge(
                'mb-1 text-sm text-theme-text-subheading',
                subTitleClassName,
              )}
            >
              {cardSubTitle}
            </p>
          )}
          {children}
        </div>
        {buttons.length > 0 && (
          <div className="bg-theme-surface-dark px-4 py-3 flex flex-row-reverse sm:px-6">
            {buttons.map((button) => (
              <CardButton key={button.id} {...button} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface ICardButton {
  children: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
  buttonType?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const CardButton = ({
  children,
  ariaLabel,
  onClick,
  buttonType = 'button',
  className = '',
  disabled = false,
}: ICardButton) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      type={buttonType}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Card;
