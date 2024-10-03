export const PrimaryBtn = (props) => {
  const { text, className = "btn", style, icon} = props;
  const primaryClass = `btn-primary ${className}`.trim();

  return (
    <button className={primaryClass} style={style}>
      {text}
    </button>
  );
};

export const UrlBtn = (props) => {
  const { text, url, className = "btn", style } = props;
  const urlClass = `btn-url ${className}`.trim();
  return (
    <a href={url}>
      <button className={urlClass} style={style}>{text}</button>
    </a>
  );
};

export const ToggleBtn = (props) => {
  const { text, className = "btn", style, click} = props;
  const toggleClass = `btn-toggle ${className}`.trim();

  return (
    <button className={toggleClass} style={style} onClick={click}>
      {text}
    </button>
  )
}