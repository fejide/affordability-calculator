import { useEffect, useState } from "react";

function CalculatorPage() {

  // Step 7G: Restore previously entered values from this browser.

  const [savedInputs] = useState<Record<string, string>>(() => {

    try {

      const stored = localStorage.getItem("affordability-calculator-inputs");

      const parsed: unknown = stored ? JSON.parse(stored) : {};

      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

      return Object.fromEntries(

        Object.entries(parsed).filter((entry): entry is [string, string] =>

          typeof entry[1] === "string"

        )

      );

    } catch {

      return {};

    }

  });

  const [purchaseName, setPurchaseName] = useState(savedInputs.purchaseName ?? "");

  const [purchasePrice, setPurchasePrice] = useState(savedInputs.purchasePrice ?? "");

  const [monthlyIncome, setMonthlyIncome] = useState(savedInputs.monthlyIncome ?? "");

  const [monthlyExpenses, setMonthlyExpenses] = useState(savedInputs.monthlyExpenses ?? "");

  const [currentSavings, setCurrentSavings] = useState(savedInputs.currentSavings ?? "");

  const [emergencyFundMonths, setEmergencyFundMonths] = useState(

    savedInputs.emergencyFundMonths ?? "6"

  );

  // =========================================================

  // STEP 7G PART 2 — INVESTMENT ASSUMPTION STATE

  // =========================================================

  // Annual investment return, expressed as a percentage.

  const [annualReturn, setAnnualReturn] = useState(

    savedInputs.annualReturn ?? "7"

  );

  // Investment period, expressed in years.

  const [investmentYears, setInvestmentYears] = useState(

    savedInputs.investmentYears ?? "10"

  );

  // Step 7G: Save inputs automatically whenever they change.

  useEffect(() => {

    try {

      localStorage.setItem(

        "affordability-calculator-inputs",

        JSON.stringify({

          purchaseName,

          purchasePrice,

          monthlyIncome,

          monthlyExpenses,

          currentSavings,

          emergencyFundMonths,

          annualReturn,

          investmentYears,

        })

      );

    } catch (error) {

      console.error("Unable to save calculator inputs:", error);

    }

  }, [

    purchaseName,

    purchasePrice,

    monthlyIncome,

    monthlyExpenses,

    currentSavings,

    emergencyFundMonths,

    annualReturn,

    investmentYears,

  ]);

  const monthlyRemaining =

    Number(monthlyIncome || 0) -

    Number(monthlyExpenses || 0);

  const emergencyFundRequired =

    Number(monthlyExpenses || 0) *

    Number(emergencyFundMonths);

  const emergencyFundDifference =

    Number(currentSavings || 0) -

    emergencyFundRequired;

  const purchasePriceNumber =

    Number(purchasePrice || 0);

  const currentSavingsNumber =

    Number(currentSavings || 0);

  const savingsAfterPurchase =

    currentSavingsNumber - purchasePriceNumber;

  const savingsAboveTargetAfterPurchase =

    savingsAfterPurchase - emergencyFundRequired;

  const usesEmergencyFund =

    purchasePriceNumber > 0 &&

    savingsAfterPurchase < emergencyFundRequired;

  const purchaseMonthsOfCashFlow =

    monthlyRemaining > 0

      ? purchasePriceNumber / monthlyRemaining

      : 0;

  // Step 7F: Illustrative opportunity-cost projection.

  const assumedAnnualReturn = Number(annualReturn) / 100;

  const opportunityCostYears = Number(investmentYears);

  const opportunityCostFutureValue =

    purchasePriceNumber *

    Math.pow(1 + assumedAnnualReturn, opportunityCostYears);

  const opportunityCostGrowth =

    opportunityCostFutureValue - purchasePriceNumber;

const hasPurchasePrice = purchasePriceNumber > 0;

  const hasPositiveCashFlow = monthlyRemaining > 0;

  let affordabilityStatus = "Enter your numbers";

  let affordabilityMessage =

    "Add your purchase price, monthly finances, and savings to see your result.";

  if (hasPurchasePrice) {

    if (!hasPositiveCashFlow) {

      affordabilityStatus = "Not affordable right now";

      affordabilityMessage =

        "Your recurring expenses are using all or more of your monthly income. Improving your monthly cash flow should come before making this purchase.";

    } else if (usesEmergencyFund) {

      affordabilityStatus = "High financial impact";

      affordabilityMessage =

        "This purchase would reduce your savings below the emergency-fund target you selected.";

    } else if (purchaseMonthsOfCashFlow > 3) {

      affordabilityStatus = "Proceed with caution";

      affordabilityMessage =

        "You can make this purchase without touching your protected emergency fund, but it represents more than three months of your current remaining cash flow.";

    } else {

      affordabilityStatus = "Within your current plan";

      affordabilityMessage =

        "Based on the information entered, this purchase stays above your protected emergency fund and fits within your current positive cash flow.";

    }

  }

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

          <section className="calculator-panel calculator-result-panel">

            <p className="calculator-panel-label">Result</p>

            <h3>{affordabilityStatus}</h3>

            <p className="calculator-result-message">{affordabilityMessage}</p>

            {hasPurchasePrice && (

              <div className="calculator-result-breakdown">

                <div className="calculator-result-row">

                  <div>

                    <p className="calculator-result-row-label">Savings After Purchase</p>

                    <p className="calculator-result-row-detail">

                      Current savings minus purchase price

                    </p>

                  </div>

                  <strong>{formatCurrency(savingsAfterPurchase)}</strong>

                </div>

                <div className="calculator-result-row">

                  <div>

                    <p className="calculator-result-row-label">Emergency Fund Remaining</p>

                    <p className="calculator-result-row-detail">

                      Savings left above your protected target

                    </p>

                  </div>

                  <strong>{formatCurrency(savingsAboveTargetAfterPurchase)}</strong>

                </div>

                <div className="calculator-result-row">

                  <div>

                    <p className="calculator-result-row-label">Cash-Flow Equivalent</p>

                    <p className="calculator-result-row-detail">

                      Purchase price compared with monthly remaining cash flow

                    </p>

                  </div>

                  <strong>

                    {hasPositiveCashFlow

                      ? `${purchaseMonthsOfCashFlow.toFixed(1)} months`

                      : "Unavailable"}

                  </strong>

                </div>

              </div>

            )}

          </section>

        </div>

        <section

          className="opportunity-cost-section"

          aria-labelledby="opportunity-cost-title"

        >

          <p className="section-eyebrow">Long-Term Impact</p>

          <h2 id="opportunity-cost-title">What could this money become?</h2>

          <p className="section-description">
            Compare the purchase price with a hypothetical investment over
            {` ${investmentYears || "0"} years`} at an assumed
            {` ${annualReturn || "0"}%`} annual return.
          </p>

          {/* STEP 7F PART 4B — INTERACTIVE INVESTMENT CONTROLS */}
          <div className="opportunity-cost-controls">
            <div className="opportunity-cost-field">
              <label htmlFor="annual-return">Annual investment return</label>
              <div className="opportunity-cost-input">
                <input
                  id="annual-return"
                  type="number"
                  min="0"
                  max="30"
                  step="0.5"
                  inputMode="decimal"
                  value={annualReturn}
                  onChange={(event) => setAnnualReturn(event.target.value)}
                />
                <span aria-hidden="true">%</span>
              </div>
              <p>Hypothetical annual investment return</p>
            </div>

            <div className="opportunity-cost-field">
              <label htmlFor="investment-years">Investment period</label>
              <div className="opportunity-cost-input">
                <input
                  id="investment-years"
                  type="number"
                  min="1"
                  max="50"
                  step="1"
                  inputMode="numeric"
                  value={investmentYears}
                  onChange={(event) => setInvestmentYears(event.target.value)}
                />
                <span aria-hidden="true">years</span>
              </div>
              <p>Number of years the money could remain invested</p>
            </div>
          </div>

          {hasPurchasePrice ? (

            <div className="opportunity-cost-breakdown">

              <div className="opportunity-cost-row">

                <span>Purchase Price</span>

                <strong>{formatCurrency(purchasePriceNumber)}</strong>

              </div>

              <div className="opportunity-cost-row">

                <span>Potential Investment Value</span>

                <strong>{formatCurrency(opportunityCostFutureValue)}</strong>

              </div>

              <div className="opportunity-cost-row">

                <span>Potential Investment Growth</span>

                <strong>{formatCurrency(opportunityCostGrowth)}</strong>

              </div>

            </div>

          ) : (

            <p>Enter a purchase price to see the hypothetical projection.</p>

          )}

          <p className="opportunity-cost-disclaimer">

            Illustration only. Actual investment returns vary; this estimate

            excludes taxes, fees, and inflation and is not a guarantee.

          </p>

        </section>

      </section>

    </main>

  );

}

export default CalculatorPage;
