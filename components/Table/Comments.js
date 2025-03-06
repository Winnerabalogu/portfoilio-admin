"use client"
import React, { useState } from "react";


const Comment = () => {

    // Default dummy data
    const [data, setData] = useState([
      {
        name: "John Doe",
        email: "john@example.com",
        subject: "Great Service!",
        phone: "+1234567890",
        message: "I really enjoyed the experience, thank you!",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        subject: "Feedback",
        phone: "+0987654321",
        message: "Could improve response time, but overall great!",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        subject: "Feedback",
        phone: "+0987654321",
        message: "Could improve response time, but overall great!",
      },
    ]);
  const [expandedRow, setExpandedRow] = useState(null);

  // Toggle row expansion
  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // Delete entry
  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    
    <div className="table-container">
      <h2>Comments</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((entry, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.subject}</td>
                  <td>{entry.phone}</td>
                  <td>
                    <button onClick={() => toggleExpand(index)}>Expand</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
                {/* Expanded Row */}
                {expandedRow === index && (
                  <tr className="expanded-row">
                    <td colSpan="5">
                      <strong>Message:</strong> {entry.message}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">No entries yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Comment;
