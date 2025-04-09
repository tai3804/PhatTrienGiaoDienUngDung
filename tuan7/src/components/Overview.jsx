import React, { useEffect, useState } from 'react';
import './Overview.css'; // Tạo file CSS riêng cho component

export default function Overview() {
  const [metrics, setMetrics] = useState({
    turnover: { value: 0, change: 0 },
    profit: { value: 0, change: 0 },
    newCustomer: { value: 0, change: 0 }
  });

  useEffect(() => {
    fetch('http://localhost:3001/metrics')
      .then((response) => {return response.json()})
      .then((data) => {
        
        setMetrics({
          turnover: data.overview.turnover || { value: 0, change: 0 },
          profit: data.overview.profit || { value: 0, change: 0 },
          newCustomer: data.overview.new_customer || { value: 0, change: 0 }
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div id="overview">
      <div className="overview-title">
        <img src="src/imgs/Squares four 1.png" alt="" />
        <h2>Overview</h2>
      </div>
      <div className="metrics-grid">
        <div className="metric-card turnover">
          <h3>Turnover</h3>
          <div className="metric-value">{formatCurrency(metrics.turnover.value)}</div>
            <b className={`metric-change ${metrics.turnover.change >= 0 ? 'positive' : 'negative'}`}> 
              {metrics.turnover.change >= 0 ? '+' : ''}{metrics.turnover.change}
            </b> % period of change
          <button>
            <img src="src/imgs/Button 1509.png" alt="arrow icon" />
          </button>
        </div>

        <div className="metric-card profit">
          <h3>Profit</h3>
          <div className="metric-value">{formatCurrency(metrics.profit.value)}</div>
          <b className={`metric-change ${metrics.profit.change >= 0 ? 'positive' : 'negative'}`}>
            {metrics.profit.change >= 0 ? '+' : ''}{metrics.profit.change}
          </b> % period of change
          <button>
            <img src="src/imgs/Button 1529.png" alt="arrow icon" />
          </button>
        </div>

        <div className="metric-card customer">
          <h3>New customer</h3>
          <div className="metric-value">{metrics.newCustomer.value}</div>
          <b className={`metric-change ${metrics.newCustomer.change >= 0 ? 'positive' : 'negative'}`}>
            {metrics.newCustomer.change >= 0 ? '+' : ''}{metrics.newCustomer.change}
          </b> % period of change
          <button>
            <img src="src/imgs/Button 1530.png" alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
}