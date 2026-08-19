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

      <section
        className="how-it-works-section"
        aria-labelledby="how-it-works-title"
      >
        <div className="how-it-works-header">
          <p className="section-eyebrow">
            How It Works
          </p>

          <h2 id="how-it-works-title">
            Look beyond the price tag.
          </h2>

          <p className="section-description">
            The calculator evaluates a purchase through
            multiple financial guardrails instead of relying
            on a simple bank-balance check.
          </p>
        </div>

        <div className="how-it-works-grid">
          <article className="how-it-works-card">
            <p className="step-number">
              01
            </p>

            <h3>
              Protect your emergency fund.
            </h3>

            <p>
              See whether the purchase would leave enough
              liquid savings to cover several months of
              your recorded baseline expenses.
            </p>
          </article>

          <article className="how-it-works-card">
            <p className="step-number">
              02
            </p>

            <h3>
              Check your monthly budget.
            </h3>

            <p>
              Compare the purchase against your income,
              expenses, and discretionary spending capacity
              to see whether it fits without disrupting
              your financial priorities.
            </p>
          </article>

          <article className="how-it-works-card">
            <p className="step-number">
              03
            </p>

            <h3>
              Understand the opportunity cost.
            </h3>

            <p>
              See what the same money could potentially
              become over time if it were invested instead
              of spent today.
            </p>
          </article>
        </div>
      </section>

      <section
        className="benefits-section"
        aria-labelledby="benefits-title"
      >
        <div className="benefits-header">
          <p className="section-eyebrow">
            Why This Matters
          </p>

          <h2 id="benefits-title">
            A purchase can fit your bank account
            and still hurt your financial plan.
          </h2>

          <p className="section-description">
            Affordability is about more than having enough
            money available today. The calculator helps you
            understand how a purchase affects both your
            current stability and your future options.
          </p>
        </div>

        <div className="benefits-grid">
          <article className="benefit-card">
            <p className="benefit-label">
              Better Context
            </p>

            <h3>
              Make decisions using your full financial picture.
            </h3>

            <p>
              Consider your income, recurring expenses,
              savings, and other priorities together instead
              of judging a purchase only by your current
              account balance.
            </p>
          </article>

          <article className="benefit-card">
            <p className="benefit-label">
              More Stability
            </p>

            <h3>
              Avoid sacrificing your financial safety net.
            </h3>

            <p>
              Understand whether a purchase would weaken
              the emergency savings you rely on for
              unexpected costs or changes in income.
            </p>
          </article>

          <article className="benefit-card">
            <p className="benefit-label">
              Long-Term Awareness
            </p>

            <h3>
              See the tradeoff before you spend.
            </h3>

            <p>
              Compare the immediate purchase with the
              potential long-term value of keeping or
              investing the same money instead.
            </p>
          </article>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="final-cta-content">
          <p className="section-eyebrow">
            Make a Smarter Decision
          </p>

          <h2>
            Ready to see what you can truly afford?
          </h2>

          <p className="final-cta-description">
            Evaluate your purchase using your complete financial
            picture—not just the money available in your account
            today.
          </p>

          <Link
            to="/calculator"
            className="primary-button"
          >
            Check Affordability
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;