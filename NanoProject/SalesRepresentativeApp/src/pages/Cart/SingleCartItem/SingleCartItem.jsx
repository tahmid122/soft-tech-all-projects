import { FaXmark } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const SingleCartItem = ({ cartItem, rawTotalProducts }) => {
  const { cartItems, setCartItems } = useCart();
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const addOneMore = (item) => {
    setCartItems((prev) => [
      ...prev,
      {
        ...item,
        id: cartItems.length + 1 * Math.random(),
        paymentType: "",
        payableAmount: 0,
      },
    ]);
  };

  const handleSelectedId = (finderId, selectedId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === finderId ? { ...item, selectedId } : item
      )
    );
  };

  const handleSelectedType = (finderId, selectedType) => {
    if (selectedType === "cash") {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === finderId
            ? {
                ...item,
                paymentType: selectedType,
                payableAmount: item.price,
                dueAmount: 0,
              }
            : item
        )
      );
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === finderId
            ? {
                ...item,
                paymentType: selectedType,
                payableAmount: item.price / 2,
                dueAmount: item.price / 2,
                discountAmount: 0,
              }
            : item
        )
      );
    }
  };

  const handleDiscount = (finderId, discountAmount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === finderId
          ? {
              ...item,
              payableAmount: Math.round(
                item.price - (item.price * parseInt(discountAmount)) / 100
              ),
              discountAmount: Math.round(
                (item.price * parseInt(discountAmount)) / 100
              ),
            }
          : item
      )
    );
  };

  return (
    <tr>
      <td>
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          style={{ width: "60px" }}
        />
      </td>
      <td>৳ {cartItem?.price}</td>
      <td>
        <select
          className="productIdSelect"
          onChange={(e) => handleSelectedId(cartItem?.id, e.target.value)}
          defaultValue=""
        >
          <option value="" hidden>
            Select Product Id
          </option>
          {cartItem?.productId?.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          className="productIdSelect"
          onChange={(e) => handleSelectedType(cartItem?.id, e.target.value)}
          defaultValue={cartItem?.paymentType}
        >
          <option value="" hidden>
            Select Payment Type
          </option>
          <option value="cash">Cash</option>
          {rawTotalProducts > 1500 && (
            <option value="installment">Installment</option>
          )}
        </select>
        {/* discount */}
        {cartItem?.paymentType === "cash" && (
          <select
            className="productIdSelect"
            onChange={(e) => handleDiscount(cartItem?.id, e.target.value)}
            defaultValue={cartItem?.paymentType}
          >
            <option value="0">0%</option>
            <option value="1">1%</option>
            <option value="2">2%</option>
            <option value="3">3%</option>
            <option value="4">4%</option>
            <option value="5">5%</option>
          </select>
        )}
      </td>
      <td>{cartItem?.discountAmount || 0}</td>
      <td>{cartItem?.payableAmount || 0}</td>
      <td>{cartItem?.dueAmount || 0}</td>
      <td>
        <span className="actionTd">
          <button onClick={() => addOneMore(cartItem)} className="btnSmall">
            Add+
          </button>
          <button
            onClick={() => removeFromCart(cartItem?.id)}
            className="deleteCartButton"
          >
            <FaXmark size={16} />
          </button>
        </span>
      </td>
    </tr>
  );
};
export default SingleCartItem;
