import React from 'react';
import { PrimaryBtn, ToggleBtn, UrlBtn } from './interface/buttons';
import ThemeToggle from './interaction/themeToggle';

const Preview = () => {
  return (
    <div className="previewContainer">
      <PrimaryBtn text="Primary Button" />
      <UrlBtn text="Url Button" />
      <ThemeToggle/>
    </div>
  );
}

export default Preview;
