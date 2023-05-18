import { Descriptions } from "antd";

const JobDescription = props => (
  <Descriptions size="default">
    <Descriptions.Item label="位置">{props.location}</Descriptions.Item>
    <Descriptions.Item label="类别">{props.type}</Descriptions.Item>
    <Descriptions.Item label="职位">{props.category}</Descriptions.Item>
    <Descriptions.Item label="简述">{props.description}</Descriptions.Item>
    <br />
    <br />
    <Descriptions.Item label="要求">{props.requirement}</Descriptions.Item>
    <br />
    <br />
  </Descriptions>
);

export default JobDescription;
