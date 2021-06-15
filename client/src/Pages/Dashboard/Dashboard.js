import React from 'react';
import './Dashboard.css';

const Dashboard = () =>{
    return(
        <div id = 'boardId'>
            <h1>
                Welcome to Finance-Fix!
            </h1>
            {/* <p>
                Finance-Fix will allow you to manually add expenses, or integrate with Plaid.<br /><br />
                Your previous months expenses will not show up after that month has passed.<br /><br />
                They aren't deleted! A work in progress is filtering expenses.
            </p>
            <img id = 'welcome' src = '/assets/welcome.svg' alt = 'welcome'/> */}
            <form id = 'budgetForm'>
                <input type = 'number' min = '0' placeholder = 'Enter a New Monthly Budget' />
            </form>
        </div>
    );
}

export default Dashboard;