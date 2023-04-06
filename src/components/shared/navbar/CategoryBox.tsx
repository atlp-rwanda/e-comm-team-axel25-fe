import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';
import { IconType } from 'react-icons';
import { mergeClassNames } from '../../../lib';

type CategoryBoxProps = {
  label: string;
  icon: IconType;
  selected?: boolean;
};

type QueryParams = {
  category?: string;
  // other query parameters
};

export function CategoryBox({ label, icon: Icon, selected }: CategoryBoxProps) {
  // get the navigate function from react-router-dom which allows us to navigate to a new URL
  const navigate = useNavigate();
  // get the current location from react-router-dom
  const location = useLocation();

  const handleClick = useCallback(() => {
    // get the current query parameters from the URL
    const searchParams = new URLSearchParams(location.search);
    const currentQuery = qs.parse(searchParams.toString());

    const newQuery: QueryParams = { ...currentQuery, category: label };

    // remove the category parameter if it already exists in the query
    if (searchParams.get('category') === label) delete newQuery.category;

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: newQuery,
      },
      { skipNull: true },
    );

    navigate(url);
  }, [label, navigate, location.search]);

  const buttonClassNames = mergeClassNames({
    'flex flex-col items-center justify-center gap-2 p-2 border-b-2 transition min-w-max':
      true,
    'hover:text-primary border-transparent text-neutral-500 dark:text-white dark:hover:text-primary':
      !selected,
    'border-b-primary text-primary': !!selected,
  });

  return (
    <button type="button" onClick={handleClick} className={buttonClassNames}>
      <Icon className="text-2xl lg:text-base" />
      <div className="hidden text-sm font-medium lg:block">{label}</div>
    </button>
  );
}

CategoryBox.defaultProps = {
  selected: false,
};
