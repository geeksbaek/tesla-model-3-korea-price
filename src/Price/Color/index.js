import React, { Component } from "react";
import { Table, Checkbox } from "semantic-ui-react";
import { Common } from "../Common";

export default class Color extends Component {
  onClick = (i, v) => {
    this.props.onChange(i, v);
  };

  render() {
    return (
      <Table compact="very" celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>색상</Table.HeaderCell>
            <Table.HeaderCell>가격</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.options["color"].map((v, i) => (
            <Table.Row key={i} active={this.props.color_selected === i}>
              <Table.Cell>{v["이름"]}</Table.Cell>
              <Table.Cell>
                {Common.comma(Common.usdTokrw(v["가격"])) + " 원"}
              </Table.Cell>
              <Table.Cell collapsing>
                <Checkbox
                  radio
                  checked={this.props.color_selected === i}
                  onClick={() => this.onClick(i, v)}
                  onChange={this.props.calcTotalPrice}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}