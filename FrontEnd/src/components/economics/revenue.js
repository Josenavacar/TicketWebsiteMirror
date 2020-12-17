import React, { Component } from 'react'
import authService from '../../services/auth.service';
import TicketService from '../../services/TicketService'

export default class revenue extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tickets: [],
        }
    }

    componentDidMount() {
        TicketService.getTickets().then((res) => {
            this.setState({tickets: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Ticket List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> # </th>
                                <th> UserID </th>
                                <th> MatchID </th>
                                <th> Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                    <tr key = {ticket.id}>
                                        <td>{ticket.id}</td>
                                        <td>{ticket.fanID}</td>
                                        <td>{ticket.matchID}</td>
                                        <td>{ticket.price} €</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                        <h3>Total Revenue: {this.state.tickets.reduce((a, b) => a + (b['price'] || 0), 0)}€</h3>
                </div>
            </div>
        )
    }
}
