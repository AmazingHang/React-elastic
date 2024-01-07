import { Card } from "antd";
import { Descriptions, Typography } from "antd";
const { Paragraph } = Typography;
const JobCardItem = ({ props }) => (
  <Card size="small" title={props.name} extra={<a href={props.url}>More</a>}>
    <Descriptions size="small" column={3}>
      <Descriptions.Item label="公司" span={1}>
        {props.company}
      </Descriptions.Item>
      <Descriptions.Item label="位置" span={1}>
        {props.location}
      </Descriptions.Item>
      <br />
      <Descriptions.Item label="类别" span={1}>
        {props.type}
      </Descriptions.Item>
      <Descriptions.Item label="岗位" span={1}>
        {props.category}
      </Descriptions.Item>
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
  </Card>
);
export default JobCardItem;
