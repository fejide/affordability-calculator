import { useState } from "react";

function CalculatorPage() {
  const [purchaseName, setPurchaseName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");

  const [currentSavings, setCurrentSavings] = useState("");
  const [emergencyFundMonths, setEmergencyFundMonths] =
    useState("6");

  const monthlyRemaining =
    Number(monthlyIncome || 0) -
    Number(monthlyExpenses || 0);

  const emergencyFundRequired =
    Number(monthlyExpenses || 0) *
    Number(emergencyFundMonths);

  const emergencyFundDifference =
    Number(currentSavings || 0) -
    emergencyFundRequired;

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }

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

            <p className="calculator-panel-description">
              Add your monthly take-home income and recurring expenses.
            </p>

            <div className="calculator-form">
              <div className="calculator-form-field">
                <label htmlFor="monthly-income">
                  Monthly income
                </label>

                <div className="currency-input">
                  <span aria-hidden="true">$</span>

                  <input
                    id="monthly-income"
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={monthlyIncome}
                    onChange={(event) =>
                      setMonthlyIncome(event.target.value)
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="calculator-form-field">
                <label htmlFor="monthly-expenses">
                  Monthly expenses
                </label>

                <div className="currency-input">
                  <span aria-hidden="true">$</span>

                  <input
                    id="monthly-expenses"
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={monthlyExpenses}
                    onChange={(event) =>
                      setMonthlyExpenses(event.target.value)
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="cash-flow-summary">
              <div>
                <p className="cash-flow-summary-label">
                  Monthly Remaining
                </p>

                <p className="cash-flow-summary-detail">
                  Income minus recurring expenses
                </p>
              </div>

              <strong
                className={
                  monthlyRemaining < 0
                    ? "cash-flow-negative"
                    : "cash-flow-positive"
                }
              >
                {formatCurrency(monthlyRemaining)}
              </strong>
            </div>
          </section>

          <section className="calculator-panel">
            <p className="calculator-panel-label">
              Savings
            </p>

            <h3>
              What financial cushion do you have?
            </h3>

            <p className="calculator-panel-description">
              Add your current liquid savings and choose how many
              months of expenses you want to protect.
            </p>

            <div className="calculator-form">
              <div className="calculator-form-field">
                <label htmlFor="current-savings">
                  Current savings
                </label>

                <div className="currency-input">
                  <span aria-hidden="true">$</span>

                  <input
                    id="current-savings"
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={currentSavings}
                    onChange={(event) =>
                      setCurrentSavings(event.target.value)
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="calculator-form-field">
                <label htmlFor="emergency-fund-months">
                  Emergency fund target
                </label>

                <select
                  id="emergency-fund-months"
                  value={emergencyFundMonths}
                  onChange={(event) =>
                    setEmergencyFundMonths(event.target.value)
                  }
                >
                  <option value="3">3 months</option>
                  <option value="4">4 months</option>
                  <option value="5">5 months</option>
                  <option value="6">6 months</option>
                </select>
              </div>
            </div>

            <div className="emergency-fund-summary">
  <div className="emergency-fund-summary-item">
    <div className="emergency-fund-summary-text">
      <p className="emergency-fund-summary-label">
        Emergency Fund Required
      </p>

      <p className="emergency-fund-summary-detail">
        {emergencyFundMonths} months of recurring expenses
      </p>
    </div>

    <strong className="emergency-fund-summary-value">
      {formatCurrency(emergencyFundRequired)}
    </strong>
  </div>

  <div className="emergency-fund-summary-item">
    <div className="emergency-fund-summary-text">
      <p className="emergency-fund-summary-label">
        Savings Above Target
      </p>

      <p className="emergency-fund-summary-detail">
        Current savings minus protected emergency fund
      </p>
    </div>

    <strong
      className={`emergency-fund-summary-value ${
        emergencyFundDifference < 0
          ? "savings-above-target-negative"
          : "savings-above-target-positive"
      }`}
    >
      {formatCurrency(emergencyFundDifference)}
    </strong>
  </div>
</div>
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