import { Icon } from '@conekta/frontino-ui/Icon';
import classNames from 'classnames';
import { Children, cloneElement } from 'react';

const BreadcrumbItem = ({ isActive = false, children }) => (
  <div className={classNames('breadcrumbs-item', { isActive })}>{children}</div>
);

const Breadcrumbs = ({ children }) => {
  const arrayChildren = Children.toArray(children);
  return (
    <div className="breadcrumbs" aria-label="breadcrumb">
      {Children.map(arrayChildren, (child, index) => {
        const isLast = index === arrayChildren.length - 1;

        return (
          <>
            {cloneElement(child)}
            {!isLast && <Icon className="breadcrumbs-separator">chevron_right</Icon>}
          </>
        );
      })}
    </div>
  );
};

export { Breadcrumbs, BreadcrumbItem };
