import React, { Component } from "react";
import { Table, Popup, List, Icon } from "semantic-ui-react";
import { Common } from "./Common";
export default class Trim extends Component {
  onClick = (i, v) => {
    this.props.onChange(i, v);
    this.props.calcTotalPrice();
  };

  render() {
    return (
      <Table
        compact="very"
        singleLine
        size="small"
        celled
        selectable
        fixed
        unstackable
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>모델명</Table.HeaderCell>
            <Table.HeaderCell>가격</Table.HeaderCell>

            <Popup
              trigger={
                <Table.HeaderCell>
                  주행거리 <Icon name="question circle outline" />
                </Table.HeaderCell>
              }
              position="top center"
              size="small"
            >
              <Popup.Content>
                <List>
                  <List.Item>
                    <List.Content>
                      <List.Header>EPA (좌측 수치)</List.Header>
                      <List.Description>
                        미국 환경보호청 측정 수치
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header>WLTP (우측 수치)</List.Header>
                      <List.Description>
                        세계 표준 자동차 시험방식 측정 수치
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Popup.Content>
            </Popup>

            <Table.HeaderCell>0-100 km/h</Table.HeaderCell>
            <Table.HeaderCell>구동방식</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.trims.map((v, i) => (
            <Table.Row
              key={i}
              active={this.props.base_selected === i}
              onClick={() => this.onClick(i, v)}
              style={{ cursor: "pointer" }}
            >
              <Table.Cell>{v["이름"]}</Table.Cell>
              <Table.Cell>
                {Common.comma(this.props.usdTokrw(v["가격"])) + " 원"}
              </Table.Cell>
              <Table.Cell>{`${v["주행거리EPA(km)"]} km / ${
                v["주행거리WLTP(km)"]
              } km`}</Table.Cell>
              <Table.Cell>{`${v["0-100(km/h)"]} 초`}</Table.Cell>
              <Table.Cell>{v["구동방식"]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}
