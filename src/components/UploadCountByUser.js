import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getUploadCountByUserUrl } from "../http/VideoServiceUrls";

// Register the required components
ChartJS.register(
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UploadCountByUser = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(getUploadCountByUserUrl())
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(response => {
        console.log(response);
        const users = Object.keys(response);
        const counts = Object.values(response);

        setData({
          labels: users,
          datasets: [{
            label: 'Videos Uploaded',
            data: counts,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        });
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  // Inline styles
  const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f8f9fa', // Light background for contrast
  };

  const chartBoxStyle = {
    width: '80%', // Width of the box containing the chart
    height: '70%', // Height of the box containing the chart
    backgroundColor: '#ffffff', // White background
    border: '1px solid #ced4da', // Light gray border
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    padding: '20px', // Inner padding
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'User Ids' // Label for the x-axis
        }
      },
      y: {
        title: {
          display: true,
          text: 'Total Number Of Uploads' // Label for the y-axis
        },
        beginAtZero: true // Ensures that the y-axis starts from 0
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            // Format the tooltip label as needed
            return `${tooltipItem.raw} likes`;
          }
        }
      }
    }
  };

  return (
    <div style={chartContainerStyle}>
      <div style={chartBoxStyle}>
        {data ? <Bar data={data} options={options} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default UploadCountByUser;
