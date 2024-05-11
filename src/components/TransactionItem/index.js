import './index.css'
const TransactionItem = props => {
  const {moneyManagers, deleteButton} = props
  const {title, amount, id, type} = moneyManagers
  const deleteContainer = () => {
    deleteButton(id)
  }
  return (
    <li className="amount-container">
      <p className="para-container">{title}</p>
      <p className="para-container">{amount}</p>
      <p className="para-container">{type}</p>
      <button
        className="button-container"
        data-testid="delete"
        onClick={deleteContainer}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-container"
        />
      </button>
    </li>
  )
}
export default TransactionItem
