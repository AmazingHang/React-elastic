import { Descriptions } from "antd";

const JobDescription = ({ props }) => (
  <Descriptions size="default">
    <Descriptions.Item label="公司">{props.company}</Descriptions.Item>
    <Descriptions.Item label="位置">{props.location}</Descriptions.Item>
    <br />

    <Descriptions.Item label="类别">{props.type}</Descriptions.Item>
    <Descriptions.Item label="岗位">{props.category}</Descriptions.Item>
    <br />

    <Descriptions.Item label="简述" span={3}>
      {props.description}
    </Descriptions.Item>
    <Descriptions.Item label="要求" span={3}>
      {props.requirement}
    </Descriptions.Item>
  </Descriptions>
);

export default JobDescription;
