export const PrimaryBtn = (props) => {
  const { name, className = "btn", style } = props;
  const primaryClass = `btn-primary ${className}`.trim();

  return (
    <button className={primaryClass} style={style}>
      {name}
    </button>
  );
};

export const UrlBtn = (props) => {
  const { name, url, className = "btn", style } = props;
  const urlClass = `btn-url ${className}`.trim();
  return (
    <a href={url}>
      <button className={urlClass} style={style}>{name}</button>
    </a>
  );
};
