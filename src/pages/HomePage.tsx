import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <p className="home-eyebrow">
          Smarter purchase decisions start here.
        </p>

        <h1>
          Know whether you can
          <span> truly afford it.</span>
        </h1>

        <p className="home-description">
          Evaluate a purchase using your income, expenses,
          savings, emergency fund, and long-term opportunity
          cost before you spend.
        </p>

        <div className="home-actions">
          <Link
            to="/calculator"
            className="primary-button"
          >
            Check Affordability
          </Link>

          <Link
            to="/faq"
            className="secondary-button"
          >
            How It Works
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;