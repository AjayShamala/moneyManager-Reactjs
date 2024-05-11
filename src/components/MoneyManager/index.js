import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput,
    amountInput,
    optionId: transactionTypeOptions[0].optionId,
  }
  deleteButton = id => {
    const {transactionList} = this.state
    const filteredTransaction = transactionList.filter(
      each => id !== each.id,
    )
    this.setState({transactionList: filteredTransaction})
  }
  
  onAddClickEvent = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const transactionApplication = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = transactionApplication
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(previous => ({
      transactionList: [...previous.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }
  onChangetitleInput = event => {
    this.setState({titleInput: event.target.value})
  }
  onChangeamountInput = event => {
    this.setState({amountInput: event.target.value})
  }
  onChangetransactionOption = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }
  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expensesAmount += each.amount
      }
    })
    return expensesAmount
  }
  getTotalBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let expensesAmount = 0
    let incomeAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      } else {
        expensesAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }
  render() {
    const {titleInput, amountInput, optionId, transactionList} =this.state
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    const balanceAmount = this.getTotalBalance()
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your{' '}
            <span className="span-container">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          expensesAmount={expensesAmount}
          incomeAmount={incomeAmount}
        />
        <div className="container">
          <div className="card">
            <h1 className="head">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onAddClickEvent}>
              <label htmlFor="labelId" className="label-container">
                TITLE
              </label>
              <input
                type="text"
                id="labelId"
                value={titleInput}
                onChange={this.onChangetitleInput}
                className="input-container"
              />
              <label htmlFor="amountId" className="label-container">
                AMOUNT
              </label>
              <input
                type="text"
                value={amountInput}
                id="amountId"
                onChange={this.onChangeamountInput}
                className="input-container"
              />
              <label htmlFor="typeId" className="label-container">
                TYPE
              </label>
              <select
                className="select-container"
                id="typeId"
                onChange={this.onChangetransactionOption}
                value={optionId}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="containers">
            <h1 className="heads">History</h1>
            <ul className="unorder-balance">
              <li className="list-container">
                <p className="balance-heading">Title</p>
                <p className="balance-heading">Amount</p>
                <p className="balance-heading">Type</p>
              </li>
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  moneyManagers={each}
                  deleteButton={this.deleteButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
