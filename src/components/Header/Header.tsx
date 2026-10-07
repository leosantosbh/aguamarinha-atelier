import "./Header.css";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__symbol">
          ☼
        </div>

        <div className="site-header__brand">
          <span className="site-header__title">
            PEQUENAS ESCOLHAS
          </span>

          <span className="site-header__subtitle">
            um oráculo para inspirar os seus dias.
          </span>
        </div>
      </div>
    </header>
  );
}