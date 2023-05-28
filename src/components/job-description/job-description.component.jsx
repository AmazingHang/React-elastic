import { Descriptions, Typography } from "antd";
const { Paragraph } = Typography;
const JobDescription = ({ props }) => (
  <Descriptions size="small">
    <Descriptions.Item label="公司">{props.company}</Descriptions.Item>
    <Descriptions.Item label="位置">{props.location}</Descriptions.Item>
    <br />

    <Descriptions.Item label="类别">{props.type}</Descriptions.Item>
    <Descriptions.Item label="岗位">{props.category}</Descriptions.Item>
    <br />

    <Descriptions.Item label="简述" span={3}>
      <Paragraph
        ellipsis={{
          rows: "3",
          expandable: true,
          symbol: "更多",
        }}>
        {props.description}
      </Paragraph>
    </Descriptions.Item>
    <Descriptions.Item label="要求" ellipsis span={3}>
      <Paragraph
        ellipsis={{
          rows: "2",
          expandable: true,
          symbol: "更多",
        }}>
        {props.requirement}
      </Paragraph>
    </Descriptions.Item>
  </Descriptions>
);

export default JobDescription;
