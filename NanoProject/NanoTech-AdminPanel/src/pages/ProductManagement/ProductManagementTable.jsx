import React, { useEffect, useState } from "react";
// this is dummy data. Its should be fetched from database
const lowStockData = [
  {
    sellerId: "S001",
    shopName: "Tech World",
    shopLocation: "Dhaka",
    productName: "Wireless Mouse",
    providedQty: 100,
    soldQty: 92,
    remainingQty: 8,
  },
  {
    sellerId: "S001",
    shopName: "Tech World",
    shopLocation: "Dhaka",
    productName: "Mechanical Keyboard",
    providedQty: 50,
    soldQty: 45,
    remainingQty: 5,
  },
  {
    sellerId: "S002",
    shopName: "Home Essentials",
    shopLocation: "Chittagong",
    productName: "Electric Kettle",
    providedQty: 60,
    soldQty: 52,
    remainingQty: 8,
  },
  {
    sellerId: "S002",
    shopName: "Home Essentials",
    shopLocation: "Chittagong",
    productName: "Rice Cooker",
    providedQty: 70,
    soldQty: 65,
    remainingQty: 5,
  },
  {
    sellerId: "S003",
    shopName: "Fashion Hub",
    shopLocation: "Sylhet",
    productName: "Leather Wallet",
    providedQty: 80,
    soldQty: 75,
    remainingQty: 5,
  },
  {
    sellerId: "S003",
    shopName: "Fashion Hub",
    shopLocation: "Sylhet",
    productName: "Sneakers",
    providedQty: 40,
    soldQty: 37,
    remainingQty: 3,
  },
  {
    sellerId: "S004",
    shopName: "Gadget Arena",
    shopLocation: "Rajshahi",
    productName: "Smartwatch",
    providedQty: 60,
    soldQty: 59,
    remainingQty: 1,
  },
  {
    sellerId: "S004",
    shopName: "Gadget Arena",
    shopLocation: "Rajshahi",
    productName: "Bluetooth Speaker",
    providedQty: 30,
    soldQty: 28,
    remainingQty: 2,
  },
  {
    sellerId: "S005",
    shopName: "Kitchen King",
    shopLocation: "Khulna",
    productName: "Non-stick Pan",
    providedQty: 40,
    soldQty: 36,
    remainingQty: 4,
  },
  {
    sellerId: "S005",
    shopName: "Kitchen King",
    shopLocation: "Khulna",
    productName: "Pressure Cooker",
    providedQty: 25,
    soldQty: 22,
    remainingQty: 3,
  },
];
const assignProducts = [
  {
    shopId: "SHOP-1",
    shopName: "Tech World",
    shopLocation: "Dhaka",
    product: "ID-1, Rice Cooker",
    quantity: 5,
    productIds: ["ID-1", "ID-2", "ID-3"],
    assignDate: "12/12/2025",
  },
  {
    shopId: "SHOP-2",
    shopName: "Tech World 2",
    shopLocation: "Dhaka 2",
    product: "ID-1, Rice Cooker",
    quantity: 3,
    productIds: ["ID-4", "ID-5", "ID-6"],
    assignDate: "12/12/2025",
  },
  {
    shopId: "SHOP-2",
    shopName: "Tech World 2",
    shopLocation: "Dhaka 2",
    product: "ID-2, Curry Cooker",
    quantity: 3,
    productIds: ["ID-8", "ID-9", "ID-10"],
    assignDate: "12/12/2025",
  },
  {
    shopId: "SHOP-3",
    shopName: "Tech World 3",
    shopLocation: "Dhaka 3",
    product: "ID-1, Rice Cooker",
    quantity: 5,
    productIds: ["ID-7", "ID-8", "ID-9"],
    assignDate: "12/12/2025",
  },
];
const ProductManagementTable = () => {
  // handle search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [salesPoint, setSalesPoint] = useState([]);
  const [shopData, setShopData] = useState({ shopName: "", shopLocation: "" });
  const handleSearch = (e) => {
    e.preventDefault();
    setSalesPoint(assignProducts.filter((data) => data.shopId === searchQuery));
  };
  useEffect(() => {
    salesPoint.forEach((data) =>
      setShopData({ shopName: data.shopName, shopLocation: data.shopLocation })
    );
  }, [salesPoint]);

  return (
    // sales point section
    <section id="salesPoint">
      <h2>Shops</h2>
      <div className="salesPointContainer">
        {/* top section */}
        <div className="salesPointTop">
          <div>
            <form onSubmit={handleSearch}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Enter Shop ID"
              />
              <button type="submit">Search</button>
            </form>
          </div>
          {shopData && (
            <div className="flex" style={{ gap: "10px" }}>
              <div>
                <b>Shop: </b>
                {shopData.shopName}
              </div>
              <div>
                <b>Address: </b>
                {shopData.shopLocation}
              </div>
            </div>
          )}
        </div>
        <div id="salesPointTableContainer">
          <table>
            <thead>
              <tr>
                <th>Shop ID</th>
                <th>Shop Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Product Ids</th>
                <th>Assign Date</th>
              </tr>
            </thead>
            <tbody>
              {salesPoint?.map((point, index) => {
                console.log(point?.productIds);
                return (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: `${point.remainingQty <= 5 && "red"}`,
                    }}
                  >
                    <td>{point?.shopId}</td>
                    <td>{point?.shopName}</td>
                    <td>{point?.product}</td>
                    <td>{point?.quantity}</td>
                    <td>{point?.productIds?.join(", ")}</td>
                    <td>{point?.assignDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductManagementTable;
