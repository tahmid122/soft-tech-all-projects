import React, { useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import "./salesReport.css";
const sales = [
  {
    productId: "DFE12",
    productName: "Rice Cooker",
    soldPrice: 3500,
    soldDate: "2025-08-01",
    paymentType: "Cash",
  },
  {
    productId: "SXF45",
    productName: "Refrigerator",
    soldPrice: 42000,
    soldDate: "2025-08-04",
    paymentType: "Installment",
  },
  {
    productId: "LKM89",
    productName: "LED TV",
    soldPrice: 35000,
    soldDate: "2025-08-09",
    paymentType: "Cash",
  },
];
const SalesReport = () => {
  const [filterValue, setFilterValue] = useState("");
  const [totalSales, setTotalSales] = useState(sales);
  const [sellerProfitWithCash, setSellerProfitWithCash] = useState(0);
  const [sellerProfitWithInstallment, setSellerProfitWithInstallment] =
    useState(0);
  const totalProfit = sellerProfitWithCash + sellerProfitWithInstallment;
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  // common filter
  const handleCommonFilter = (e) => {
    const value = e.target.value;
    // Weekly filter operation
    if (value === "Weekly") {
      setFilterValue("Weekly");
      console.log("Filter by weekly");
    }
    // Monthly filter operation
    else if (value === "Monthly") {
      setFilterValue("Monthly");
      console.log("Filter by monthly");
    } else {
      setFilterValue("Today");
      console.log("Filter by today");
    }
    // Today filter operation
  };
  //   filter by month
  const filterByMonth = (e) => {
    const value = e.target.value; //this is month name
    // filtered based on month
    setFilterValue(value);
  };
  const filterByDate = (e) => {
    const value = e.target.value; //selected date, format: 2025-08-12
    setFilterValue(value);
    // make filter operation by date
  };
  //   filter by range
  const handleFilterByRange = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { startDate, endDate } = data; //start and end date, format:2025-08-12
    setFilterValue(`${startDate} to ${endDate}`);
    //make filter operation based on range
  };
  // seller cash profit
  useEffect(() => {
    const totalAmountOfSellerProfitWithCash = totalSales.reduce(
      (sum, detail) => {
        if (detail.paymentType === "Cash") {
          const percentagePrice = (detail.soldPrice * 12) / 100;
          return sum + percentagePrice;
        }
        return sum + 0;
      },
      0
    );
    setSellerProfitWithCash(totalAmountOfSellerProfitWithCash);
  }, [totalSales]);
  //seller installment profit
  useEffect(() => {
    const totalAmountOfSellerProfitWithInstallment = totalSales.reduce(
      (sum, detail) => {
        if (detail.paymentType === "Installment") {
          const percentagePrice = (detail.soldPrice * 10) / 100;
          return sum + percentagePrice;
        }
        return sum + 0;
      },
      0
    );
    setSellerProfitWithInstallment(totalAmountOfSellerProfitWithInstallment);
  }, [totalSales]);
  return (
    <div id="salesReport">
      <h1>Sales Report</h1>
      <div className="salesReportMainContainer">
        {/* filter options */}
        <div className="filterContainer">
          <div className="singleFilter">
            <h4>Filter By</h4>
            <select onChange={handleCommonFilter} name="defaultFilter">
              <option value="" style={{ display: "none" }}>
                Select a filter
              </option>
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
              <option value="Today">Today</option>
            </select>
          </div>
          <div className="singleFilter">
            <h4>Filter By Month</h4>
            <select onChange={filterByMonth} name="filterByMonth">
              <option value="" style={{ display: "none" }}>
                Select a month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="singleFilter">
            <h4>Filter By Date</h4>
            <input onChange={filterByDate} type="date" name="date" />
          </div>
          <div className="singleFilter">
            <h4>Filter By Date Range</h4>
            <div>
              <form onSubmit={handleFilterByRange} action="" className="range">
                <div>
                  <span>From</span>
                  <input type="date" name="startDate" required />
                </div>
                <div>
                  <span>To</span>
                  <input type="date" name="endDate" required />
                </div>
                <button
                  type="submit"
                  style={{ fontSize: "14px" }}
                  className="btn"
                >
                  Filter by range
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="filterTable">
          <div>
            <button onClick={reactToPrintFn} className="btn">
              Download Report
            </button>
          </div>
          <div ref={contentRef} className="contentRef">
            <div className="filterTableTop">
              <div>
                <h2>Sales report of {filterValue}</h2>
              </div>
              <div>
                <h3>Total Sales: {sales?.length}</h3>
                <h3>Total Profit: {totalProfit} TK</h3>
              </div>
            </div>
            <table id="filterTableTable">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Sold Date</th>
                  <th>Sold Price</th>
                  <th>Payment Type</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                {totalSales?.map((sale, index) => (
                  <tr key={index}>
                    <td>{sale?.productId}</td>
                    <td>{sale?.productName}</td>
                    <td>{sale?.soldDate}</td>
                    <td>{sale?.soldPrice}</td>
                    <td>{sale?.paymentType}</td>
                    <td>
                      {sale?.paymentType === "Cash"
                        ? (sale?.soldPrice * 12) / 100
                        : (sale?.soldPrice * 10) / 100}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
