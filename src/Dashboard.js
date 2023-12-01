
import React from 'react';
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <section>
        <h2>My Courses</h2>
        <ul>
          <li>Course 1</li>
          <li>Course 2</li>
          <li>Course 3</li>
        </ul>
      </section>
      <section>
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
      </section>
      <section>
        <h2>Announcements</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.</p>
      </section>
      <section>
        <h2>Grades</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Course 1</td>
              <td>A-</td>
            </tr>
            <tr>
              <td>Course 2</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>Course 3</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dashboard;
