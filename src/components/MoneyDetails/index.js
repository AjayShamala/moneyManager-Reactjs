import './index.css'
const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="container">
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <p className="para">Your Balance</p>
        <br />
        <p className="para1" data-testid="balanceAmount">RS {balanceAmount}</p>
      </div>
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          
          className="image"
        />
        <p className="para">Your Income</p>
        <br />
        <p data-testid="incomeAmount" className="para1">RS {incomeAmount}</p>
      </div>
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
         
          className="image"
        />
        <p className="para">Your Expenses</p>
        <br />
        <p className="para1" data-testid="expensesAmount">RS {expensesAmount}</p>
      </div>
    </div>
  )
}
export default MoneyDetails
