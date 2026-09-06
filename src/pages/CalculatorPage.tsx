import { useState } from "react";

function CalculatorPage() {
  const [purchaseName, setPurchaseName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  return (
    <main className="calculator-page">
      <section className="calculator-hero">
        <p className="section-eyebrow">
          Affordability Calculator
        </p>

        <h1>
          Can you afford it
          <span> without hurting your financial plan?</span>
        </h1>

        <p className="calculator-description">
          Enter the purchase you are considering and your current
          financial information. The calculator will evaluate the
          purchase against your monthly budget, emergency savings,
          and long-term financial tradeoffs.
        </p>
      </section>

      <section
        className="calculator-workspace"
        aria-labelledby="calculator-workspace-title"
      >
        <div className="calculator-workspace-header">
          <p className="section-eyebrow">
            Your Financial Picture
          </p>

          <h2 id="calculator-workspace-title">
            Start with the numbers that matter.
          </h2>

          <p className="section-description">
            We’ll use these inputs to determine whether the purchase
            fits your current finances and what giving up that money
            could mean over time.
          </p>
        </div>

        <div className="calculator-workspace-grid">
          <section className="calculator-panel">
            <p className="calculator-panel-label">
              Purchase
            </p>

            <h3>
              What are you considering buying?
            </h3>

            <p className="calculator-panel-description">
              Start with the item and the amount you would need to spend.
            </p>

            <div className="calculator-form">
              <div className="calculator-form-field">
                <label htmlFor="purchase-name">
                  Purchase name
                </label>

                <input
                  id="purchase-name"
                  type="text"
                  value={purchaseName}
                  onChange={(event) =>
                    setPurchaseName(event.target.value)
                  }
                  placeholder="Example: MacBook Pro"
                  autoComplete="off"
                />
              </div>

              <div className="calculator-form-field">
                <label htmlFor="purchase-price">
                  Purchase price
                </label>

                <div className="currency-input">
                  <span aria-hidden="true">$</span>

                  <input
                    id="purchase-price"
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={purchasePrice}
                    onChange={(event) =>
                      setPurchasePrice(event.target.value)
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="calculator-panel">
            <p className="calculator-panel-label">
              Monthly Finances
            </p>

            <h3>
              What does your monthly cash flow look like?
            </h3>

            <p>
              Income and expense inputs will go here.
            </p>
          </section>

          <section className="calculator-panel">
            <p className="calculator-panel-label">
              Savings
            </p>

            <h3>
              What financial cushion do you have?
            </h3>

            <p>
              Savings and emergency-fund inputs will go here.
            </p>
          </section>

          <section className="calculator-panel">
            <p className="calculator-panel-label">
              Result
            </p>

            <h3>
              Your affordability result will appear here.
            </h3>

            <p>
              The final recommendation and financial impact
              breakdown will go here.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default CalculatorPage;